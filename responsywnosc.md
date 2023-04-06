W celu zachowania odpowiedniego skalowania między urządzeniami powinno się dodawać tag:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">

DODATKOWO
maximum-scale=2.0 pozwala określać maksymalny zoom
minimum-scale=1.0 określa maxymalny zoom out, ustawienie równe z domyślnym zablokuje zoom out
```
W przeciwnym przypadku urządzenia będą starały się _upychać_ widok tak, aby był zbliżony do widoku na desktopie.  

Dobrym podejściem jest _mobile first_ czyli projektowanie widoku pod urządzenia mobilne i dostosowanie ich następnie dla desktopa.

## Media query
pozwalają dostosować widok do rozmiaru ekranu zapisiwane w postaci:
```
@media (min-width: 40rem) {
  .toggle-button {
    display: none;
  }
```

Odpalają się na własność min/max width.
Min oznacza, że query odpali się **powyżej** progu, jeżeli viewport ma conajmniej 40rem szerokości. Max odwrotnie
 
Kolejność zapisu media query ma znaczenie. Powinny być zapisywane malejąco/rosnąco w dół.
```
@media (min-width: 600px) {
    .some-class {
    margin: 3rem auto;
    max-width: 1500px;
    }
}

@media (min-width: 900px) {
    .some-class {
    margin: 3rem auto;
    max-width: 1500px;
    }
}
```

Jeżeli kolejność byłaby odwrotna, to warunek 900px niebyłbyliwy do spełnienia i niżej zapisany warunek 600px zawsze byłby nadrzędny. W powyższej sytuacji jednak najpierw osiągamy wartość 600px a dodatkowo przy 900 uruchamiana jest kolejna querka. 