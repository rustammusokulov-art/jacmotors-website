import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const domain = 'https://jacmotors-samarkand.uz';
const errors = [];
const pages = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function match(content, expression) {
  return content.match(expression)?.[1]?.trim() ?? '';
}

function fail(file, message) {
  errors.push(`${path.relative(root, file)}: ${message}`);
}

for (const file of walk(root).filter((item) => item.endsWith('.html'))) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  if (relative.startsWith('yandex_')) continue;
  const content = fs.readFileSync(file, 'utf8');

  for (const forbidden of ['jacmotors-sam.netlify.app', '+998 (78) 707-50-50', 'JAC SANRAY']) {
    if (content.includes(forbidden)) fail(file, `обнаружено устаревшее значение: ${forbidden}`);
  }

  const title = match(content, /<title>([\s\S]*?)<\/title>/i);
  const robots = match(content, /<meta\s+name="robots"\s+content="([^"]+)"/i);
  const h1Count = (content.match(/<h1(?:\s|>)/gi) ?? []).length;
  if (!title) fail(file, 'нет title');
  if (!robots) fail(file, 'нет meta robots');
  if (h1Count !== 1) fail(file, `должен быть один H1, найдено: ${h1Count}`);

  const noindex = robots.toLowerCase().includes('noindex');
  if (noindex) continue;

  const description = match(content, /<meta\s+name="description"\s+content="([^"]+)"/i);
  const canonical = match(content, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (title.length < 30 || title.length > 60) fail(file, `длина title ${title.length}, ожидается 30–60`);
  if (description.length < 100 || description.length > 165) fail(file, `длина description ${description.length}, ожидается 100–165`);
  if (!canonical.startsWith(`${domain}/`)) fail(file, `неверный canonical: ${canonical || 'отсутствует'}`);

  for (const lang of ['ru-UZ', 'uz-UZ', 'x-default']) {
    if (!content.includes(`hreflang="${lang}"`)) fail(file, `нет hreflang ${lang}`);
  }

  const jsonLdBlocks = [...content.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (jsonLdBlocks.length === 0) fail(file, 'нет структурированных данных JSON-LD');
  for (const [, json] of jsonLdBlocks) {
    try { JSON.parse(json); } catch (error) { fail(file, `невалидный JSON-LD: ${error.message}`); }
  }

  for (const [, src] of content.matchAll(/<img[^>]+src="([^"]+)"/gi)) {
    if (/^(?:https?:|data:)/i.test(src)) continue;
    const image = path.resolve(path.dirname(file), src.split(/[?#]/)[0]);
    if (!fs.existsSync(image)) fail(file, `не найдено изображение ${src}`);
  }

  pages.push({ file, title, canonical });
}

for (const field of ['title', 'canonical']) {
  const seen = new Map();
  for (const page of pages) {
    if (seen.has(page[field])) {
      fail(page.file, `дублируется ${field} со страницей ${path.relative(root, seen.get(page[field]))}`);
    } else {
      seen.set(page[field], page.file);
    }
  }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((item) => item[1]));
for (const page of pages) {
  if (!sitemapUrls.has(page.canonical)) fail(page.file, 'canonical отсутствует в sitemap.xml');
}
for (const url of sitemapUrls) {
  if (!pages.some((page) => page.canonical === url)) errors.push(`sitemap.xml: URL не соответствует индексируемой странице: ${url}`);
}
if ((sitemap.match(/<lastmod>2026-10-03<\/lastmod>/g) ?? []).length !== sitemapUrls.size) {
  errors.push('sitemap.xml: не у всех URL есть актуальный lastmod');
}

const robotsTxt = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robotsTxt.includes(`Sitemap: ${domain}/sitemap.xml`)) errors.push('robots.txt: неверная ссылка на sitemap');
if (!robotsTxt.includes('Host: jacmotors-samarkand.uz')) errors.push('robots.txt: отсутствует основной Host');

if (errors.length) {
  console.error(`SEO-проверка не пройдена (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`SEO-проверка пройдена: ${pages.length} индексируемых страниц, ${sitemapUrls.size} URL в sitemap.`);
