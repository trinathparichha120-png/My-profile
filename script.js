
// ===================================
// TRINATH PARICHHA - PORTFOLIO SCRIPT
// ===================================


// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu when clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// Scroll Reveal Animation

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    revealObserver.observe(element);

});


// Back to Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Automatic Current Year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Console Welcome Message

console.log(
    "Welcome to Trinath Parichha's Portfolio!"
);
