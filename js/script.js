let email = document.querySelector('.email')
let submitBtn = document.querySelector('.btn-submit')

console.log(email.value)
submitBtn.addEventListener('click', function () {
    if(!email.value){
        email.setAttribute("placeholder", 'Enter address')
        console.log('error')
    }else {
        console.log(email.value)
    }
})