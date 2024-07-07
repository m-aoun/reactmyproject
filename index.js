// Library used for animation
AOS.init({
    duration: 2000,
});
// Nav on scroll color change
function changeBy() {
    var navbar = document.getElementById('changeonscroll');
    var scrollPosition = window.scrollY;
    if (scrollPosition < 200) {
        navbar.classList.remove('nav_bar_when_scroll');
    } else {
        navbar.classList.add('nav_bar_when_scroll');
    }
}
window.addEventListener('scroll', changeBy);
