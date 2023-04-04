Jednostki można zasadniczo podzielić na 3 kategorie

- **_absolute lengths_**- ignorują ustawienia użytkownika
    - px
- **_viewport lengths_**- dostosowują się do obecnego rozmiaru ekranu
    - vh
    - vw
    - vmax
    - vmin
- **_font relative_**- odnoszą się do domyślnego rozmiaru czcionki
    - rem
    - em
- **_procenty_**- odnoszą się do _containing block_, najczęściej jest to parent element.  
W przypadku position fixed jest to viewport.  
W przypadku absolute jest to najbliższy ancestor z position innym niż static- jest to jego zawartość oraz jego padding.

Jednostki vmin oraz vmax odnoszą się odpowiednio do mniejszej lub większej z wartości. Jeżeli viewport wynosi np. 2000px wysokości i 1000px szerokości to vmin oznacza szerokość. 

Jednostka EM odwołuje się do czcionki rodzica i jest jej mnożnikiem. REM to odwołanie do domyślnego ustawienia przeglądarki i ponownie jest jego mnożnikiem. 


## Z kursu

Hiding Scrollbars on Windows machines
After adding vw , you probably saw that the scrollbars appeared in case you are working on Windows. This happens as using vw  on Windows does not include the scrollbars - vw: 100  is  equal to 100% of the viewport width + the scrollbars. On the Mac this is not an issue, but when using Windows it is as the scrollbars are displayed by default.

In case you don't want to display these scrollbars, you can use one of these solutions:

- Use width: 100%  instead of vw: 100

- Add overflow-x: hidden;  to the body selector in the shared.css file to hide the horizontal scrollbar (or overflow-y: hidden  to hide the vertical scrollbar)

Alternatively you could also use the ::-webkit-scrollbar pseudo element. Simply add the following code to the shared.css file:

```
body: :-webkit-scrollbar {
    width: 0
}
```
To make sure this works correctly on different browsers, you have to add additional code to it. This blog post nicely summarizes all the code needed right here.

Make sure to follow these approaches in case you don't want to display the scrollbars on Windows machines.