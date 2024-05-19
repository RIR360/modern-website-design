function disableHeader() {
    const header = document.getElementById("header")
    header.classList.add("d-none");
}
function activeNav(link) {
    if (link !== "") {
        
        document.querySelector(`#nav-${link}`).classList.add("active");

    }
}
function toggle(selector) {
    document.querySelector(selector).classList.toggle("d-none");
}