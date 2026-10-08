// Mobile Menu
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}


// Admission Form → WhatsApp
document.getElementById("admissionForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector('input[placeholder="Your Name"]').value;
    let mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
    let course = document.querySelector('select').value;
    let message = document.querySelector('textarea').value;

    let whatsappMessage =
        "Hello HCL Computer Coaching,%0A%0A" +
        "Name: " + name + "%0A" +
        "Mobile: " + mobile + "%0A" +
        "Course: " + course + "%0A" +
        "Message: " + message;

    let whatsappURL =
        "https://wa.me/919634540402?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
});