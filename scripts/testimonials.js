// const slidesTwo = document.querySelectorAll('.slideTwo');
// const nextTwo = document.querySelector('#nextTwo');
// const prevTwo = document.querySelector('#prevTwo');
// const autoTwo = false; // autoTwo scroll
// const intervalTimeTwo = 8000;
// let slideIntervalTwo;

// const nextSlideTwo = () => {
//   // Get currentTwo class
//   const currentTwo = document.querySelector('.currentTwo');
//   // Remove currentTwo class
//   currentTwo.classList.remove('currentTwo');
//   // Check for next slide
//   if (currentTwo.nextElementSibling) {
//     // Add currentTwo to next sibling
//     currentTwo.nextElementSibling.classList.add('currentTwo');
//   } else {
//     // Add currentTwo to start
//     slidesTwo[0].classList.add('currentTwo');
//   }
//   setTimeout(() => currentTwo.classList.remove('currentTwo'));
// };

// const prevSlideTwo = () => {
//   // Get currentTwo class
//   const currentTwo = document.querySelector('.currentTwo');
//   // Remove currentTwo class
//   currentTwo.classList.remove('currentTwo');
//   // Check for prev slide
//   if (currentTwo.previousElementSibling) {
//     // Add currentTwo to prev sibling
//     currentTwo.previousElementSibling.classList.add('currentTwo');
//   } else {
//     // Add currentTwo to last
//     slidesTwo[slidesTwo.length - 1].classList.add('currentTwo');
//   }
//   setTimeout(() => currentTwo.classList.remove('currentTwo'));
// };

// // Button events
// nextTwo.addEventListener('click', () => {
//   nextSlideTwo();
//   if (autoTwo) {
//     clearInterval(slideIntervalTwo);
//     slideIntervalTwo = setInterval(nextSlideTwo, intervalTimeTwo);
//   }
// });

// prevTwo.addEventListener('click', () => {
//   prevSlideTwo();
//   if (autoTwo) {
//     clearInterval(slideIntervalTwo);
//     slideIntervalTwo = setInterval(nextSlideTwo, intervalTimeTwo);
//   }
// });

// // autoTwo slide
// if (autoTwo) {
//   // Run next slide at interval time
//   slideIntervalTwo = setInterval(nextSlideTwo, intervalTimeTwo);
// }




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}