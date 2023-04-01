Domyślną wartością dla position jest static. Nie pozwala na pozycjonowanie.


## Fixed
Wyciąga element z document flow, inne elementy zajmą jego miejsce. Zachowują się one jak inline-block. Fixed pozwala na pozycjonowanie, nawiązujące do tagu viewport. Ustawienia top/left nadpisują margines.

Position fixed przydaje się do background-image. Można w taki sposób osiągnąć efekt stałego tła, po którm można scrollować. 
Ddodatkowo wartość z-index pozwala _oddalić_ obraz
```
.background {
    background: url("../img/plans-background.jpg");
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -100;
}
```

## Absolute
Usuwa element z document flow. Jego kontekstem pozycjonowania jest najblizszy rodzic z ustalnoną _position_. W przeciwnym razie pozycjonuje się on w oniesieniu do elementu HTML. 

## Relative oraz Overflow
Nie zmienia zasadniczo zachowania elementu, pozwala go pozycjonować względem samego siebie. Relative stanowi też odniesienie dla Absolute. Relative nie usuwa elementu z document flow. Overflow pozwala zminić zachowanie wyświetlanego elementu wewnątrz rodzica. W elemencie rodziaca ustawiamy overflov: hidden i wowczas kazdy element dziecka z wlasnością position: relative przesunięty poza granice parenta nie bedzie widoczny.

## Sticky
Połączenie relative i fixed. Zachowa się jak fixed gdy osiągnie granicę, zwykle w połączeniu z własnością top.
```
position: fixed,
top: 30px
```
oznacza że element dokleii się do wysokości 30 pikseli gdy tam dotrze. Domyślnie powraca na swoje miejsce gdy osiągnie koniec elelmentu rodzica. 

### Z-index ma zastosowanie tylko do elementów z przypisaną własnośćią position.