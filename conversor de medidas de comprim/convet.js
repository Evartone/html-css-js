// coding js

let button = document.getElementById("btn");

function calcular(){

  const metro = parseFloat(document.getElementById("gram").value);
  const type = document.getElementById("type").value;

  // Condição de erros

  if (metro === "" || isNaN(metro)){

    document.getElementById("gram").focus();
    document.getElementById("error").innerHTML = "Insira uma medida válida!!"
    document.getElementById("result").innerHTML = ""

  } else{


    document.getElementById("error").innerHTML = "";

    switch(type) {

        case "Kilometro":

           convert_kilometro(metro);

           break;

       case "Hectometro": 
       
           convert_hectometro(metro);
           break;

       case "Dacametro":
        //   Outras tres medias 

            convert_dacametro(metro);
            break;

       case "Decimetro":

            convert_decimetro(metro);  
            break;

       case "Centimetro":

            convert_centimetro(metro);  
            break;

       case "Milimetro":

            convert_milimetro(metro);  
            break;

            default:

            alert("error")

              // função de calculos

           function convert_kilometro(metro){

            // conversao de m para km 

            let taxa = 0.001;
            kilometro  = (metro * taxa).toLocaleString('pt-BR', {minimumFractionDigits: 3, maximumFractionDigits: 3}) 
            let resultado= document.getElementById("result")

            resultado.innerHTML = `${metro} metros = ${kilometro} kilometros`;
         }

         function convert_hectometro(metro){

            // conversao de m para hm 

            let taxa = 0.01;
            hectometro  = (metro * taxa).toLocaleString('pt-BR', {minimumFractionDigits: 3, maximumFractionDigits: 3}) 
            let resultado= document.getElementById("result")

            resultado.innerHTML = `${metro} metros = ${hectometro} hectometros`;
         }


         function convert_dacametro(metro){

            // conversao de m para dam

            let taxa = 0.1;
            dacametro  = (metro * taxa).toLocaleString('pt-BR', {minimumFractionDigits: 3, maximumFractionDigits: 3}) 
            let resultado= document.getElementById("result")

            resultado.innerHTML = `${metro} metros = ${dacametro} dacametros`;
         }

         function convert_decimetro(metro){

            // conversao de m para dcm

            let taxa = 10;
            decimetro  = (metro * taxa).toLocaleString('pt-BR', {minimumFractionDigits: 3, maximumFractionDigits: 3}) 
            let resultado= document.getElementById("result")

            resultado.innerHTML = `${metro} metros = ${decimetro} decimetros`;
         }

         function convert_centimetro(metro) {

            // conversao de m para cm 

            let taxa = 100;
            centimetro  = (metro * taxa).toLocaleString('pt-BR', {minimumFractionDigits: 3, maximumFractionDigits: 3}) 
            let resultado= document.getElementById("result")

            resultado.innerHTML = `${metro} metros = ${centimetro} centimetros` ;
         }

         function convert_milimetro(metro){

            // conversao de m para mm 

            let taxa = 1000;
            milimetro  = (metro * taxa).toLocaleString('pt-BR', {minimumFractionDigits: 3, maximumFractionDigits: 3}) 
            let resultado= document.getElementById("result")

            resultado.innerHTML = `${metro} metros = ${milimetro} milimetro`;
         }
            
    }
  
  }

};

button.addEventListener("click", calcular)