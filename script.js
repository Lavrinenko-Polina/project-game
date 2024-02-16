document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    burgerMenu.addEventListener('click', function () {
        mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
    });
});
