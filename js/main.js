const menuBtn = document.querySelector('.menu--btn');
const hamburger = document.querySelector('.menu--btn--burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav--menu');
const navItems = document.querySelectorAll('.nav--menu--item');
const body = document.querySelector('.body');
// const logo = document.querySelector(".logo-title");
const header = document.querySelector('header');


 menuBtn.addEventListener('click', toggleMenu);
//  body.addEventListener('click', toggleMenu);
//  nav.addEventListener('click', toggleMenu);

 function toggleMenu(){
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    navMenu.classList.toggle('open');
    navMenu.classList.contains('open')? header.classList.add("index"): header.classList.remove('index');
    // header.classList.contains('sticky')? logo.classList.add("background") : logo.classList.remove('background');
    navItems.forEach(item => item.classList.toggle('open'));

}

      window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        // var ul = document.querySelector("ul");
        // ul.classList.toggle("background", window.scrollY > 0)
        header.classList.toggle("sticky", window.scrollY > 0);
      });


//  let showMenu = false;
// function toggleMenu1() {
//     if(!showMenu){
//         hamburger.classList.add('open');
//         nav.classList.add('open');
//         navMenu.classList.add('open');
//         navItems.forEach(item => item.classList.add('open'));
//         showMenu = true;
//     } 
//     else{
//         hamburger.classList.remove('open');
//         nav.classList.remove('open');
//         navMenu.classList.remove('open');
//         navItems.forEach(item => item.classList.remove('open'));
//         showMenu = false;
//     }
//     console.log("Clicked")
// }
