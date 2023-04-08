Grid pozwala na bardziej złożony rozkład elementów na stronie, pozwala stworzyć unikalne siatki elementów. Składa się z kolumn oraz wierszy, które mogą przyjąc rózne wartość, pozwala je także łączyć, podobnie jak w Excell. 

[grid generator](https://cssgrid-generator.netlify.app/)

## Display grid
Grid wymaga contenera podobnie jak flexbox. Kontenerowi nadajemy wlasność `display:grid`. Domyślnie grud stworzy tak wiele wierszów ile zangnieżdża elementów. 

## Kolumny i wiersze

`grid-template-columns` przyjmuje wartośći w postaci szerokoci kolumn, np.
`grid-template-columns: 200px 150px 20%` oznacza 3 kolumny, gdzie pierwsza ma 200px, druga 150px a trzecia zajmuje 20% elementu rodzica. Ewentualne pozostale zagnieżdżone elementy stworzą kolejne wiersze.
**_jednostka fr_** oznacza fraction, fragment pozwalający dzielić pozostałe miejsce
`grid-template-columns: 1fr 2fr 1fr 3fr`

`grid-template-rows` działa podobnie, dotyczy wierszy.

## Pozycjonowanie elementów wewnątrz grid
Dla elementu grid można zapisać własność:
`grid-column-start` oraz `grid-column-end` pozwalają _scalać_ komórki określając ich miejsce.
Wewnątrz kontenera można pozycjonować elementy po
`justify-items` np center. Wewnątrz konkretnego elementu `justify-self` pozwala nadpisać to ustawienie.
`align-items` ustawia elementy w wierszu.

`justify-content` pozycjonuje **calą siatkę** na osi x
`align-content` pozycjonuje na osi Y.


