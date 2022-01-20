function contact() {
    const contact = document.createElement("div");
    contact.setAttribute("id", "page");
    const phoneAndMsg = document.createElement("div");
    phoneAndMsg.textContent = "00 966 123 456 7890";
    contact.appendChild(phoneAndMsg);
    return contact;
}

export default contact;