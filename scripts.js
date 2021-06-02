window.addEventListener('scroll', function () {
    const navElement = document.querySelector('#nav-bar')
    if(this.scrollY > 20) {
        navElement.classList.add('sticky');
    }else {
        navElement.classList.remove('sticky')
    }
})


const burgerIcon = document.querySelector('.fa-bars');
//function to show nav bar when click burger icon
burgerIcon.addEventListener('click', function () {
    const navMenu = document.querySelector('#nav-menu');
    const navIcon = document.querySelector('#menu-icon');
    navMenu.classList.toggle('nav-show');
    navIcon.classList.toggle('fa-times');
})

// const skilIcons = {
//     HTML5: 
// }
