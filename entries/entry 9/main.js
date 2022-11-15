const audio = new Audio("audio.mp3");
let color = ["#a038f0"]
var video = document.querySelector(".video")
var eye = document.querySelector("#eye");
var nose = document.querySelector("#nose")
var ear = document.querySelector("#ear")
var hand = document.querySelector ("#hand")
var lips = document.querySelector ("#lips")

function music() {
  audio.play();
  document.body.style.backgroundSize = "initial";
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "none";
  video.style.opacity = "0";

}

function feel(){
  audio.pause();
  document.body.style.backgroundSize = "initial";
  document.body.style.backgroundImage = "url(feel.jpeg)";
  video.style.opacity = "0";
  document.body.style.backgroundRepeat = "repeat";
}

function taste(){
  audio.pause();
  document.body.style.backgroundSize = "initial";
  document.body.style.backgroundImage = "url(food.png)";
  document.body.style.backgroundSize = "contain";
  video.style.opacity = "0";
}

function sight(){
  audio.pause();
  document.body.style.backgroundSize = "initial";
  document.body.style.backgroundImage = "url(eye.gif)";
  document.body.style.backgroundSize = "contain";
  video.style.opacity = "0";
}

function smell(){
  audio.pause();
  video.style.opacity = "1";
  document.body.style.backgroundSize = "initial";
  document.body.style.backgroundImage = "none";
}

eye.addEventListener("click", music);
nose.addEventListener("click", feel);
ear.addEventListener("click", taste);
hand.addEventListener("click", sight)
lips.addEventListener("click", smell);
