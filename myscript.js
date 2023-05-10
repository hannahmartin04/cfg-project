// IMAGE SLIDESHOW

let slideIndex = 0;
var nav = document.getElementsByClassName("nav");
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// POP-UP MESSAGE FOR SUBMITTING FORM

function showAlert() {
  var submit = true;

  if (submit) {
    window.alert(
      "Thank you for contacting us! We will be in touch within the next 48 hours."
    );
  }
}

// POP-UP MESSAGE FOR SUBMITTING QUESTIONNAIRE

function showAlertForWin() {
  var submit = true;

  if (submit) {
    window.alert("Thank you for submitting your answers. Good luck!");
  }
}

// TESTIMONIAL SLIDESHOW

let slideIndexTestimonial = 1;
showSlidesTestimonial(slideIndexTestimonial);

function plusSlides(n) {
  showSlidesTestimonial((slideIndexTestimonial += n));
}

function currentSlide(n) {
  showSlidesTestimonial((slideIndexTestimonial = n));
}

function showSlidesTestimonial(n) {
  let j;
  let slidesTestimonial = document.getElementsByClassName("mySlides");
  if (n > slidesTestimonial.length) {
    slideIndexTestimonial = 1;
  }
  if (n < 1) {
    slideIndexTestimonial = slidesTestimonial.length;
  }
  for (j = 0; j < slidesTestimonial.length; j++) {
    slidesTestimonial[j].style.display = "none";
  }
  slidesTestimonial[slideIndexTestimonial - 1].style.display = "block";
}
