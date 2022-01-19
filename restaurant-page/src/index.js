import home from './home';

function test() {

    const div = document.getElementById("content");
    div.appendChild(home());
}

test();