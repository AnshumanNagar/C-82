canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";
var line_width = 1;
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListner("mousedown", mymousedown());

function mymousedown(e) {
  color = document.getElementById("color_Input").value;
  console.log(color);
  line_width = document.getElementById("width_Input").value;
  mouseEvent = "mousedown";
}

canvas.addEventListner("mousemove", mymousemove());

function mymousemove(e) {
  var current_position_of_mousex = e.clientX - canvas.offsetLeft;
  var current_position_of_mousey = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    console.log("last position of x and y coordinates equals to");
    console.log("X = " + last_position_of_x + " Y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("current position of x and y coordinates equals to");
    console.log(
      "X = " + current_position_of_mousex + " Y = " + current_position_of_mousey
    );
    ctx.lineTo(current_position_of_mousex, current_position_of_mousey);
  }

  last_position_of_x = current_position_of_mousex;
  last_position_of_y = current_position_of_mousey;
}

canvas.addEventListner("mouseUp", mymouseup());

function mymouseup(e) {
  mouseEvent = "mouseup";
}

canvas.addEventListner("mouseLeave", mymouseleave());

function mymouseleave(e) {
  mouseEvent = "mouseleave";
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
