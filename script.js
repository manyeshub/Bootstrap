(function () {

  const forms = document.querySelectorAll('.needs-validation')

  forms.forEach(function (form) {

    form.addEventListener('submit', function (e) {

      if (!form.checkValidity()) {
        e.preventDefault()
      }

      form.classList.add('was-validated')

    })

  })

})()