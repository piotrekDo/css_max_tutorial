Stosujemy słowem `transform`
zapisywane w postaci funkcji. Np `transform: rotateZ(45deg)` odwraca obiekt.
Domyślnie punkt odniesienia ustalony jest na środek. Zachowanie to można zmienić z zapisem `transform-origin`
 domyślnie ustalonym na `center`. `transform origin` przyjmuje wartości takie jak `top` albo `top left` ale można też zapisać piksele, remy i inne jednostki w odniesieniu do prawego górnego rogu, np. `transform-origin: 30px 30px`; Tak wyznaczony punkt pozostaje na miejscu i całość dookoła jest przesunięta. 

 ## Translate
 
 Przesuwa element na wskzanej osi np. `translate: translateX(10px)`. Trzeba pamiętać, że na osie ma wpływ rorate.
 Jeżeli elelment został odwrócony o 45*, przesunie się po skosie. 
 
 Pozwala też przesuwać elelemnty z position static.

 ## Skew & Scale
 Skew pozwala przekrzywiać elementy, można w taki sposób uzyskać np. rąb. Skew na osiach X oraz Y może dać efekt 3d.
 `transform: skewX(20deg)`

 Scale może powiększyć/ pomniejszyć obraz.

 ## Rotate 3D - perspective
 `transform: perspective()` pozwala określać dystans od elementu, gdzie 1px to jego środek. Można też zastosować własność `perspective` dla elementu rodzica, kontenera. Wówczas nie stosujemy `transform: perspective()` na elemencie zagnieżdżonym. `perspective-origin` pozwala przesunąć miejsce _obserwacji_.
 Do kontenera warto też przypisać własność `transform-style: preserve-3d`

Na elemencie dziecka można zastosować własność `backface-visibility: hidden`, oznaczające że nie będzie widoczny tył elementu, można dzięki temu zastosować dwustronną kartę(?).
