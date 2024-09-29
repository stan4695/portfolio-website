document.addEventListener('DOMContentLoaded', function () {
  var forms = document.querySelectorAll('.needs-validation');



  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      alert('The backend development is still in progress. In the meantime, feel free to contact me via email at scatalin800@gmail.com.');
      form.classList.add('was-validated');
    }, false);
  });
});
