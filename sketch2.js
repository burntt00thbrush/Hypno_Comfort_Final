// hypno-comfort
// by isa vento
// november 2017
// runs on p5.js

//global variable for interactive words
//they are the texts for the buttons on screen
let interactiveWords= ["trance","calm"];
let VidWords = ["beach", "waterfall" ];
let speechWords= ["womaaaaaan", "maaaaan" ]

//THE WAV FILES HERE HYPOTHETICAL FOR NOW, CREATE THE ASSETTS AND PUT THEM IN  

//global variable with trackpaths of wav files for each word
let CALM= ["assets/CALM/Bit0.wav","assets/CALM/Bit1.wav" ,"assets/CALM/Bit2.wav" ,
"assets/CALM/Bit3.wav" ,"assets/CALM/Bit4.wav" ,"assets/CALM/Bit5.wav" ,
"assets/CALM/Bit6.wav" ,"assets/CALM/Bit7.wav" ,"assets/CALM/Bit8.wav" ,
"assets/CALM/Bit9.wav", "assets/CALM/Bit9.wav","assets/CALM/Bit10.wav","assets/CALM/Bit11.wav" ,"assets/CALM/Bit12.wav" ,
"assets/CALM/Bit13.wav" ,"assets/CALM/Bit14.wav" ,"assets/CALM/Bit15.wav" ,
"assets/CALM/Bit16.wav" ,"assets/CALM/Bit17.wav" ,"assets/CALM/Bit18.wav" ,
"assets/CALM/Bit19.wav","assets/CALM/Bit20.wav","assets/CALM/Bit21.wav","assets/CALM/Bit22.wav","assets/CALM/Bit23.wav","assets/CALM/Bit24.wav"
,"assets/CALM/Bit25.wav","assets/CALM/Bit26.wav","assets/CALM/Bit27.wav","assets/CALM/Bit28.wav"];



let TRANCE = ["assets/TRANCE/Bit0.wav","assets/TRANCE/Bit1.wav" ,"assets/TRANCE/Bit2.wav" ,
"assets/TRANCE/Bit3.wav" ,"assets/TRANCE/Bit4.wav" ,"assets/TRANCE/Bit5.wav" ,
"assets/TRANCE/Bit6.wav" ,"assets/TRANCE/Bit7.wav" ,"assets/TRANCE/Bit8.wav" ,
"assets/TRANCE/Bit9.wav","assets/TRANCE/Bit10.wav","assets/TRANCE/Bit11.wav" ,"assets/TRANCE/Bit12.wav" ,
"assets/TRANCE/Bit13.wav" ,"assets/TRANCE/Bit14.wav" ,"assets/TRANCE/Bit15.wav" ,
"assets/TRANCE/Bit16.wav" ,"assets/TRANCE/Bit17.wav" ,"assets/TRANCE/Bit18.wav" ,
"assets/TRANCE/Bit19.wav", "assets/TRANCE/Bit20.wav" ,"assets/TRANCE/Bit21.wav" ,"assets/TRANCE/Bit22.wav" ,
"assets/TRANCE/Bit23.wav" ,"assets/TRANCE/Bit24.wav" ,"assets/TRANCE/Bit25.wav" ,
"assets/TRANCE/Bit26.wav", "assets/TRANCE/Bit27.wav" , "assets/TRANCE/Bit28.wav"  ];


//variable for the sound
let soundPaths = [TRANCE, CALM];

let sounds=[];



let poem=[];

let counter = 0;



//submit button
var submitButton = null;

var seePoemButton = null;

//gloval variable for holding canvas
let canvas = null;

//variables for storing the buttons
var A1, A2, B1, B2, C1, C2 = null;

//array of wordButtons
var wordButtons = [];

var hasSubmitted = false;

var currentScene = 0;

//variable for video buttons
var videoButtons= [];

var speechButtons = [];

//Scene 3 Sound variables

  var soundplaying;
  var start=false; 

//button for Scene 3

var buttonB = {
  x: 1270,
  y: 720,
  d: 200,
}

var bBstate = false;


// loop boolean:
let videoStarted = false;


var voice;


//variable for the CurveVertex of positions of drawNull & drawRelax
var posx= 0;
var posy= 0;
var points = [];

var posix= 0;
var posiy= 0;
var pointz = [];




// setup() runs once at the beginning
function setup() {
  
  //create canvas
  canvas= createCanvas(windowWidth,windowHeight);


  //white background
  background(255);
  
  //create the buttons
  //TODO: fine-tune the width and heights so that
  //you are sure that when u click on them they trigger functions
  //        word = new WordButton(  x,   y,  w, h, word)
  wordButtons[0] = new WordButton(100, 400, 150, 50, 0 );
  wordButtons[1] = new WordButton(400, 400, 100, 50, 1 );
  

  videoButtons[0] = new VideoButton(100, 500,  100, 30, 0 );
  videoButtons[1] = new VideoButton(400, 500, 200, 30, 1 );
  //videoButtons[2] = new VideoButton(600, 800, )
  
  
  speechButtons[0] = new speechButton(100, 700,  100, 30, 0 );
  speechButtons[1] = new speechButton(400, 700, 200, 30, 1 );



  //create the button for submit
  submitButton = createButton('what next?');
  //set its position
  submitButton.position(600, 820);
  //callback for when its pressed
  submitButton.mousePressed(submitted);

  //video of the beach to show in scene 2
  theBeach = createVideo('assets/Videos/thebeach.mp4');
  theBeach.hide();

  //video of the waterfall to show in scene 3
  theWaterfall = createVideo('assets/Videos/thewaterfall.mp4');
  theWaterfall.hide();

  
  

  voice = new p5.Speech();




  //SCENE 3 BUTTONS & SOUND VARIABLES

  soundplaying= -1;

}

// draw() runs on loop, after setup()
function draw() {

  if (currentScene == 0) {
      
      background(255)

      //non-interactive raw questions
 
      textStyle(BOLD);
      fill(0);
      textSize(40);
      text('greetings friends. ',100,100);

      textSize(30);
      text('Welcome to the first of the ',100,200);
      text('HYPN000000000000-COMFORT SESSioNZZZZZZZZZZ',600,200)
      text('A collective meditative hypnosis will ensue.', 100,240); 
      text('Please make yourselves comfortable.',100, 280);


      text('Would you rather fall into a state of', 100,370);

      //text("What kind of setting would cater to your collective needs?" , 100,700);
      text('What kind of setting would you prefer to find yourself in?', 100,470);

      text('Shall this session begin with a', 100,670);
      //show the buttons on the canvas
      for (var i = 0; i < wordButtons.length; i++) {
        wordButtons[i].show();
      }

      for (var i = 0; i < videoButtons.length; i++) {
        videoButtons[i].show();
      }


      for (var i = 0; i < videoButtons.length; i++) {
        speechButtons[i].show();
      }
      
    }
  

  if (currentScene == 1) 
  {
    background(255/3);
    fill('magenta')
    textSize(200);
    textStyle(ITALIC);
    textFont('Courier');
    text('FUCKING RELAX', 100, 200, 500, 500 );

    

    //text('I invite you to sit back: relax your muscles & find the shared element. ', 100, 400, 500, 500 );
    
    talkBack();
    drawNull();
    drawRelax();

    
  }

  if (currentScene == 2) 
  {


     noCursor();
    //once one user has submitted & the user has clicked the button to 
    //play (start)
    submitButton.hide();
    background(255);
   

    if (videoButtons[0].hasBeenClicked){

      theBeach.volume(0.3);
      image(theBeach,0,0);
      image(theBeach,0,720);
      image(theBeach,1270,0);
      image(theBeach,1270,720);


      if(videoStarted == false){
        console.log("started video");
        theBeach.loop();
        videoStarted = true;
      }

    } else if (videoButtons[1].hasBeenClicked){
      
      theWaterfall.volume(0.1);
      image(theWaterfall,0,0);
      image(theWaterfall,0,720);
      image(theWaterfall,1270,0);
      image(theWaterfall,1270,720);

      if(videoStarted == false){
        console.log("started video");

        theWaterfall.loop();
        videoStarted = true;
      }
    }
      
    // if man / if woman  //change pitch
      fill(128 + sin(frameCount*0.05) * 128);
      ellipse(buttonB.x,buttonB.y, buttonB.d, buttonB.d);

      fill(128 + sin(frameCount*0.05) * 128)
      textSize(50);
      text("BREATHE", mouseX, mouseY);

      
  let soundplaying2;
  if(soundplaying == -1){
    soundplaying2 = 0;
  }else{
    soundplaying2 = soundplaying;  
  }   

  if (start){
      

      if (soundplaying == -1 || (poem[soundplaying2].isPlaying() == false)) {
        if(soundplaying<poem.length - 1){
          
          soundplaying++;
          poem[soundplaying].play();
          


        }
        else {
          console.log("resetting soundplaying");
          soundplaying = -1;
        }
         

      } 
      
    } else {
      if(poem[soundplaying2].isPlaying() == true) {
        poem[soundplaying].stop()
        soundplaying = -1;
      }


    }
      
  } 



}
//function for animation in scene 1
function drawRelax(){


    posix = posix + 10
    posiy = posiy + 30
    
    var point = createVector(posix, posiy);
   
    pointz.push(point); 
  

    
    for(var i = 0; i < pointz.length; i++) {
      var topLeft = pointz[i];
      fill(random(30));
      textSize(50);
      text('RELAX', topLeft.x, topLeft.y);
    }
}




function drawNull(){


    posx = posx + 5
    posy = posy + 95
    if(posx>=width){posx=0}
    if(posy>=height){posy=0}
    var point = createVector(posx, posy);
    
    points.push(point); 
  

    
    for(var i = 0; i < points.length; i++) {
      var topLeft = points[i];
      fill(random(30));
      textSize(30);
      text('NULL', topLeft.x, topLeft.y);
    }
}

// function for voice in SCENE 1  
function talkBack(){
  if(counter == 0){
    voice.listVoices();

    if (speechButtons[0].hasBeenClicked== true){
      voice.setVoice(14); 
      voice.setRate(0.4);
      voice.speak("Thank you very much for having provided your responses. The time has come to leave all of your worries behind; Allison YOUR HEALTH IS IN OPTIMUM CONDITION, & fellow classmates of ICM, the concept of a Final has become NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL")
      }
      else if(speechButtons[1].hasBeenClicked == true){
      voice.setVoice(17);  
      voice.setRate(0.5);
      voice.speak("Thank you very much for having provided your responses. The time has come to leave all of your worries behind; Allison YOUR HEALTH IS IN OPTIMUM CONDITION, & fellow classmates of ICM, the concept of a Final has become NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL NULL. ")
      
      }

    }
  counter = 1;
}
    

//function to call the variable hasSubmitted into the draw loop that changes the scene
function submitted(){

if (currentScene==0 && (wordButtons[0].hasBeenClicked == true ||  wordButtons[1].hasBeenClicked == true) && (videoButtons[0].hasBeenClicked== true ||  videoButtons[1].hasBeenClicked== true) && (speechButtons[0].hasBeenClicked == true ||  speechButtons[1].hasBeenClicked == true) ) {

    hasSubmitted = true;
    currentScene = 1;
    randomizeFiles();
console.log('submitbuttonClicked')
  }else if( currentScene==1 ){
    voice.stop();
    currentScene=2;
    console.log('hello');
  }
}




//p5.js function triggered when the mouse is pressed
function mousePressed() {

//mousePressed called if the interactive word buttons are pressed
  if (currentScene==0){
    for (var i = 0; i < wordButtons.length; i++) {
    wordButtons[i].touched(mouseX, mouseY);
    }

    for (var i = 0; i < videoButtons.length; i++) {
    videoButtons[i].touched(mouseX, mouseY);
    }

    for (var i = 0; i < speechButtons.length; i++) {
    speechButtons[i].touched(mouseX, mouseY);
    }
  }




//mousePressed called if the ellipse drawn in Scene 2 is pressed
if (currentScene==2){
  if (dist(mouseX, mouseY, buttonB.x, buttonB.y) < buttonB.d/2){
      start=!start;
      //soundplaying=0;
      console.log('buttonB pushed')
      }
    }
}





//class WordButton
//for interactive word buttons in scene 0
class WordButton {
  
  //constructor
  //x,y position of the word
  //w, h width and height of the word
  constructor(x,y,w,h,word){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.word=interactiveWords[word];
    this.hasBeenClicked = false;
   
  }
 
  //show() is method for showing on canvas
  show(){

    if (this.hasBeenClicked) {
      fill(0);
      textSize(30);
      textStyle(BOLD);
      textFont('Courier');
      text(this.word, this.x, this.y, this.w, this.h);
    } else {
      textSize(30);
      fill(128 + sin(frameCount*0.05) * 128);
      textStyle(ITALIC);
      textFont('Courier');
      text(this.word, this.x, this.y, this.w, this.h);
    }

   
  }

  //touched(cx, cy)
  touched(touchedX, touchedY){
    //check if position of click is inside the bounding box
     if ((touchedX> this.x) && 
      (touchedX < this.x + this.w) && 
      (touchedY > this.y) 
      && (touchedY < this.y + this.h))
      {
        //retrieve current row
        var currentRow = this.row;
        //retrieve current word
        var currentWord = this.word;

        //part of code that helps to only have one word be clicked at a time

        //go through every element and retrieve the one that
        //is on the same row and does not contain the same word
        //so that we are actually retrieving the other element on the row
        for (var i = 0; i < wordButtons.length; i++) {
          if (wordButtons[i].word != currentWord) {
            //only click the current element
            //if the other element on the row has not been clicked yet
            if (wordButtons[i].hasBeenClicked == false) {
              this.hasBeenClicked = !this.hasBeenClicked;
            }
          }
        }

      
      console.log('clicked ' + this.word)
      } 
  }
}

// class for interactive  video buttons

class VideoButton {
  
  //constructor
  //x,y position of the word
  //w, h width and height of the word
  constructor(x,y,w,h,word){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.word=VidWords[word];
    this.hasBeenClicked = false;
    
  }
 
  //show() is method for showing on canvas
  show(){

    if (this.hasBeenClicked) {
      fill(40,30,150);
      textSize(30);
      textStyle(BOLD);
      textFont('Courier');
      text(this.word, this.x, this.y, this.w, this.h);
    } else {
      textSize(30);
      fill(128 + sin(frameCount*0.05) * 128);
      textStyle(ITALIC);
      textFont('Courier');
      text(this.word, this.x, this.y, this.w, this.h);
    }

   
  }

  //touched(cx, cy)
  touched(touchedX, touchedY){
    //check if position of click is inside the bounding box
     if ((touchedX> this.x) && 
      (touchedX < this.x + this.w) && 
      (touchedY > this.y) 
      && (touchedY < this.y + this.h))
      {
       
        //retrieve current word
        var currentWord = this.word;

        //part of code that helps to only have one word be clicked at a time

        //go through every element and retrieve the one that
        //is on the same row and does not contain the same word
        //so that we are actually retrieving the other element on the row
        for (var i = 0; i < videoButtons.length; i++) {
          if (videoButtons[i].word != currentWord) {
            //only click the current element
            //if the other element on the row has not been clicked yet
            if (videoButtons[i].hasBeenClicked == false) {
              this.hasBeenClicked = !this.hasBeenClicked;
            }
          }
        }
        

      
      console.log('clicked ' + this.word)
      } 
  }
}

class speechButton {
  
  //constructor
  //x,y position of the word
  //w, h width and height of the word
  constructor(x,y,w,h,word){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.word=speechWords[word];
    this.hasBeenClicked = false;
   
  }
 
  //show() is method for showing on canvas
  show(){

    if (this.hasBeenClicked) {
      fill(0);
      textSize(30);
      textStyle(BOLD);
      textFont('Courier');
      text(this.word, this.x, this.y, this.w, this.h);
    } else {
      textSize(30);
      fill(128 + sin(frameCount*0.05) * 128);
      textStyle(ITALIC);
      textFont('Courier');
      text(this.word, this.x, this.y, this.w, this.h);
    }

   
  }

  //touched(cx, cy)
  touched(touchedX, touchedY){
    //check if position of click is inside the bounding box
     if ((touchedX> this.x) && 
      (touchedX < this.x + this.w) && 
      (touchedY > this.y) 
      && (touchedY < this.y + this.h))
      {
        //retrieve current row
        var currentRow = this.row;
        //retrieve current word
        var currentWord = this.word;

        //part of code that helps to only have one word be clicked at a time

        //go through every element and retrieve the one that
        //is on the same row and does not contain the same word
        //so that we are actually retrieving the other element on the row
        for (var i = 0; i < speechButtons.length; i++) {
          if (speechButtons[i].word != currentWord) {
            //only click the current element
            //if the other element on the row has not been clicked yet
            if (speechButtons[i].hasBeenClicked == false) {
              this.hasBeenClicked = !this.hasBeenClicked;
            }
          }
        }

      
      console.log('clicked ' + this.word)
      } 
  }
}

  





//function to randomize the elements within the conjoined arrays
function randomizeFiles() {


// go through the wordButtons that have been clicked and extract two wav files from each 
// one of them and push them into the poem array so that eventually you can play 
//poem array with the for loop from sketch.js file 

for (var i = 0; i < wordButtons.length; i++){
  if (wordButtons[i].hasBeenClicked== true){ 
    console.log("HEYHEYHEYHEYHEYHEYHEYHEY" + wordButtons[i].word);
    
    poem.push(sounds[i][Math.floor(random(0,4))]);
    poem.push(sounds[i][Math.floor(random(8,12))]);
    poem.push(sounds[i][Math.floor(random(12,18))]);
    poem.push(sounds[i][Math.floor(random(22,24))]);
    poem.push(sounds[i][Math.floor(random(24,28))]);
    poem.push(sounds[i][Math.floor(random(18,22))]);
    poem.push(sounds[i][Math.floor(random(4,8))]);
    console.log(poem);
    //}
  }
  }
  shuffle(poem, true);
  console.log("here i randomized files");
}

function preload() {
    soundFormats('wav');
    //let numOfSounds = poem.length;
    // for (let s=0; s < 20; s++) {

    // sounds[0][s] = loadSound('assets/TRANCE/Bit'+ s + '.wav');
    // console.log(" TRANCE sounds loaded.");

    // sounds[1][s] = loadSound('assets/CALM/Bit'+ s + '.wav');
    // console.log("CALM sounds loaded.");

    // }

    for(let i = 0; i< soundPaths.length; i++){  //loops twice
      sounds[i] = [];
      for(let j = 0; j< soundPaths[i].length; j++){  //lopps howwver many path for each style we have
        sounds[i][j] = loadSound(soundPaths[i][j]);
      }
    }
    console.log(sounds);


}








//options on how to proceed; create a visual for the scene 2 (actually scene 3) with HYPNO-COMFORT

//setVolume() method for setting volume of tracks





