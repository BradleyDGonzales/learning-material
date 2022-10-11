/* eslint-disable max-len */
const selectPlusButton = document.querySelectorAll('.plus-button');
const selectSidebarContent = document.querySelectorAll('.sidebar');
console.log(selectPlusButton);

selectPlusButton.forEach((button) => button.addEventListener('click', function() {
  for (const btn of selectSidebarContent) {
    if (btn.className === 'sidebar') {
      btn.classList.add('active');
    } else if (btn.className === 'sidebar active') {
      btn.classList.remove('active');
    }
  }
}));
