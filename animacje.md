## Transition

**Zmiana display blokuje animacje!**
Rozwiązaniem jest najpierw zmienić display a następnie wywołać klasę z animacjami- wewnątrz kodu JS. Wywołanie takiej klasy warto opóźnić poprzez `setTimeout`. Poniżej przykład z animowanym _backdrop_:
```
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });
}
```

Przy zamykaniu _backdrop_ sytuacja musi wyglądać odwrotnie- najpierw usuwamy klasę a następnie wewnątrz `setTimeout` ustawiamy display. Dzięki temu animacja zagra w drugą stronę jeszcze zanim zmienimy `display` co uniemożliwia animowanie. 

wbudowane animacje, określają jakie propsy i jak mają zostać animowane- opóźnienie, czas i timing np. start slow end fast. Props display **nie może** być animowany. Transition przyjmuje 4 argumenty:

- transition-delay
- transition-duration
- transition-property
- transition-timing-function

Można wymieniać kilka propsów w ramach jednego `transition`. _Duration_ określane są jako _ms_ lub _s_.
`transition: opacity 200ms, transform 5s`.

### Timing functions

- **_ease_** wartość domyślna, zwiększa prędkość ku środkowi, zwalnia od środka do końca,
- **_linear_** animacja z róną prędkością,
- **_ease-in_** powolny start, przyśpiesza do końca,
- **_ease-out_** startuje szybko, zwalnia ku końcowi,
- **_ease-in-out_** rozpędza się i zwalnia ku końcowi,

[Cheat sheet](https://easings.net/)


## Animacje i keyframe

Animacje dają więcej kontroli nad przebiegiem animacji, pozwalają określić kroki, na których dzieją się rózne rzeczy. Wykonując animację np. obrotu i powiększenia w tej sytuacji można wywołać start powiększenia dopiero w połowie animacji. Przykład animacji:

```
@keyframes wiggle {
  0% {
    transform: rotateZ(0);
  }
  50% {
    transform: rotateZ(-10deg);
  }
  100% {
    transform: rotateZ(10deg);
  }
}
```

Animiację wywołujemy z propsem `animation`, podając nazwę _keyframe_ oraz podobnie jak w przypadku `transition` określamy czas, timing i ew. opóźnienie
```
.main-nav__item--cta {
  animation: wiggle 400ms 3s 8 ease-out none;
}
```
Powyższy zapis oznacza: czas trwania 0.4s, opóźnienie 3s, duration czyli ilość powtórzen jako 8 i timing. Można użyć `alternate` żeby w połowie odwrócić iterację, alternate wilcza się w duration więc tutaj mamy 8/2 

## Animacje i JS
Istnieją event listnery w JS pozwalające reagować na animacje, zaliczamy do nich `animationstart`, `animationend` oraz `animationiteration`.

```
ctaButton.addEventListener('animationstart', function(event) {
  console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', function(event) {
  console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', function(event) {
  console.log('Animation iteration', event);
});
```

<br>
<br>
<br>
<br>

# Info z kursu

## CSS "transition" Property Deep Dive

The transition property is used as see in the previous video:
**`transition`: WHAT DURATION DELAY TIMING-FUNCTION;**

Example:
`transition: opacity 200ms 1s ease-out;`

Can be translated to: "Animate any changes in the opacity property (for the element to which the transition property is applied) over a duration of 200ms. Start fast and end slow, also make sure to wait 1s before you start".

Instead of this shorthand, you can also specify the four individual properties:

1. [transition-property ](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) => transition-property: opacity;

2. [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) => transition-duration: 200ms;

3. [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) => transition-timing-function: ease-out;

    Possible timing function values are: ease-out , ease-in , linear , cubic-bezier() and a couple of others. See the above link as well as the next lecture for more details.

4. [transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay) => transition-delay: 1s;

You can read the official MDN article on CSS transitions here:  
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions





## CSS "animation" Property Deep Dive
The animation  property is used as see in the previous video:

**`animation`: NAME DURATION DELAY TIMING-FUNCTION ITERATION DIRECTION FILL-MODE PLAY-STATE; **

Example:

animation: wiggle 200ms 1s ease-out 8 alternate forwards running; 

Can be translated to: "Play the wiggle keyframe set (animation) over a duration of 200ms. Between two keyframes start fast and end slow, also make sure to wait 1s before you start. Play 8 animations and alternate after each animation. Once you're done, keep the final value applied to the element. Oh, and you should be playing the animation - not pausing."

Instead of this shorthand, you can also specify the individual properties:

1) [animation-name](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name) => animation-name: wiggle; 

2) [animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) => animation-duration: 200ms; 

3) [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) => animation-timing-function: ease-out; 

    Possible timing function values are: ease-out , ease-in , linear , cubic-bezier()  and a couple of others. See the above link for more details.

4) [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) => animation-delay: 1s; 

5) [animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) => animation-iteration-count: 8; 

6) [animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) => animation-direction: alternate; 

7) [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) => animation-fill-mode: forwards; 

8) [animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state) => animation-play-state: running; 

<br>

You can read the official MDN article on CSS animations here:  
 https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations