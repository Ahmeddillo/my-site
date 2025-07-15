  (function(){
    emailjs.init(i3hR-yvGVlEUoApUA); // EmailJS dashboard'dan alınır
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(i3hR-yvGVlEUoApUA, template_sibysnn, this)
      .then(function(response) {
        alert("Message sent successfully!");
      }, function(error) {
        alert("Failed to send message: " + error.text);
      });
  });