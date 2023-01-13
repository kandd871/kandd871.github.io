var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

var body = document.querySelector('body')
var cursor = document.querySelector('.cursor')
var a = document.querySelector('a')

function bg(){
  body.classList.toggle("body");
}

body.addEventListener("click", bg);