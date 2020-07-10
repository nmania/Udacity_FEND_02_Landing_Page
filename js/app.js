/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/* global document */
/* global window */

const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const navItems = [];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Extract section ids as navigation items.
for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    navItems.push(section.getAttribute('id'));
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const nav = () => {
    for (let i = 1; i <= navItems.length; i++) {
        const newList = document.createElement('li');
        const newAnchor = document.createElement('a');
        newAnchor.setAttribute('class', 'menu__link');
        newAnchor.setAttribute('href', `#section${i}`);
        newAnchor.textContent = `Section ${i}`;
        newList.appendChild(newAnchor);
        navList.appendChild(newList);
    }
};

// Add class 'active' to section when near top of viewport

const isInViewport = element => {
    const position = element.getBoundingClientRect();
    return (
        position.top >= 0 &&
        position.left >= 0 &&
        position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        position.right <= (window.innerWidth || document.documentElement.clientWidth)) ? true : false;
};

const activeSection = () => {
    document.addEventListener('scroll', () => {
        for (const section of sections) {
            if (isInViewport(section)) {
                section.classList.add('your-active-class');
            } else {
                section.classList.remove('your-active-class');
            }
        }
    });
};


// Scroll to anchor ID using scrollTO event

const scroll = () => {
    document.addEventListener('click', e => {
        const target = e.target;
        if (!target.classList.contains('menu__link'))
            return;
        e.preventDefault();
        const targetId = target.hash;
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
nav();

// Scroll to section on link click
scroll();

// Set sections as active
activeSection();