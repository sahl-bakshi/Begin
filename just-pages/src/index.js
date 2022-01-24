import home from './home';
import menu from './menu';
import contact from './link';
import navbar from './navbar';

function init() {
    const main = document.getElementById("content");
    const hmpg = home();
    const navb = navbar();
    main.appendChild(navb);
    main.appendChild(hmpg);
    addEvents();
}

function addEvents() {
    const btns = document.querySelectorAll("button");
    const main = document.getElementById("content");
    console.log(page);
    btns.forEach(elem => {
        elem.addEventListener("click", () => {
            document.getElementById("page").remove();
            if (elem.dataset.what == 1) main.appendChild(home());
            if (elem.dataset.what == 2) main.appendChild(menu());
            if (elem.dataset.what == 3) main.appendChild(contact());
        })
    });
}

init();