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

    document.getElementById("textbox").innerHTML=content;

    speak()//calling a function
}

function speak(){ //creating a function
    var synth=window.speechSynthesis;
    var speak_data=document.getElementById("textbox").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data)
synth.speak(utterThis)

Webcam.attach(camera) //to open the camera
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

var camera=document.getElementById("camera");