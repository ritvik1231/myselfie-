var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)

    var content=event.results[0][0].transcript;
    console.log(content)

    if(content=="take my selfie"){
        console.log("take my selfie")
        speak()//calling a function
    }

    document.getElementById("textbox").innerHTML=content;

 
}

function speak(){ //creating a function
    var synth=window.speechSynthesis;
    var speak_data="Taking your selfie in 5 seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data)
synth.speak(utterThis)



Webcam.attach(camera) //to open the camera

 setTimeout(function()
{
    take_snapshot()
    save()

},5000)

}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

var camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>'
    })
}

function save(){
    var link=document.getElementById("link")
    var image=document.getElementById("selfie_image").src
    link.href=image
    link.click()
}