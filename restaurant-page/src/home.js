function home() {
    const home = document.createElement("div");
    home.appendChild(header("Restaurant"));
    home.appendChild(subtext("Trusted by the Best"));
    // ADD CLASS HERE FOR CSS STYLING
    return home;
}

function header(string) {
    const header = document.createElement("h1");
    header.textContent = string;
    // ADD CLASS HERE FOR CSS STYLING
    return header;
}

function subtext(string) {
    const subtext = docment.createElement("div");
    subtext.textContent = string;
    // ADD CLASS HERE FOR CSS STYLING
    return subtext;
}

export default home;