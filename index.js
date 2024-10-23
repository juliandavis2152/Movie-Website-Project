function openMenu() {
  document.getElementsByClassName('showMenu')[0].classList.add('active');
  document.getElementsByClassName('close-btn')[0].classList.add('show');
  document.getElementsByClassName('bento-menu')[0].classList.remove('show-anim-in');
  document.getElementsByClassName('bento-menu')[0].classList.add('hide-anim-out');
}

function closeMenu() {
  setTimeout(() => {
    document.getElementsByClassName('showMenu')[0].classList.remove('active');
    document.getElementsByClassName('bento-menu')[0].classList.remove('hide-anim-out');
    document.getElementsByClassName('bento-menu')[0].classList.add('show-anim-in');
  }, 1000);
  document.getElementsByClassName('close-btn')[0].classList.remove('show');
}

