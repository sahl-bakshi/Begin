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
    return header;
}

export default home;