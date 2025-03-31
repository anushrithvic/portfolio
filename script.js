function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Graphic Designer', 'Artist'],
        typeSpeed: 60,
        backSpeed: 10,
        backDelay: 1200,
        loop: true
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const popup = document.getElementById("success-popup");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      let name = document.querySelector("input[name='fullname']").value.trim();
      let email = document.querySelector("input[name='emailaddress']").value.trim();
      let phone = document.querySelector("input[name='phonenumber']").value.trim();
      let subject = document.querySelector("input[name='emailsubject']").value.trim();
      let message = document.querySelector("textarea[name='messagecontent']").value.trim();

      // Basic validation
      if (!name || !email || !phone || !subject || !message) {
        alert("Please fill out all fields.");
        return;
      }

      // Email format validation
      let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Show success pop-up
      popup.classList.add("show");

      // Hide pop-up after 3 seconds
      setTimeout(() => {
        popup.classList.remove("show");
      }, 3000);

      form.reset(); // Reset form fields
    });
});

