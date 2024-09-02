
const menu = document.querySelector(".responsive-menu");
const menuContent = document.querySelector(".responsive-menu-content");

menu.addEventListener("click" , function(){
    menuContent.classList.toggle('display-none')     
    menuContent.classList.toggle('display-block')     
})

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

