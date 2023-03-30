# Podstawy
Style możemy dodawać bezpośrednio w tagach HTML `<section style="">` zapisujemy na zasadzie `nazwa: wartość`. `<section style="background: red">` Kolejne style rozdzielane są ';'.

Drugi sposób to dodanie tagu `<style>` do sekcji `<head>` i zapis styli wtym miejscu.

Trzeci sposób to osobny plik ze stylami. `<link rel="stylesheet" href="main.css">`

## Import czcionek
`font-family: 'Anton', sans-serif;` odpowiada za ustawienie czcionki. Nowe czcionki można dodać na kilka sposobów:
- w sekcji head: 
    ```
    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
    ```

## Wprowadzenie do selektorów i klas
- elementy: tagi html po których można się odwoływać do elementów.
- klasy: współdzielone ustawienia, które można przypisać do wielu elementów poprzez '.'.
- universal: oznaczaany '*' {}
- id: pozwala zaznaczyć unkalny element poprzez '#'
- atrybuty: np wszystki wyłączone przyciski, zaznaczene poprzez \[disabled\]

Można zaznaczać elementy posiadające konkretną klasę np. `a.active` co oznacza anchor z klasą _active_.
**Kolejność zapisanych klas w pliku .css ma znaczenie!**- zapisując do elementu więcej niż jedną klasę, w sytuacji gdy jedna z klas nadpisuje wartości innej decyduje kolejność- która z klas jest zapisana niżej. Nie ma znaczenia kolejność zapisu klas w tagu HTML. 

## Kaskadowanie 
Czasami dwa różne zapisy dotyczą tego samego elemenu, jeden odnosi się do tagu, inny do klasy, którą ten tak posiada. Selektor klasy nadpisuje selektor tagu, ale nie kasuje go. Nadpisuje tylko wspólne cechy. 

## Specificity
Oznacza priorytety
- universal * = 0.
- element/pseudo-element <div> = 1.
- class, pseudo-class, attribute = 10.
- id = 100.
- style inline(zapisywane w tagach HTML) = 1000.
- zapis z !important = 10 000

## Dziedziczenie styli
Niektóre style są dziedziczone przez inne, zagnieżdżone elementy. Dziedziczenie ma niski priorytet i może zostać łatwo nadpisane. 

## Combinators
Pozwalają zwiększyć priorytet zapisu a także dokładniej zaznaczać elementy np. `#product-overview h1 {` zaznaczy wszystkie elementy H1 wewnątrz elementu oznaczonego ID=product-overview. 
- '+' zaznaczy wszystkie elementy obok wyznaczonego. `h2 + p` oznaczy wszystkie paragrafy bezpośrednio ZA H2, będące wewnątrz tego samego rodzica.
- '~' działa podobnie, ale wszystkie paragrafy ZA nagłówkiem, w tym samym rodzicu. Paragraf ten nie musi być jednak bezpośrednio za nagłówkiem. np. H1 ~ p zaznaczy paragraf, nawet jeżeli bezpośrednnio pod H1 jest H2 a pod H2 jest paragraf. Wymaga jednak tego samego rodzica. 
- '>' dziecko: div > p zaznaczy wszystkie paragrafy wewnątrz div. Jednak jeżeli wewnątrz div jest np. atyicle a w nim również paragraf, to ten paragraf zagnieżdżony w article nie zostanie zasnaczony.
- ' ' div p zaznaczy wszystkich potomkow P w DIV. Podobnie jak w powyższym, ale również ten paragraf z article zostanie zaznaczony. 

## Display
Pozwala zmienić zachowanie z inline na block. Elementy inline zajmują tyle miejsca ile same potrzebują i można ustawić ich klika obok. Elementy blokowe zajmują całość szerokość. Display none **usuwa** element z html, ale pozostawia go w drzewie DOM. Taki element, nie zachowuje wysokośći. Istnieje również display hidden, które nie usuwa elementu z _document flow_ i zachowuje jego miejsce, w taki sposób, że inne elementy tego miejsca nie zajmą. 

Inline-block: miks, gdzie elementy mogą być układane obok siebie i nie zajmują więcej szerokośći, zachowują się jednak jak blokc elemnet przy ustawianiu margin top/bottom czy padding. Elementy można stylować jak blokck element, ale zachowują się inline. Przydatne przy liście UL. 

_Elementom inline nie można nadać marginesu górnego i dolnego, zostanie on zignorowany. Zastosowanie inline-block sprawia, że elementy te dalej układają się obok siebie, ale można im nadać margines górny i dolny. Co więcej jeżeli jednen z trzech elementów posiada margines górny, a pozostałe 2 nie posiadają, cała trójka zostanie odepchnięta_

## !important
Nadpisuje inne selektory. Na ogół nie powinno się go stosować. Dopisywane na końcu właściwości.
`border: 1px solid red !important;`. Znajduje swoje zoastosowanie z JS, gdzie chcemy wymusić jakąś własność, najczęściej chwilowo. 

## peseudoklasa :not
`a:not(.active)` zaznaczy każdy anchor nieposiadający klasy _active_. Nie dodajemuy spacji pomiędzy ':'