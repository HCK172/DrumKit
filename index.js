// event listener

// anonoymous function, named function -- pass in function as a input; Higher order function

// Step 1: Add evetnt listener to all button
// Step 2: Play audio - know which button triggered the event

const drumButton = document.querySelectorAll(".drum");
const numOfDrumButton = document.querySelectorAll(".drum").length;
const audioTom1 = new Audio("sounds/tom-1.mp3");
const audioTom2 = new Audio("sounds/tom-2.mp3");
const audioTom3 = new Audio("sounds/tom-3.mp3");
const audioTom4 = new Audio("sounds/tom-4.mp3");
const audioCrash = new Audio("sounds/crash.mp3");
const audioKick = new Audio("sounds/kick-bass.mp3");
const audioSnare = new Audio("sounds/Snare.mp3");

// 1. Detecting button press with a click on screen

for (let i = 0; i < numOfDrumButton; i++) {
  drumButton[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
// 2. Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// make sound function
function makeSound(key) {
  switch (key) {
    case "w":
      audioTom1.play();
      break;
    case "a":
      audioTom2.play();
      break;

    case "s":
      audioTom3.play();
      break;
    case "d":
      audioTom4.play();
      break;
    case "j":
      audioCrash.play();
      break;
    case "k":
      audioKick.play();
      break;
    case "l":
      audioSnare.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentkey) {
  const activeButton = document.querySelector(`.${currentkey}`);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
