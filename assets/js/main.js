const body = document.querySelector(".main");
const hamburger = document.querySelector(".hamburger ");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("active");
    })
);
