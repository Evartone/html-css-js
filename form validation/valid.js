
// Capturar os id´s 

let nome_usuario = document.getElementById("text_name");
let email = document.getElementById("email");
let password = document.getElementById("main_pass");
let conf_password = document.getElementById("secondpass");

let The_form = document.querySelector("he_form");

function Validar_Input() {

   // Checar se o nome do usuario está vazio //
   
   if(nome_usuario.value.trim() === "") {
    
      No_erro(nome_usuario,("Nome do usuário não pode estar vazio!!"))

   }else{

    No_sucesso(nome_usuario);
    
   }

   // Validação do email  //

   if(email.value.trim() === "") {
    
      No_erro(email,("Email não pode estar vazio!!"))

   } else{

        // checar o formato do email //

        if(!email_Valido(email.value.trim())){

             No_erro(email, "Email não valido!");

        }else{

            No_sucesso(email);
        }  
   }

   // Validação das senhas //

   if(password.value.trim() === "") {
    
    No_erro(password,("Insira uma senha!"))

       }else{

      No_sucesso(password);
  
    }
         // confirmação da pass //

    if(conf_password.value.trim() === "") {
    
        No_erro(conf_password,("confirme a sua senha!"))
  
     }else{

        if(password.value.trim() !== conf_password.value.trim()){

            No_erro(conf_password, "As senhas não combinam!")
        }else{
             No_sucesso(conf_password);
        }
  
     }
}

document.querySelector("button").addEventListener("click", (event) =>{

    event.preventDefault()
    Validar_Input()
    
})

function No_sucesso(input ){

    let parent = input.parentElement;
    let mensElem = parent.querySelector("small");
    mensElem.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function No_erro(input, message ) {

    let parent = input.parentElement;
    let mensElem = parent.querySelector("small");
    mensElem.style.visibility = "visible";
    mensElem.innerText = message; 

    parent.classList.add("error");
    parent.classList.remove("success");
}

function email_Valido(email){

    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



