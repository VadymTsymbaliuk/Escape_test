
const formInput = document.querySelectorAll('.form-control')

formInput.forEach(function (el) {
    el.addEventListener("input", function (e) {
        if (el.value) {
            if (el.validity.typeMismatch) {
                el.setCustomValidity("Я очікую дані!");
            } else {
                el.setCustomValidity("")
            }
        } else {
            el.classList.toggle('error-value')
        }
    })
})
