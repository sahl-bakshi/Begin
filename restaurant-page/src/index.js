import home from './home';
import menu from './menu';
import contact from './contact';
import navbar from './navbar';


function test() {

    const div = document.getElementById("content");
    div.appendChild(home());
}

test();