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
    items.append(makeItem(""));
    items.append(makeItem(""));
    items.append(makeItem(""));
    items.append(makeItem(""));
    items.append(makeItem(""));
    items.append(makeItem(""));
    items.append(makeItem(""));
    items.append(makeItem(""));
    return items;
}

export default menu;