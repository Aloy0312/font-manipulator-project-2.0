function preload() {
    
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",gotResults);
}

function modelLoaded() {
    console.log("Posenet is initialized!")
}

function draw() {
    background("grey");
}

function gotResults(results) {
    if (results.length>0) {
        console.log(results)
    }
}