## Box Model
Każdy element jest interpretowany jako _box_ składający się z:
- margin zewnętrzna odległość od border, odpycha elementy
- border
- padding wewnętrzna odległość od border, rozszerza element.
- zawartość

### Margin collapsing
Polega na nakładaniu się odziedziczonych wartośći, takich jak margin pochodzący z body, standardowo może to być 3px. Jeżeli więc na nasz element ustanowimy 5px, dostaniemy łącznie 8. 

## Width && Height
Elementy blokowe zajmują 100% szerokości rodzica, takie jak nagłówki czy div. 
Height 100% nie daje w rezultacie wysokośći całego ekranu. Dotyczy tak samo wysokości rodzica. Można t uzyskać stosując height 100% na tagu html i przekazując go niżej. 

### Box sizing
Stosując width & height, wewnątrz modelu box, zastosowaliśmy je na na zawartośći. Dodając teraz border zwiększ się rozmiar całego elementu. Tak samo zwiększą go padding czy margin. Ustawiając więc szerokśc na 500px należy do niej dodać cały _content box_ to zachowanie można zmienić poprzez własność
`box-sizing: ` domyślnie przypisaną na `content-box` właśnie, można to zmienić na `border-box` i od teraz nasze 500px będzie uwzględniało cały _box model_ **poza margin**

## Calc
`width: calc(100% - 54px);` bardzo ważne są spacje pomiędzy wartościami

## Pseudo klasy i pseudo elementy
 Pozwalają dodać style na szczególny stan elementu jak najechanie kursorem myszy. Dodawane z dwukropkiem np. div:hover. 
 Pseudo elementy pozwalają nadać styl na poszczegółne części elementu. Dodawane z **dwoma** dwukropkami np. after i before.

 ## Grupowanie selektorów
 Można grupować selektory dopisując je po przecinku 
 ```
.main-nav__item a:hover,
.main-nav__item a:active {
    color: white;
    border-bottom: 5px solid white;
}
 ```
 