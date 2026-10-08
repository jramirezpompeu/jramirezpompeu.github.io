function setup() {
  createCanvas(600,600);//Crea un área de dibuix de 600 pixels quadrats, 600 pixels d'ample i 600 pixels d'alçada, canvas és àrea de dibuix. Setup és la configuració o característiques del nostre codí
}

function draw() {//draw significa dibuixar
  background(0);//fons de color gris, és de color gris  perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 és blanc
  fill(103,243,103)//fill és omplir de color el que hi ha a contuniació en aquest cas el·lipse. El primer número es el nivell de vermellor(R:red), el segon número es el nivell de verdor(G:green) i el tercer número es el nivell de blavor(B:blue). Podem fer 255X255X255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscant a google colors RGB.
  ellipse(300,300,200,200)//És la cara sencera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipse en píxels i el quart l'alçada de la el·lipse. Sempre els números son píxels contats des de la cantonada superior esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(92,213,243);//color dels ulls
  ellipse(252,268,50,40);//es l'úll dret perquè és 350 de X al centre
  ellipse(352,268,50,40);//és l'ull esquerra perquè es 250 pixels de X del centre
  fill(255,51,51);//és el color de la boca i es vermellós perqué te molta quantitat de vermell
  arc(301,350,115,50,0,PI);//boca
  noFill();//no omplis de color la cella
  arc(250,260,60,35,PI,0);//cella esquerra
  strokeWeight(3)
  line(325,245,375,245);//cella dreta: els dos primers números són la X 
}
