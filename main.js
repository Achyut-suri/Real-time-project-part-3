function preload()
{

}

function setup()
{
canvas = createCanvas(250 , 200);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/T1Z2jjFHv/model.json',modelLoaded);
}

function draw()
{
image(video, 0 , 0 , 350 , 300);

}



function modelLoaded()
{
console.log('Model Loaded!');
}


function gotResult(error , results)
{
if(error)
{
console.log(error);
}
else
{
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.tofixed(3);

}}