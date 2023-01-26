x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
pika = "";
speak_data = "";
to_number = "";

draw_pika = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width - 200,screen_height-200);
  canvas.position(90,150);
}

function preload(){
  pika = loadImage("mb.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    console.log(to_number);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started Drawing Pikachu"; 
      draw_pika = "set";
    }
    else{
        document.getElementById("status").innerHTML = "The speech has not recognized a number"; 
    }
}


function draw() {
  if(draw_pika == "set"){
    document.getElementById("status").innerHTML = to_number + " Pikachu drawn";
    draw_pika = "";
    speak_data = to_number + "pee kuh choo Drawn";
    speak();
    for(var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 1270);
      y = Math.floor(Math.random() * 450);
      image(pika , x, y, 50, 50);
    }
  }
}
function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
