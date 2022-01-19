function navbar() {
    const navbar = document.createElement("div");
    navbar.appendChild(createLink("home"));
    navbar.appendChild(createLink("menu"));
    navbar.appendChild(createLink("contact"));
    // ADD CLASS HERE FOR STYLING IN CSS
    return navbar;
}

function createLink(string) {
    const button = document.createElement("button");
    button.textContent = string;
    // ADD CLASS HERE FOR STYLING IN CSS
    return button;
}

export default navbar;