let time = 0;
let wave = [];
let numCirclesSlider;
let circleRadiusSlider;
let oPathButton;
let mPathButton;
let highlightCircleButton;
let speedSlider;
let posX = [];
let posY = [];
let boolO = false;
let boolM = false;
let boolC = false;

function setup() {
  createCanvas(800, 400);
  createSpan("<b>Interact with the model!</b><br>")
  createSpan("Number of Circles: 1")
  //interactive sider
  numCirclesSlider = createSlider(1, 20, 1);
  createSpan("20 | Circle Radius: 1")
  circleRadiusSlider = createSlider(1, 200, 75);
  createSpan("200 <br> Path Speed: Clockwise")
  speedSlider = createSlider(-10,10,5)
  createSpan("Counterclockwise<br>")
  oPathButton = createButton('Trace Original Path?')
  oPathButton.mousePressed(traceOrigPath);
  mPathButton = createButton('Trace Moving Path?')
  mPathButton.mousePressed(traceMovingPath);
  highlightCircleButton = createButton('Highlight Latest Circle?')
  highlightCircleButton.mousePressed(highlightCircle)
  createSpan("<br><br><b>About This Model:</b><br> This model aims to be a visual aid to what a fourier series is. Wikipedia defines it as “an expansion of a periodic function into a sum of trigonometric functions.” In this model, each rotating circle is representative of one sine wave; a sine wave can be seen when 'Number of Circles' is set to '1' and 'Trace Moving Path?' is clicked. In essense, a fourier series is breaking down functions and patterns as combinations of simple oscillations. This model does not exactly model a fourier series, as it does not implement the fourier series equation, but it is a great tool for undersanding the topic.")
  createSpan("<br><br><b>How it Works/How to Use it:</b><br> A point moves around the circumference of a circle at a constant speed. This speed along with the circle size can be modified with the 'Path Speed' and 'Circle Radius' sliders, respectively. If the number of circles is increased using the 'Number of Circles' slider, a circle of smaller size will be created, where it rotates at an increased speed and its center will be on the previous circle's point. To visualize what these rotating circles represent, click on 'Trace Moving Path?' This will display a continuing series of points which effectively graphs the position of the last rotating point, traslated to the right. Unique graphs can be created through combinations of the sliders. 'Trace Original Path?' graphs the exact position of the last rotating point, and 'Highlight Latest Circle?' makes the color of the latest circle red.")
  
  createSpan("<br><br><b>Things to Notice:</b><br> <li>Difference between original path and moving path. How do they relate to one another?</li><li>What kind of shape do you expect the moving path to creat if the number of circles to go infinity?</li>")
  createSpan("<br><br><b>Things to Try:</b><br> <li>Try different combinations of the sliders and note down any similarities and differences between them</li>")
  createSpan("<br><br><b>Extending the Model:</b><br> <li>3d version of the model that implements complex numbers</li> <li> User fourier series equation to create drawings</li> ")
}

function draw() {
  background(220);
  translate (200,200);
  
  let x = 0;
  let y = 0;

  for (let i = 0; i < numCirclesSlider.value(); i++) {
    prevx = x;
    prevy = y;
    //n = 1, 3, 5, 7, ...
    let n = i * 2 + 1
    let radius = circleRadiusSlider.value() * (4 / (n * PI));
    //smaller circles have increased frequency
    x += radius * cos(n * time);
    y += radius * sin(n * time);
    
    if(n == ((numCirclesSlider.value()-1)*2)+1 && boolC){
      stroke('red')
    }
    else{
      //black, 100 is opacity
      stroke(0, 100);
    }
    noFill();
    //static circle
    ellipse(prevx, prevy, radius * 2)
    
    fill(255);
    //rotating dot
    ellipse(x, y, 8);
    //rotating line
    line(prevx, prevy, x, y);
  }
  //add y value to the start of the array
  wave.unshift(y);
  posX.unshift(x);
  posY.unshift(y);
  
  //trail
  beginShape();
  noFill();
  if (boolM == true){
    for (let i=0; i < wave.length; i++) {
      stroke(0)
      fill(0)
      ellipse(i + 150, wave[i],1)
    }
  }
  if (boolO == true){
    for (let i=0; i < posX.length; i++) {
      stroke('red')
      fill('red')
      ellipse(posX[i],posY[i],1)
    }
  }
  
  endShape();
  
  //remove unnecessary elements
  if (wave.length > 350) {
    wave.pop();
  }
  if (posX.length > 100) {
    posX.pop();
  }
  
  //negative change in time makes point go counter clockwise, adjust magnitude for speed (default = 0.05)
  time -= speedSlider.value()/100;
}

function traceMovingPath(){
  wave = [];
  boolM = !boolM;
}

function traceOrigPath() {
  posX = [];
  boolO = !boolO;
}

function highlightCircle() {
  boolC = !boolC;
}