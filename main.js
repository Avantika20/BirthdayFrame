function preload() {

}

function setup() {
  canvas = createCanvas(480, 380);
  canvas.position(250, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 10, 10, 460, 360);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(30, 30, 70);

  fill(0, 255, 0);
  stroke(0, 255, 0);
  circle(100, 30, 80);

  fill(0, 160, 255);
  stroke(0, 160, 255);
  circle(170, 30, 70);

  fill(255, 255, 0);
  stroke(255, 255, 0);
  circle(230, 30, 70);

  fill(255, 165, 0);
  stroke(255, 165, 0);
  circle(300, 30, 70);

  fill(0, 255, 0);
  stroke(0, 255, 0);
  circle(370, 30, 80);

  fill(0, 160, 255);
  stroke(0, 160, 255);
  circle(430, 30, 90);

  fill(255, 255, 0);
  stroke(255, 255, 0);
  circle(450, 80, 70);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(450, 140, 70);

  fill(0, 255, 0);
  stroke(0, 255, 0);
  circle(450, 200, 80);

  fill(0, 160, 255);
  stroke(0, 160, 255);
  circle(450, 250, 70);

  fill(255, 255, 0);
  stroke(255, 255, 0);
  circle(450, 300, 70);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(460, 360, 70);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(30, 350, 80);

  fill(128, 0, 128);
  stroke(128, 0, 128);
  circle(415, 350, 60);

  fill(0, 255, 0);
  stroke(0, 255, 0);
  circle(100, 350, 80);

  fill(0, 160, 255);
  stroke(0, 160, 255);
  circle(170, 350, 70);

  fill(255, 255, 0);
  stroke(255, 255, 0);
  circle(230, 350, 70);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(300, 350, 70);

  fill(0, 255, 0);
  stroke(0, 255, 0);
  circle(360, 350, 80);

  fill(128, 0, 128);
  stroke(128, 0, 128);
  circle(30, 90, 70);

  fill(0, 160, 255);
  stroke(0, 160, 255);
  circle(30, 160, 90);

  fill(255, 255, 0);
  stroke(255, 255, 0);
  circle(30, 220, 80);

  fill(255, 165, 0);
  stroke(255, 165, 0);
  circle(30, 300, 90);
}

function take_snapshot(){    
  save('Your Picture.png');
}
