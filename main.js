function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}
function draw(){
    background('#2193b0');
  
}

function modelLoaded(){
    console.log("posenet started the job")

}

function gotPoses(results){

    if(results.length>0){
        console.log(results);

    }
}