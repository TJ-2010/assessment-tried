'use strict';

/*___event listener on multiple elements___*/

const addEventOneElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i<len ; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

// Moile Nav

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOneElements(navbarTogglers, "click", togglerNav);

const closeNav = function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOneElements(navbarLinks, "click", closeNav);

//header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    header.classList[this.window.scrollY > 50 ? "add" : "remove"]("active");
})

const backToBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scrollY", function(){
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    backToBtn.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});