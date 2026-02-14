// EmailJS initialization
(function() {
    // !!! ÖNEMLİ: Bu Public Key'i kendi EmailJS dashboard'undan kontrol et.
    // Eğer yeni bir hesap oluşturduysan bu anahtar değişecektir.
    emailjs.init("i3hR-yvGVlEUoApUA");
})();

// Contact form submission
// HTML'de forma id="contact-form" eklediğimizden emin ol.
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // service ID ve template ID'lerini kontrol et!
        // Eğer EmailJS'de yeni bir template oluşturduysan bunları güncelle.
        emailjs.sendForm("service_fwzzzje", "template_sibysnn", this)
            .then(function(response) {
                alert("✅ Message sent successfully!");
                contactForm.reset(); // Formu temizle
            }, function(error) {
                alert("❌ Failed to send message: " + error.text);
                console.error("EmailJS Error:", error);
            });
    });
} else {
    console.error("Contact form not found! Check the ID in HTML.");
}
