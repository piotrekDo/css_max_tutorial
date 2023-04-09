# SASS / SCSS

Rozszerza CSS przy developmencie, nie jest uruchamiany w przeglądarce, poprawia wydajność. Jest kompilowany po developmencie. Pozwala zagnieżdzać reguły CSS, ustanawiać zmienne, tworzyć pętle i stosować warunki logiczne, wprowadza dziedziczenie. **Wymaga instalacji** [link](https://sass-lang.com/install).

SASS wprowadza nowy syntax, usuwający średniki i klamry, podobnie jak yaml. SCSS pozwala zachować syntax znany z CSS i działa tak samo.

## Kompilacja plików SASS/SCSS

W folderze projektu zapisujemy `sass main.scss main.css` co pozwoli przepisać plik scss na css.
Można wymusić na SASS _pilnowanie_ zmian i kompilację pliku przy każdej zmianie `sass --watch main.scss:main.css`

## Zagnieżdżanie

Pozwala zastąpić:

```
.documentation-links {
  list-style: none;
  margin: $size-default 0 0 0;
  padding: 0;
  @include display-flex();
  flex-direction: column;
}

 .documentation-links li {
    margin: $size-tiny 0;
    background: white;
  }
```

<br>
Poniższym zapisem:

```
.documentation-links {
  list-style: none;
  margin: $size-default 0 0 0;
  padding: 0;
  @include display-flex();
  flex-direction: column;

  li {
    margin: $size-tiny 0;
    background: white;
  }
}
```

Zagnieżdżanie może iść wielopoziomowo, w tak zapisanym `li` można zapisać kolejne poziomy zagnieżdżenia, można też poza `li` dopisać inne klasy wewnątrz `.documentation-links`.

### Zagnieżdzenie własności

Niektóre propsy jak np. `flex` posiadają wiele opcji jak poniższe direction czy wrap. Taki zapis również można zagnieździć:

```
.container {
  flex: {
    direction: column;
    wrap: nowrap;
  }
  align-items: center;
  box-sizing: border-box;
}
```

### Zagnieżdżanie pseudoklas z ampersand- &

W sposób jak zapisano poniżej można zagnieździć pseudoklasy przypisane do konkretnej klasy css:

```
  .documentation-link {
    text-decoration: none;
    color: map-get($colors, main);
    display: block;
    padding: $size-tiny;
    border: $border-default;

    &:hover,
    &:active {
      color: white;
      background: map-get($colors, secondary);
      border-color: map-get($colors, secondary);
    }
  }
```

<br>
**Można również zagnieżdżać Media Query**

## Zmienne

Pozwalają definiować wartośći często powtarzalne w kodzie jak choćby podstawowe kolory. Zmienne definiujemy zaczynając od '$' `$size-default: 1rem;`. Można również tworzyć mapy zmiennych `$colors: (main: #521751, secondary: #fa923f);`. Następnie w konkretnej klasie odwołujemy się do nich poprzez `map-get($MAPA, KONKRETNA_WARRTOSC);`

```
  .documentation-link {
    color: map-get($colors, main);
  }
```

Zmienne warto wydzielać do osobnych plików, aby były dostępne globalnie w ramach całej aplikacji. Wówczas pliki takie należy importować `@import "_variables.scss";`. Plików nie trzeba eksportować jak w JavaScript.

## Wbudowane funkcje

[Pełna lista funkcji](https://sass-lang.com/documentation/modules) jest podzielona na kategorie jak kolor czy math, np `lighten()` przyjmuje podstawowy kolor i wartość pomiędzy 0-100% co pozwala rozjaśnić raz zdefiniowany kolor:
`background: lighten(map-get($colors, main), 80%);`
Pobieramy więc z mapy kolor podstawowy i rozjaśniamy go o 80%.

## Dziedziczenie

Wystarczy dopisek `@extend .class` aby odziedziczyć wszystkie własności odpowiedniej klasy, uprości to zapis w HTML, gdzie nie będziemy musieli w elemencie zapisywać 2 lub więcej klas.

```
.sass-details {
  @extend .sass-section;
  margin: $size-default * 2 0;
}
```

# @Mixin - własne funkcje

Tworzone z dyrektywą
```
@mixin NAZWA(opcjonalne argumenty){
    zawartość
}
```

NP.

```
@mixin display-flex() {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
```

Wykorzystywane w klasie poprzez zapis `@include NAZWA();`
```
.container {
  @include display-flex();
  flex: {
    direction: column;
    wrap: nowrap;
  }
  align-items: center;
  padding: $size-default * 3 0;
  box-sizing: border-box;
}
```

Można w ten sposób wydzielić skomplikowany lub często powtarzany kod do osobnej _metody_.

Przyjmując argumenty można np. stworzyć reużywalne media query, proste wykorzystanie może wyglądać tak:
Mamy w ten sposób coś w rodzaju klasy abstrakcyjnej. 
```
@mixin media-min-width($width) {
  @media (min-width: $width) {
    @content;
  }
}
```

```
html {
  font-size: 94.75%;

  @include media-min-width(40rem) {
    font-size: 125%;
  }
}
```