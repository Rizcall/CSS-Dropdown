const dropdowntoggle = document.querySelector(".dropdown-toggle");
dropdowntoggle.addEventListener("click", () => {
    const dropdownmenu = document.querySelector("#dropdown > .menu");
    dropdownmenu.classList.toggle("open");
    dropdowntoggle.classList.toggle("open");
})