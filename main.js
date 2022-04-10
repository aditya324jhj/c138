rightWristY = 0;
rightWristX = 0;
scoreRightWrist = 0;


function preload() {}
function setup() {
	canvas = createCanvas(336,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800,400);
video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotResult);

  
}   
function modelLoaded() {
  console.log('Model Loaded!');
}
function draw(){

  
    if(scoreRightWrist > 0.2)
    {
      fill("red");
      stroke("red");
      circle(rightWristX, rightWristY, 30);
    }
  
    image(video , 0 , 0 , 336,336);
}

function gotResult(results)
  {
	if(results.length > 0)
	{
		console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }