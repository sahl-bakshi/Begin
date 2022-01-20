import "../styles/home.css"

function home() {
    const home = document.createElement("div");
    home.appendChild(header("NFT"));
    home.setAttribute("id", "page");
    home.classList.add("title-pos");
    return home;
}

function header(string) {
    const header = document.createElement("h1");
    header.textContent = string;
    // ADD CLASS HERE FOR CSS STYLING
    return header;
}

export default home;