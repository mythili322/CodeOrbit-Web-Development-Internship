// Display a message when the portfolio page loads
window.addEventListener("load", function () {
    console.log("Welcome to a journey where technology meets creativity.");
});

// Smoothly scroll to sections when navigation links are clicked
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetSection = document.querySelector(
            this.getAttribute("href")
        );

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});