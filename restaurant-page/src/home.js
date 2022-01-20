function home() {
    const home = document.createElement("div");
    home.appendChild(header("The Bean Stop"));
    home.setAttribute("id", "page");
    // ADD CLASS HERE FOR CSS STYLING
    return home;
}

function header(string) {
    const header = document.createElement("h1");
    header.textContent = string;
    // ADD CLASS HERE FOR CSS STYLING
    return header;
}

export default home;