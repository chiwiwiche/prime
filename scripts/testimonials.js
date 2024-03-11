const slidesTwo = document.querySelectorAll('.slideTwo');
const nextTwo = document.querySelector('#nextTwo');
const prevTwo = document.querySelector('#prevTwo');
const autoTwo = false; // autoTwo scroll
const intervalTimeTwo = 8000;
let slideIntervalTwo;

const nextSlideTwo = () => {
  // Get currentTwo class
  const currentTwo = document.querySelector('.currentTwo');
  // Remove currentTwo class
  currentTwo.classList.remove('currentTwo');
  // Check for next slide
  if (currentTwo.nextElementSibling) {
    // Add currentTwo to next sibling
    currentTwo.nextElementSibling.classList.add('currentTwo');
  } else {
    // Add currentTwo to start
    slidesTwo[0].classList.add('currentTwo');
  }
  setTimeout(() => currentTwo.classList.remove('currentTwo'));
};

const prevSlideTwo = () => {
  // Get currentTwo class
  const currentTwo = document.querySelector('.currentTwo');
  // Remove currentTwo class
  currentTwo.classList.remove('currentTwo');
  // Check for prev slide
  if (currentTwo.previousElementSibling) {
    // Add currentTwo to prev sibling
    currentTwo.previousElementSibling.classList.add('currentTwo');
  } else {
    // Add currentTwo to last
    slidesTwo[slidesTwo.length - 1].classList.add('currentTwo');
  }
  setTimeout(() => currentTwo.classList.remove('currentTwo'));
};

// Button events
nextTwo.addEventListener('click', () => {
  nextSlideTwo();
  if (autoTwo) {
    clearInterval(slideIntervalTwo);
    slideIntervalTwo = setInterval(nextSlideTwo, intervalTimeTwo);
  }
});

prevTwo.addEventListener('click', () => {
  prevSlideTwo();
  if (autoTwo) {
    clearInterval(slideIntervalTwo);
    slideIntervalTwo = setInterval(nextSlideTwo, intervalTimeTwo);
  }
});

// autoTwo slide
if (autoTwo) {
  // Run next slide at interval time
  slideIntervalTwo = setInterval(nextSlideTwo, intervalTimeTwo);
}
