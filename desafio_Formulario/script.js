const inputEmail = document.getElementById('email')
const botaoSubmit = document.getElementById('submit')
const spanErro = document.querySelector('span')

botaoSubmit.addEventListener('click', ()=>{
    let formulario = document.forms['minhaValidacao']['email'].value
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formulario == '' || regex.test(formulario) == false){
        inputEmail.classList.toggle('erro')
        spanErro.classList.toggle('erro')
        console.log('não validado')
        return false
    }else {
        localStorage.setItem('transferindoValor', formulario)
        window.location.href= 'alert.html'
        return true
    }
})