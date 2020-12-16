// JavaScript source code
var myBox = document.getElementById("my_box");




var imgs = document.querySelectorAll(".slider .imgs .current");
console.log(imgs);

var next = document.querySelector(".slider .buttons .next");
console.log(next);

var prev = document.querySelector(".slider .buttons .prev");
console.log(prev);

var current_slide = 0;



next.addEventListener("click", function () {
    imgs[current_slide].style.opacity = 0;
    if (current_slide == imgs.length - 1) {
        current_slide = 0;
    }
    else {
        current_slide++;
    }
    imgs[current_slide].style.opacity = 1;
});

prev.addEventListener("click", function () {
    imgs[current_slide].style.opacity = 0;
    if (current_slide == 0) {
        current_slide = imgs.length - 1;
    }
    else {
        current_slide--;
    }
    imgs[current_slide].style.opacity = 1;
});
console.log(imgs);




let visible = false;
let button__questions = document.getElementsByClassName("button__questions");
let button__close = document.querySelector(".button__close");

for (let i = 0; i < button__questions.length; i++) {
    button__questions[i].addEventListener('click', function () {
        if (visible == false) {
            forma.style.visibility = "visible";
            forma.style.position = "static";
        }
            
        
        
        visible = !visible;
    })
}

button__close.addEventListener('click', function () {

    if (visible) {
        forma.style.visibility = "hidden";
        forma.style.position = "absolute";
    }
        
    
})



let clicked = false;

function oneClick(element) {
    
    element.style.backgroundColor = "#ffffff";
    element.style.width = "150px";
    clicked = true;
}
function twoClick(element) {

    element.style.backgroundColor = "#ffd700";
    element.style.width = "100px";
    clicked = false;
}


my_box.addEventListener("click", function () {
    if (clicked == true) {
        twoClick(my_box);
    }
    else {
        oneClick(my_box);
    }

});

    
   

    



