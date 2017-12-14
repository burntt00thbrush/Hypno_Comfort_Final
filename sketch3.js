// hypno-comfort
// by isa vento
// november 2017
// runs on p5.js

//global variable for interactive words
//they are the texts for the buttons on screen
let interactiveWords= ["wandering?","rushing?", "wisdom", "recovery","chaos","structure"];

//THE WAV FILES HERE HYPOTHETICAL FOR NOW, CREATE THE ASSETTS AND PUT THEM IN  

//global variable with trackpaths of wav files for each word
let WANDERING = ["assets/WANDERING/Bit0.wav","assets/WANDERING/Bit1.wav" ,"assets/WANDERING/Bit2.wav" ,
"assets/WANDERING/Bit3.wav" ,"assets/WANDERING/Bit4.wav" ,"assets/WANDERING/Bit5.wav" ,
"assets/WANDERING/Bit6.wav" ,"assets/WANDERING/Bit7.wav" ,"assets/WANDERING/Bit8.wav" ,
"assets/WANDERING/Bit9.wav", "assets/WANDERING/Bit9.wav"];

let RUSHING= ["assets/RUSHING/Bit0.wav","assets/RUSHING/Bit1.wav" ,"assets/RUSHING/Bit2.wav" ,
"assets/RUSHING/Bit3.wav" ,"assets/RUSHING/Bit4.wav" ,"assets/RUSHING/Bit5.wav" ,
"assets/RUSHING/Bit6.wav" ,"assets/RUSHING/Bit7.wav" ,"assets/RUSHING/Bit8.wav" ,
"assets/RUSHING/Bit9.wav" ];

let WISDOM = ["assets/WISDOM/Bit0.wav","assets/WISDOM/Bit1.wav" ,"assets/WISDOM/Bit2.wav" ,
"assets/WISDOM/Bit3.wav" ,"assets/WISDOM/Bit4.wav" ,"assets/WISDOM/Bit5.wav" ,
"assets/WISDOM/Bit6.wav" ,"assets/WISDOM/Bit7.wav" ,"assets/WISDOM/Bit8.wav" ,
"assets/WISDOM/Bit9.wav", "assets/WISDOM/Bit9.wav"];

let RECOVERY = ["assets/RECOVERY/Bit0.wav","assets/RECOVERY/Bit1.wav" ,"assets/RECOVERY/Bit2.wav" ,
"assets/RECOVERY/Bit3.wav" ,"assets/RECOVERY/Bit4.wav" ,"assets/RECOVERY/Bit5.wav" ,
"assets/RECOVERY/Bit6.wav" ,"assets/RECOVERY/Bit7.wav" ,"assets/RECOVERY/Bit8.wav" ,
"assets/RECOVERY/Bit9.wav" ];

let CHAOS = ["assets/CHAOS/Bit0.wav","assets/CHAOS/Bit1.wav" ,"assets/CHAOS/Bit2.wav" ,
"assets/CHAOS/Bit3.wav" ,"assets/CHAOS/Bit4.wav" ,"assets/CHAOS/Bit5.wav" ,
"assets/CHAOS/Bit6.wav" ,"assets/CHAOS/Bit7.wav" ,"assets/CHAOS/Bit8.wav" ,
"assets/CHAOS/Bit9.wav" ];

let STRUCTURE = ["assets/RUSHING/Bit0.wav","assets/RUSHING/Bit1.wav" ,"assets/RUSHING/Bit2.wav" ,
"assets/RUSHING/Bit3.wav" ,"assets/RUSHING/Bit4.wav" ,"assets/RUSHING/Bit5.wav" ,
"assets/RUSHING/Bit6.wav" ,"assets/RUSHING/Bit7.wav" ,"assets/RUSHING/Bit8.wav" ,
"assets/RUSHING/Bit9.wav" ] ;





//variable for the sound
let sounds=[ WANDERING, RUSHING, WANDERING, RECOVERY, CHAOS, RUSHING ];
let poem=[];





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

//Scene 3 Sound variables

  var soundplaying;
  var start=false; 

//button for Scene 3

var buttonB = {
  x: 402,
  y: 455,
  d: 100
}

var bBstate = false;






// setup() runs once at the beginning
function setup() {
  
  //create canvas
  canvas= createCanvas(windowWidth,windowHeight);


  //white background
  background(255);
  
  //create the buttons
  //TODO: fine-tune the width and heights so that
  //you are sure that when u click on them they trigger functions
  //        word = new WordButton(  x,   y,  w, h, word, row)
  wordButtons[0] = new WordButton(100, 200, 150, 50, 0, 0);
  wordButtons[1] = new WordButton(400, 200, 100, 50, 1, 0);
  wordButtons[2] = new WordButton(100, 400, 100, 50, 2, 1);
  wordButtons[3] = new WordButton(400, 400,  50, 30, 3, 1);
  wordButtons[4] = new WordButton(100, 600,  50, 30, 4, 2);
  wordButtons[5] = new WordButton(400, 600, 200, 30, 5, 2);

  //defining the rows

  //defining the wav files



  //create the button for submit
  submitButton = createButton('what next?');
  //set its position
  submitButton.position(300, 700);
  //callback for when its pressed
  submitButton.mousePressed(submitted);






  //SCENE 3 BUTTONS & SOUND VARIABLES

  soundplaying= 0;


}

// draw() runs on loop, after setup()
function draw() {

  if (currentScene == 0) {
      
      background(255)

      //non-interactive raw questions
 
      textStyle(BOLD);
      fill(0);
      textSize(20);
      text('greetings',100,70);
      text('Do you happen to be',100,170);
      text('Would you care to share words of', 100,370);
      text('with a fellow inhabitant of a far-away urban', 100,570);

      //show the buttons on the canvas
      for (var i = 0; i < wordButtons.length; i++) {
        wordButtons[i].show();
      }
    }
  

  if (currentScene == 1) 
  {
    background(255/3);
    fill('magenta')
    textSize(20);
    textStyle(ITALIC);
    textFont('Courier');
    text('You have picked your responses. Hence, you have collaborated with a computer to generate an audio-piece that will be played by a random stranger somewhere in LONDON', 100, 200, 500, 500 );


  // var typed2 = new Typed('#typed2', {
  //   strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
  //   typeSpeed: 0,
  //   backSpeed: 0,
  //   fadeOut: true,
  //   loop: true
  // });
    
  }

  if (currentScene == 2) 
  {

    //once one user has submitted & the user has clicked the button to 
    //play (start)
    submitButton.hide();
    background(255, 255, 0);
    textStyle(ITALIC);
    textFont('Courier');
    text('You have stopped in your tracks, opened this portal & will have the possibility to listen to words of HYPNO-COMFORT. You have received an audio poem randomly generated by an algorithm in a computer and a random stranger in NewYork.',100,100, 500,500);


    ellipse(buttonB.x,buttonB.y, buttonB.d, buttonB.d);

      
        
    if (start){
      if (poem[soundplaying].isPlaying() == false) {
        if(soundplaying<10){
          soundplaying++;
          poem[soundplaying].play()
        }
        else {
          soundplaying = 0;
        }
         

      } 
      
    } else {
      if(poem[soundplaying].isPlaying() == true) {
        poem[soundplaying].stop()
        soundplaying = 0;
      }


    }
      
  } 
}
  
       
    


   
    //put play element dom button here 

    //call randomize function here 
  



  

  //add dom element for submit button




//p5.js function triggered when the mouse is pressed
function mousePressed() {

//mousePressed called if the interactive word buttons are pressed
  if (currentScene==0){
  for (var i = 0; i < wordButtons.length; i++) {
    wordButtons[i].touched(mouseX, mouseY);
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
  constructor(x,y,w,h,word, row){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.word=interactiveWords[word]
    this.hasBeenClicked = false;
    this.row = row;
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
          if (wordButtons[i].row == currentRow && wordButtons[i].word != currentWord) {
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

  

//function to call the variable hasSubmitted into the draw loop that changes the scene
function submitted(){

if (currentScene==0 && (wordButtons[0].hasBeenClicked== true ||  wordButtons[1].hasBeenClicked== true) && (wordButtons[2].hasBeenClicked== true ||  wordButtons[3].hasBeenClicked== true) && (wordButtons[4].hasBeenClicked== true ||  wordButtons[5].hasBeenClicked== true)) {

    hasSubmitted = true;
    currentScene = 1;
    randomizeFiles();
console.log('submitbuttonClicked')
  }else if( currentScene==1 ){
    currentScene=2;
    console.log('hello');
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
    poem.push(sounds[i][Math.floor(random(4,9))]);
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
    for (let s=0; s < 10; s++) {

    sounds[0][s] = loadSound('assets/WANDERING/Bit'+ s + '.wav');
    console.log(" WANDERING sounds loaded.");

    sounds[1][s] = loadSound('assets/RUSHING/Bit'+ s + '.wav');
    console.log("RUSHING sounds loaded.");

    sounds[2][s] = loadSound('assets/WISDOM/Bit'+ s + '.wav');
    console.log("WISDOM sounds loaded.");

    sounds[3][s] = loadSound('assets/RECOVERY/Bit'+ s + '.wav');
    console.log("RECOVERY sounds loaded.");

    sounds[4][s] = loadSound('assets/CHAOS/Bit'+ s + '.wav');
    console.log("CHAOS sounds loaded.");

    sounds[5][s] = loadSound('assets/STRUCTURE/Bit'+ s + '.wav');
    console.log("STRUCTURE sounds loaded.");


    }

}





