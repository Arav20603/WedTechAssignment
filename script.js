// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        document.getElementById("form-response").textContent = "Thank you for reaching out! I will get back to you soon.";
    } else {
        document.getElementById("form-response").textContent = "Please fill out all fields.";
    }
});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});
