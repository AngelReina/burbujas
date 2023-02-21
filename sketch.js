let red = 0;
let green = 0;
let blue = 0;

let burbujas=[];


//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup - frameCount:"+frameCount);
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(800,400);
    background(125);
    /*Datos BUrbuja*/
    let x=random(width);
    let y=random(height);
    let radio=random(10,50);

    let b1= new Burbuja(x,y,radio);
    burbujas.push(b1)
}

//corre continuamente después de la función setup
function draw(){

    console.log("draw - frameCount:"+frameCount);
    console.log("keyCode"+keyCode);
    
    burbujas.forEach(x => {
       x.mostrar();
       x.mover(); 
    });
    
}
function mousePressed(){
    let radio = random(10,50);
    let b1 = new Burbuja(mouseX, mouseY, radio);

    burbujas.push(b1);
}
class Burbuja {
    constructor(x, y, radio){
        this.x = x;
        this.y = y;
        this.radio = radio;
    }
mover(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
}
mostrar(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.radio*2);

}
}