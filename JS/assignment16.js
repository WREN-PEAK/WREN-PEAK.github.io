let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");
let slide5 = document.getElementById("slide5");
let slide6 = document.getElementById("slide6");
debugger;

let slides = [slide1, slide2, slide3, slide4, slide5, slide6];

let currentSlideIndex = 0;

function showCurrentSlide() {

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    let loopSlide = slides[i];
    if (i != currentSlideIndex) {
      loopSlide.style.display = "none";
    } else {
      loopSlide.style.display = "inline-block";
    }
  }
}

showCurrentSlide();

function showNextSlide() {
  currentSlideIndex++;
  showCurrentSlide();
}

function showPreviousSlide() {
  currentSlideIndex--;
  showCurrentSlide();
}
