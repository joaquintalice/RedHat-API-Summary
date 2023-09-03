const elementosDiv = document.querySelectorAll('div').forEach(elem => {
    elem.classList.add('hiddenElem')
});
const elementosH3 = document.querySelectorAll('h3').forEach(elem => {
    elem.classList.add('hiddenElem')
});
const elementosH4 = document.querySelectorAll('h4').forEach(elem => {
    elem.classList.add('hiddenElem')
});
const elementosP = document.querySelectorAll('p').forEach(elem => {
    elem.classList.add('hiddenElem')
});

const header = document.getElementById('header').classList.remove('hiddenElem');
const nav = document.getElementById('nav-bar').classList.remove('hiddenElem');




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showElem');
        } else {
            entry.target.classList.remove('showElem');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hiddenElem');
hiddenElements.forEach((el) => observer.observe(el));
