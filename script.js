// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Form submission message
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual submission
    document.getElementById("form-response").style.display = "block";
    this.reset(); // Clears the form after submission
});

// Testimony Submission Handling
document.getElementById("faith-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual submission

    // Show success message
    document.getElementById("faith-response").style.display = "block";

    // Clear the form
    this.reset();
});
