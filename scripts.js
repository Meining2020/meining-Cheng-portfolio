//nav bar scroll to show
window.addEventListener('scroll', function () {
    const navElement = document.querySelector('#nav-bar')
    if (this.scrollY > 20) {
        navElement.classList.add('sticky');
    } else {
        navElement.classList.remove('sticky')
    }
})

//burger icon show and disappear
const burgerIcon = document.querySelector('.fa-bars');
//function to show nav bar when click burger icon
burgerIcon.addEventListener('click', function () {
    const navMenu = document.querySelector('#nav-menu');
    const navIcon = document.querySelector('#menu-icon');
    navMenu.classList.toggle('nav-show');
    navIcon.classList.toggle('fa-times');
})

//scroll down arrow
const arrowIcon = document.querySelector('#scroll-down-icon');
arrowIcon.addEventListener('click', function () {
    arrowIcon.scrollIntoView();
})

const spanElement = document.getElementById('span-animation');
const text = "web developer";
const splittedText = text.split("");
let currentText = '';
let direction = 0;

const textAnimation = () => {
    let i = 0;
    setInterval(() => {
        if (i == splittedText.length -1) {
            direction = 1;
        }
        if (i < 0) {
            direction = 0;
        }
        currentText="";
        for (let c = 0; c <= i; c++) {
            currentText += splittedText[c];
        }
        spanElement.textContent = currentText;

        if (direction === 0) {
            i++;
        } else {
            i--;
        }
    }, 100);
}

setTimeout(textAnimation, 300);
