
lipstickX = 0;
lipstickY = 0;
function preload()
{
   lipstick_face = loadImage('https://i.postimg.cc/4NtT1wn6/l1.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video =  createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded()
{
    console.log('poseNet is Inizialized');
}

function gotposes(results)
{
    if(results.length > 0)
    {
       console.log(results);
       lipstickX = results[0].pose.nose.x-17;
       lipstickY = results[0].pose.nose.y-14;
    }
}

function draw()
{
   image(video, 0, 0, 300, 300);
   image(lipstick_face, lipstickX, lipstickX, 30, 30);
}

function take_snapshot()
{
    save("I_put_lipstik.png");
}