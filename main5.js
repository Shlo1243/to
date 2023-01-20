img="";
status="";
objects=[];

function preload() {
    img=loadImage("Fruit Basket.jfif");
}

function setup() {
    canvas=createCanvas(600,400);
    canvas.position(280,125);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('H3').innerHTML="Status: Detecting Objects";
}

function draw() {
    image(img,0,0,600,400);

    if(status != "") {
        for(i = 0;i < objects.length; i++) {
            document.getElementById('H3').innerHTML="Objects Detected";
            fill('#B25555');
            percentage = Math.floor(objects[i].confidence * 100);
            text(objects[i].label + percentage + "%",objects[i].x + 15,objects[i].y + 15);
            noFill();
            stroke('#B25555');
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelLoaded() {
    status = true;
    console.log("Model Loaded Successfully")
    objectDetector.detect(img,gotResult);
}

function gotResult(error,result) {
    if(error) {
        console.log(error);
    }
}

