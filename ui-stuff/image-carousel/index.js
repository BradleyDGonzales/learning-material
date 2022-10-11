/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const selectSliderImages = document.querySelectorAll('.slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circleButtons = document.querySelectorAll('.circles');
console.log(circleButtons);
let clicked = false;
window.onload = myFunction();
let i = 0;
let count = 0;
let nextExecuted = false;
let prevExecuted = false;
let circlesExecuted = false;
const prevExecution = (function() {
  if (nextExecuted || circlesExecuted) {
    return;
  }
  if (!prevExecuted) {
    prevExecuted = true;
    count = i;
  }
});
const nextExecution = (function() {
  if (prevExecuted || circlesExecuted) {
    return;
  }
  if (!nextExecuted) {
    nextExecuted = true;
    count = i;
  }
});
function reset() {
  i = 0;
  myFunction();
}
function myFunction() {
  setTimeout(function() {
    if (!clicked) {
      if (selectSliderImages[i].className === 'slider active') {
        circleButtons[i].classList.remove('active');
        selectSliderImages[i].classList.remove('active');
        selectSliderImages[i + 1].classList.add('active');
        circleButtons[i + 1].classList.add('active');
        i++;
      }
      if (i === selectSliderImages.length - 1) {
        setTimeout(() => {
          circleButtons[i].classList.remove('active');
          selectSliderImages[i].classList.remove('active');
          selectSliderImages[i - (selectSliderImages.length - 1)].classList.add('active');
          circleButtons[i - (circleButtons.length - 1)].classList.add('active');
          reset();
          return;
        }, 3000);
      }
      if (i < selectSliderImages.length - 1) {
        myFunction();
      }
    }
  }, 3000);
}
next.addEventListener('click', function() {
  clearTimeout(myFunction);
  clicked = true;
  nextExecution();
  if (selectSliderImages[count].className === 'slider active') {
    if (count === selectSliderImages.length - 1) {
      circleButtons[count].classList.remove('active');
      selectSliderImages[count].classList.remove('active');
      selectSliderImages[count - (selectSliderImages.length - 1)].classList.add('active');
      circleButtons[count - (circleButtons.length - 1)].classList.add('active');
      count = 0;
      return;
    }
    circleButtons[count].classList.remove('active');
    selectSliderImages[count].classList.remove('active');
    selectSliderImages[count + 1].classList.add('active');
    circleButtons[count + 1].classList.add('active');
    count++;
  }
});
prev.addEventListener('click', function() {
  clearTimeout(myFunction);
  clicked = true;
  prevExecution();
  if (selectSliderImages[count].className === 'slider active') {
    if (count === 0) {
      circleButtons[count].classList.remove('active');
      selectSliderImages[count].classList.remove('active');
      selectSliderImages[count + (selectSliderImages.length - 1)].classList.add('active');
      circleButtons[count + (circleButtons.length - 1)].classList.add('active');
      count = selectSliderImages.length - 1;
      return; 0;
    }
    circleButtons[count].classList.remove('active');
    selectSliderImages[count].classList.remove('active');
    selectSliderImages[count - 1].classList.add('active');
    circleButtons[count - 1].classList.add('active');
    count--;
  }
});

circleButtons.forEach((btn) => btn.addEventListener('click', function() {
  clearTimeout(myFunction);
  clicked = true;
  circlesExecuted = true;
  for (let i = 0; i <= circleButtons.length - 1; i++) {
    if (circleButtons[i].className === 'circles active') {
      circleButtons[i].classList.remove('active');
      btn.classList.add('active');
    }
  }
  const idNumber = parseInt(btn.id.slice(-1));
  count = idNumber;
  for (let j = 0; j <= selectSliderImages.length - 1; j++) {
    if (selectSliderImages[j].className === 'slider active') {
      selectSliderImages[j].classList.remove('active');
      selectSliderImages[idNumber].classList.add('active');
    }
  }
}));
