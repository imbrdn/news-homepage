const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu')
const mobileMenu =document.querySelector('.mobile-nav');

openMenu.addEventListener('click', function() {
    openMenu.classList.toggle('is-active');
    closeMenu.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

closeMenu.addEventListener('click', function() {
    openMenu.classList.toggle('is-active');
    closeMenu.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});
