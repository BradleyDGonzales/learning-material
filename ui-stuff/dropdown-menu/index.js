const selectDropDownButton = document.querySelectorAll('.content');

// eslint-disable-next-line max-len
selectDropDownButton.forEach((button) => button.addEventListener('click', function() {
  if (button.className === 'content') {
    button.classList.add('active');
  } else if (button.className === 'content active') {
    button.classList.remove('active');
  }
}));
