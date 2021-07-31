var btn_red;
var btn_green;
var btn_blue;
var btn_yellow;
function setup() {
  background(30);
  createCanvas(400,400);
  

}

function draw() 
{
 
if(keyIsDown(RIGHT_ARROW)){
  background("red")
}
if(keyIsDown(LEFT_ARROW)){
  background("blue")
}
if(keyIsDown(UP_ARROW)){
  background("green")
}
if(keyIsDown(DOWN_ARROW)){
  background("yellow")
}
}




