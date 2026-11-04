function setup() {
  createCanvas(600,600);//Crea un área de dibuix de 600 pixels quadrats, 600 pixels d'ample i 600 pixels d'alçada, canvas és àrea de dibuix. Setup és la configuració o característiques del nostre codí
}

function draw() {//draw significa dibuixar
  //mouseX=300;mouseY=300
  background(mouseX,mouseY,245,100);//fons de color gris, és de color gris  perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 és blanc
  print("mouseX: "+mouseX)
  print("mouseY: "+mouseY)
  strokeWeight(3)
fill(103-mouseX,+mouseY,mouseX-mouseY)//fill és omplir de color el que hi ha a contuniació en aquest cas el·lipse. El primer número es el nivell de vermellor(R:red), el segon número es el nivell de verdor(G:green) i el tercer número es el nivell de blavor(B:blue). Podem fer 255X255X255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números, buscant a google colors RGB.
  ellipse(mouseX,mouseY,200)//És la cara sencera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipse en píxels i el quart l'alçada de la el·lipse. Sempre els números son píxels contats des de la cantonada superior esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(100-mouseX/6,+mouseY/6,mouseX-mouseY);//color dels ulls
  ellipse(mouseX-48,mouseY-32,40);//es l'úll dret perquè és 350 de X al centre
  ellipse(mouseX+52,mouseY-32,50,40);//és l'ull esquerra perquè es 250 pixels de X del centre
  fill(255,51,51);//és el color de la boca i es vermellós perqué te molta quantitat de vermell
  arc(mouseX+1,mouseY+50,115,50,0,PI);//boca
  noFill();//no omplis de color la cella
  arc(mouseX-50,mouseY-40,60,35,PI,0);//cella esquerra
  strokeWeight(3)
  line(mouseX+25,mouseY-55,mouseX+75,mouseY-55);//cella dreta: els dos primers números són la X 
    fill(201, 8, 38);//color de la nariz
  triangle(mouseX,mouseY-5,mouseX-12,mouseY+20,mouseX+12,mouseY+20);//nariz
}
