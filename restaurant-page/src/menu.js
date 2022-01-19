function menu() {
    const menu = document.createElement("div");

    // CALL MakeMenu HERE
    // ADD CLASS HERE FOR STYLING
    return menu;
}


function item(name, description) {
    const item = document.createElement("div");
    const name = document.createElement("h4");
    const desc = document.createElement("p");
    
    // ADD CLASS FOR ALL THREE ABOVE ELEMENTS CSS STYLING
    item.appendChild(name);
    item.appendChild(desc);
    return item;
}

function makeMenu() {
    // all stuff here
}

export default menu;