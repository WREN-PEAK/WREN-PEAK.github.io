
let slides = document.getElementsByClassName("slideshowImage");

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

function showSlide(slideIndex) {
  currentSlideIndex = slideIndex;
  showCurrentSlide();
  $("#popupContainer").addClass("popupOpen");
}
$(".closePopup").click(
  function() {
    $("#popupContainer").removeClass("popupOpen");
  }
);
