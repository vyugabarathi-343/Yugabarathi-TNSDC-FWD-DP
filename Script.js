// Scroll to contact section when "Hire Me" button is clicked
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Form submit message (basic simulation)
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
});
