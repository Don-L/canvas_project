window.onload = function() {
  var canvas = document.getElementById('main');

  //we need to get a context for the canvas. we can draw on the context. we can have multiple contexts
  var context = canvas.getContext('2d');
  context.lineWidth = 0;
  // context.fillStyle = "rgba(0, 0, 0, 0.5)";
  context.strokeStyle = "rgba(0, 0, 0, 0)";
  // context.fillRect(10,10,50,50); // top left corner x, top left corner y, width, height

  // context.beginPath();
  // context.lineWidth = 10;
  // context.moveTo(100,100);
  // context.lineTo(100,150);
  // context.stroke(); //creates the line described above

  currentCircle = new Circle();

  var drawCircle = function(x,y) {
    var r = currentCircle.radius;
    var t = currentCircle.transparency;
    context.fillStyle = "rgba(0, 0, 0,"+ t + ")";
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2);
    context.stroke();
    context.fill();
  };

  canvas.onclick = function(event) {
    console.log("onclick function");
    drawCircle(event.x, event.y);
  }

  var button = document.getElementById('button');

  // form.onsubmit = handleSubmit;

  button.onclick = function(event) {
    console.log('clicked');
    var input = document.getElementById('circle-radius');
    console.log(input);
    r = input.value;
    console.log(r);
    currentCircle.radius = r;
  }

  var button2 = document.getElementById('button2');

  // form.onsubmit = handleSubmit;

  button2.onclick = function(event) {
    console.log('clicked');
    var input = document.getElementById('circle-transparency');
    console.log(input);
    t = input.value;
    console.log(t);
    currentCircle.transparency = t;
  }

}























