const navItems = document.querySelector('.nav-items');
const btnMobileNav = document.querySelector('.btn-mobile-nav');

if (btnMobileNav) {
  btnMobileNav.addEventListener('click', () => {
    navItems.classList.toggle('nav-open');
    const icon = btnMobileNav.querySelector('ion-icon');
    if (navItems.classList.contains('nav-open')) {
      icon.setAttribute('name', 'close-outline');
    } else {
      icon.setAttribute('name', 'menu-outline');
    }
  });
}
