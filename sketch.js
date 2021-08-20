var retFixo, retMovendo;

var obj1, obj2, obj3;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(800,200,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  obj1 = createSprite(100, 100, 50, 50);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj2 = createSprite(200, 100, 50, 50);
  obj2.shapeColor = "green";
  obj2.debug = true;

  obj3 = createSprite(300, 100, 50, 50);
  obj3.shapeColor = "green";
  obj3.debug = true;
}

function draw() {
  background(0,0,0);  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  

  if(isTouching(retMovendo,obj3)){
    obj1.shapeColor = "red";
    obj2.shapeColor = "cyan";
    obj3.shapeColor = "pink";
    retFixo.shapeColor = "blue";
  }else{
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
    obj3.shapeColor = "green";
  }
  
  drawSprites();
}

function isTouching(objeto1, objeto2){
  if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
    && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
    && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
    && objeto2.y - objeto1.y < objeto2.height/2 + objeto1.height/2)
     {
      return true
}
else {
  return false
}

}

