let menu = document.querySelector('#menu-bar'); //menu will select first element with id menu-bar
let nav = document.querySelector('.nav');



// classList property returns css classnames of element and is read-only
menu.onclick = () => { // calling onclick function for menu 
    menu.classList.toggle('fa-times'); // menu will toggle betn two classes for an element
    nav.classList.toggle('active');
}

let section = document.querySelectorAll('section');// will select all  element with section tag 
let navLinks = document.querySelectorAll('header .nav a');

window.onscroll = () => { // onsroll events occurs when an element scrollbar  is being called

    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    section.forEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

}