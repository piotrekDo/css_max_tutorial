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

## Wprowadzenie do selektorów
- elementy: tagi html po których można się odwoływać do elementów.
- klasy: współdzielone ustawienia, które można przypisać do wielu elementów poprzez '.'.
- universal: oznaczaany '*' {}
- id: pozwala zaznaczyć unkalny element poprzez '#'
- atrybuty: np wszystki wyłączone przyciski, zaznaczene poprzez \[disabled\]

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