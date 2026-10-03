$ErrorActionPreference = 'Stop'

$models = @{
    'js8-pro'    = @{ Name = 'JAC JS8 PRO'; Price = '313 950 000'; Ru = 'Семейный семиместный кроссовер'; Uz = "Yetti o'rinli oilaviy krossover" }
    't9'         = @{ Name = 'JAC T9'; Price = '419 265 000'; Ru = 'Полноприводный рамный пикап'; Uz = "To'liq uzatmali ramali pikap" }
    't8'         = @{ Name = 'JAC T8'; Price = '330 330 000'; Ru = 'Рамный пикап 4x4 для работы и отдыха'; Uz = 'Ish va sayohat uchun ramali 4x4 pikap' }
    'm3-plus'    = @{ Name = 'JAC M3 PLUS'; Price = '226 233 000'; Ru = 'Пассажирский минивэн для семьи и бизнеса'; Uz = "Oila va biznes uchun yo'lovchi miniveni" }
    'm3-van'     = @{ Name = 'JAC M3 VAN'; Price = '209 034 000'; Ru = 'Грузовой фургон для городских перевозок'; Uz = 'Shahar yuk tashuvlari uchun yuk furqoni' }
    'm4-plus'    = @{ Name = 'JAC M4 PLUS'; Price = '255 339 000'; Ru = 'Вместительный бизнес-минивэн'; Uz = 'Keng va qulay biznes miniveni' }
    'rf8'        = @{ Name = 'JAC RF8'; Price = '444 675 000'; Ru = 'Премиальный минивэн повышенного комфорта'; Uz = 'Yuqori qulaylikdagi premium miniven' }
    'sunray'     = @{ Name = 'JAC SUNRAY'; Price = '416 745 000'; Ru = 'Коммерческий пассажирский микроавтобус'; Uz = "Tijorat yo'lovchi mikroavtobusi" }
    'sunray-van' = @{ Name = 'JAC SUNRAY VAN'; Price = '383 670 000'; Ru = 'Коммерческий грузовой фургон'; Uz = 'Tijorat yuk furqoni' }
}

foreach ($slug in $models.Keys) {
    $item = $models[$slug]
    $ruPath = Join-Path $PSScriptRoot "..\models\$slug.html"
    $uzPath = Join-Path $PSScriptRoot "..\uz\models\$slug.html"

    $ruTitle = "$($item.Name) в Самарканде — цена и кредит | JAC"
    $ruDescription = "$($item.Ru). Цена от $($item.Price) UZS. Официальный дилер JAC: гарантия, кредит, Trade-In и тест-драйв."
    $uzTitle = "$($item.Name) Samarqandda — narxi va kredit | JAC"
    $uzDescription = "$($item.Uz). Narxi $($item.Price) UZS dan. JAC rasmiy dileri: kafolat, kredit, Trade-In va test-drayv."

    $pages = @(
        @{ Path = $ruPath; Lang = 'ru-UZ'; Title = $ruTitle; Description = $ruDescription },
        @{ Path = $uzPath; Lang = 'uz-UZ'; Title = $uzTitle; Description = $uzDescription }
    )

    foreach ($page in $pages) {
        $content = Get-Content -LiteralPath $page.Path -Raw -Encoding UTF8
        $content = [regex]::Replace($content, '<html lang="[^"]+">', "<html lang=`"$($page.Lang)`">")
        $content = [regex]::Replace($content, '<title>.*?</title>', "<title>$($page.Title)</title>")
        $content = [regex]::Replace($content, '<meta name="description" content="[^"]*">', "<meta name=`"description`" content=`"$($page.Description)`">")
        $content = [regex]::Replace($content, '<meta property="og:title" content="[^"]*">', "<meta property=`"og:title`" content=`"$($page.Title)`">")
        $content = [regex]::Replace($content, '<meta property="og:description" content="[^"]*">', "<meta property=`"og:description`" content=`"$($page.Description)`">")
        $content = $content.Replace('hreflang="ru"', 'hreflang="ru-UZ"').Replace('hreflang="uz"', 'hreflang="uz-UZ"')
        if ($content -notmatch '<meta name="robots"') {
            $robots = '    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">'
            $content = $content.Replace("    <link rel=`"canonical`"", "$robots`r`n    <link rel=`"canonical`"")
        }
        Set-Content -LiteralPath $page.Path -Value $content -Encoding UTF8
    }
}

Write-Host "Updated SEO metadata for $($models.Count * 2) model pages."
