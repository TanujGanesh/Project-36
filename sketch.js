var dg,sdg,hdg;
var fd,fdsk,fdobj;
var fedt,lfed;
var fed,adfd;
var dbase;
//var nmbx,vue,mkimg,mkbt;

function preload(){
  sdg=loadImage("Images/Dog.png");
  hdg=loadImage("Images/happy dog.png");
  //mkimg=loadImage("Milk.png");
}

function setup() {
  createCanvas(1000,400);
  dbase= firebase.database();
  
  fdobj= new Food();
  fdsk=dbase.ref('Food');
  fdsk.on("v",rdsk)

  dg= createSprite(800,200,150,150);
  dg.addImage(sdg);
  dg.scale= 0.15;

  fed= createButton("Feed the dog");
  fed.position(700,120);
  fed.mousePressed(fddg);

  adfd= createButton("Add food");
  adfd.position(800,120);
  adfd.mousePressed(adfds);

}

function draw() {
  background(46,139,87);
  fdobj.display();

  //fedt= dbase.ref('/')
  drawSprites();
}

function rdsk(data){
  fd= data.val();
  fdobj.upfdsk(fd);
}

function fddg(){
  dg.addImage(hdg);
  fdodj.upfdsk(fdobj.gtfdsk()-1);
  dbase.ref('/').update({Food:fdobj.gtfdsk()})
}
//function to update food stock and last fed time
function adfds(){
  fd++;
  dbase.ref('/').update({Food:fd})
}

//function to add food in stock
