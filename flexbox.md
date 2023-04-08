Flexbox jest kolejnną opcją display. Składa się z kontenera i elementów w nim zamieszczonych- _Flex Parent/Container_ oraz _Flrx Children/Items_.

![understanding flexbox](/img/understanding_flexbox.jpg)

- kontenerowi nadajemy `display: flex`
  elementy domyślnie układają się inline i wykorzystują całą wysokość i szerokość kontenera.

- `display: inline-flex` kontener przyjmuje szerokość potrzebną dla elementów, nie jest już responsywny.

- `flex-direction` domyślnie `row`.

  - `column` elementy zajmują całą szerokość jak blokowe, z wyjątkiem tych, które mają ustaloną szerokość.

- `flex-wrap` domyślnie `nowrap` zmiana na:
  - `wrap` powoduje, że elementy będą zachowywały swoją minimalną szerokość i będą przechodziły do nowego wiersza. Na zbyt małym ekarnie zachodzi overflow- elementy będą wychodziły poza ekran
  - `wrap-reverse` odwraca elementy, ostani jest pierwszy a także przyjmując całą wysokość rodzica _vel_ najwyższego elementu 'rosną' od dólu, pozostawiając miejsce u góry.

## Main axis vs Cross Axis

Osie main i cross zależą od kierunku flex-direction. Main podąża z godnie z wartośćia:

![main vs cross axis](/img/main_vs_cross_axis.jpg)
<br>
<br>
<br>

### Align items

[Align items na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- `justify-content` działa wzdłuz osi **main**  
- `align-items` działa wzdłuż osi **cross**



`align-self` na konkretnym elemencie **nadpisuje** ustawienie narzucone przez parent. 

<br>
<br>

![align items and justify content](/img/align_items_vs_justify_content.jpg)

## Flex-flow
Skrót kombinacji: flex-direction flex-wrap

## Propsy elementów

- `order` pozwala zmienić porządek elementów domyślna wartość to 0. Wartość 1 przesuwa element na koniec, zgodnie z flex direction. Wartość -1 przesunie element na początek. Wartosć -2 przesuwa o 2 od początku itd. 
- `align-self` nadpisuje `align-items` narzucone przez flex container i pozwala nadpisać to ustaweienie takimi samymi wartośćiami w odniesieniu do konkretnych elementów. 

### Flex-grow & shrink
Przyjmuje domyślną wartość 0 co oznacza, że taki element nie może się rozciągać. Zmiana na 1 oznacza że element może zmienić swoją szerokość niezależnie od ustawionej na sztywno wartośći width. Dodatkowo wartość 2 na innym elemencie spowoduje, że ten element będzie rozciągał się 2x szybciej. Tak samo zadziala to z innymi wartośćiami liczbowymi. 

**Shrink** działa identycznie jednak dotyczą zmniejszania elementu. Tutaj jednak domyślną wartością jest 1, co oznacza, że domyślnie elementy się pomniejszają. 

### Flex-basis
Definiuje rozmiar elementu- wysokość i szerokość **względem główniej osi** pozwala zasąpiść własności width oraz height. Wartość to szerokość przy flex direction row, wysokość przy column. Pozwala to zachować kontrast przy zmianie główniej osi, np. przy zmniejszaniu ekranu. 

`flex-basis: 300px`
przyjmuje również wartości
```
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;
```

### Flex- skrót
Flex grow, shrink oraz basis można zapisać w postaci jenej linijki
`flex: grow shrink basis`, np. domyślne: `flex: 0 1 auto;`