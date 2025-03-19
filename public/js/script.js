(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          console.log("Form validation failed"); // Debugging
        } else {
          console.log("Form submitted successfully"); // Debugging
        }
  
        form.classList.add('was-validated');
      }, false);
    })
})();
