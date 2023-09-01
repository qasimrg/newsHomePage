
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const closeButton = document.getElementById("close-button")

navToggle.addEventListener("click", function () {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
    navToggle.innerHTML = `<span id="nav-toggle" class="dropdown-icon">
                           </span>` 
});
closeButton.addEventListener("click", function () {
    if (navMenu.style.display === "none") {
        navMenu.style.display = "block";
    } else {
        navMenu.style.display = "none";
    }
    navToggle.innerHTML = `<span id="nav-toggle" class="dropdown-icon">
                            <img class="harmburger-menu" src="icon-menu.svg" alt="">
                          </span>   `
});





