function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(100,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    fill(128,0,0)
    stroke(128,0,0)
    circle(40,40,70)
    circle(540,40,70)
    circle(540,400,70)
    circle(40,400,70)
    stroke(0,128,0)
    fill(255,255,)
    rect(150, 20, 600, 450);
    Image(video,0,0,640,480);
}

function take_snapshot(){
    save("student_name.png");
}