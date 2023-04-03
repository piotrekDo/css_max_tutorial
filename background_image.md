# Tła i obrazy
Własność `background` to skrót. Stanowi skondensowane `background-color` albo `background-image`.
Można definiować jednocześnie kolor i obraz. 

- **_background-size_** decyduje o sposobie wyświetlania tła. Tło może być rozciągnięte, powielone itd.
- **_background-repeat_** ustanawia sposób powielania tła aby wypełnić _viewport_. `no-repeat` aby nie powielać. 
- **_background-position_** pozwala pozycjonować obraz przyjmując max 4 wartośći dla kierunków.
- **_background-origin_** decyduje o uwzględnieniu paddingu itd, podobnie jak box-sizing.
- **_background-attachment_** pozwala ustanowić czy tło scrolluje się razem z zawartocią

Wszystkie prosy można sprawdzić na **MDN**

![background props](/img/background_props.jpg)

## Stylowanie obrazów- tagi <img>
Ustawienia dla width oraz height w odniesieniu dla kontenera nie mają zastosowania, jeżeli umieszczony wewnątrz niego obraz ma większe wartośći. Domyślnym zachowaniem jest powiększenie konteneera dla obrazu. Podobnie z wartościami procentowymi. Aby wymusić respektowanie przez obraz szerokośći i wysokości należy umieścić go w kontenerze i kontenerowi nadać własność `display: inline-block`

```
  .testimonial__image-container {
    width: 65%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
  }

  .testimonial__image {
    width: 100%;
    vertical-align: top;
  }
```

## Gradient
### Linear gradient
Traktowane są jako obrazy. Zapisywane jako funkcja `linear-gradient()` składa się z dwóch części:
Drugim argumentem jest definicja kolorów. Można podać ich kilka. Pierwszym, który można pominąć jest kierunek np. _to bottom_ albo _to right bottom_. Można także zdefiniować kierunek podająć kąt np. `background-image: linear-gradient(30deg, red, blue, green, yellow);` Opcjonalnie, na końcu można podać argument `transparent` co spowoduje dążenie gradientu do przeźroczystości. Transparentność można też przekzać przy definicji kolrów RGBA. Domyślnie każdy kolor zajmuje swoją część wg ilości kolorów- definiująć 3 kolory każdy zajmie 33% powierzchni. To również można kontrolować podająć wartośći procentowe przy każdym z kolorów. `background-image: linear-gradient(180deg, red 70%, blue 80%);` Przekazanie niższej wartośći w drugim kolorze spowoduje _ostrą_ krawędź, ponieważ nie ma miejsca na płynne przejście koloru. 

## Radial gradeient
Pozwalają definiować kształty, przechodzące w inne kolory. Domyślnym jest elipsa promieniująca pierwszym kolorem ze środka do kolejnych kolorów im bliżej brzegu. Drugim rodzajem kształtu jest koło. **Nie ma innych kształtów** `radial-gradient(circle, red, blue);` można również definiować miejsce kształtu:
```
background: radial-gradient(ellipse at top, #e66465, transparent),            
            radial-gradient(ellipse at bottom, #4d9f0c, transparent);
```

Każdy kolejny argument rozdzielamy przecinkami. 

## Stosowanie wielu backgroundó'w jednocześnie
Można zastosować wiele `backgroun-image` i jedno `background-color` przy czym gradienty są uznawane za image. Wówczas ważne jest zapewnienie transparentności na poszczególnych _warstwach_. Całość można zapisać w ramach jednego `background`:
```
  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url("images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box,
    #ff1b68;
```
jednocześnie zastosowany jest gradient, obraz oraz kolor 

## Filtry
Pozwalają zmienić wygląd tła np poprzez rozmycie, cień, odcienie szarości itp.