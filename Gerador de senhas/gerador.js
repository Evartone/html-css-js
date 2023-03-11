
let slider = document.querySelector("#slider");
let password = document.querySelector("#password ");
let sizepassword = document.querySelector("#valor");
let containerpassword = document.querySelector("#container-password");


let charset= "12xdfcgvhbj3456zxcvbnmasdfghjklwertyuioppojhgcxdc7654zrdxtcfyvbnmçº+´~-.321"
let novasenha = ""


sizepassword.innerHTML = slider.value

slider.oninput = function() {

        sizepassword.innerHTML = this.value
}

function geradora(){

     let pass = " "
     for(let i = 0, n = charset.length; i < slider.value; ++i){

        pass += charset.charAt(Math.floor(Math.random() * n))
     }

     containerpassword.classList.remove("hide")
     password.innerHTML = pass
     novasenha = pass
}
// Função para copiar a senha 

function copysenha() {
        alert("Senha copiada com sucesso!")

        navigator.clipboard.writeText(novasenha)
}