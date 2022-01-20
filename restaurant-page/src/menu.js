function menu() {
    const menu = document.createElement("div");
    menu.appendChild(makeMenu());
    menu.setAttribute("id", "page");
    // ADD CLASS HERE FOR STYLING
    return menu;
}

function makeItem(itemName) {
    const item = document.createElement("div");
    const name = document.createElement("h4");
    const desc = document.createElement("p");
    
    // ADD CLASS FOR ALL THREE ABOVE ELEMENTS CSS STYLING
    name.textContent = itemName;
    item.appendChild(name);
    return item;
}

function makeMenu() {
    const items = document.createElement("div");
    // ADD CLASS FOR STYLING
    // REMOVE SOME??
    items.append(makeItem("Black beans"));
    items.append(makeItem("Cannellini Beans"));
    items.append(makeItem("Chickpeas"));
    items.append(makeItem("Kidney beans"));
    items.append(makeItem("Lima beans"));
    items.append(makeItem("Great Nothern beans"));
    items.append(makeItem("Pinto beans"));
    items.append(makeItem("Soy beans"));
    return items;
}

export default menu;