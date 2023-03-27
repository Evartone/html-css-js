"use strict"

const display = document.getElementById("display")
const numeros = document.querySelectorAll("[id*=tecla]");
const operadores = document.querySelectorAll("[id*=operador]");

let novoNumero = true
let operador;
let numeroAnterior;

const operaçãopendente =()=> operador !== undefined

const calcular =()=> {
 
   if(operaçãopendente()) {

    const numeroAtual = parseFloat(display.textContent)
    novoNumero = true
    const resultado = eval(`${numeroAnterior} ${operador} ${numeroAtual}`)
    AtualizarDisplay(resultado)

   }

}

const Inserirnumero =(evento)=> AtualizarDisplay(evento.target.textContent)

const AtualizarDisplay =(evento)=>{
    
  if(novoNumero) {
    display.textContent = evento
    novoNumero = false
  }else{
    display.textContent += evento
  }
  
}

const SelecionarOperador =(evento)=> {
    
     calcular()
     novoNumero = true
     operador = evento.target.textContent
     numeroAnterior = parseFloat(display.textContent)
    
}

numeros.forEach(numero=>numero.addEventListener("click", Inserirnumero))
operadores.forEach(operador =>operador.addEventListener("click", SelecionarOperador))


const Ativarigual =()=> {

    calcular() 
    operador = undefined
}
document.getElementById("igual").addEventListener("click",Ativarigual)

const LimparDisplay =()=> display.textContent = ""
document.getElementById("Limpardisplay").addEventListener("click", LimparDisplay)

const LimparCalculo =()=> {
   
LimparDisplay()
   operador = undefined;
   numeroAnterior = undefined
   novoNumero = true
}
document.getElementById("limparcalculo").addEventListener("click", LimparCalculo)


const BackSpace =()=> display.textContent = display.textContent.slice(0, -1)
document.getElementById("backspace").addEventListener("click", BackSpace)

const InverterSinal =()=> {
  novoNumero = true
  AtualizarDisplay(display.textContent * -1)

}
document.getElementById("inverter").addEventListener("click", InverterSinal)



const MapaTeclado = {

  "0"   :  "tecla0",
  "1"   :  "tecla1",
  "2"   :  "tecla2",
  "3"   :  "tecla3",
  "4"   :  "tecla4"

}

const MapearTeclado =(evento)=> {
  
  const tecla = evento.key
  const teclapermitida =()=> Object.keys(MapaTeclado).indexOf(tecla) !== -1
   if(teclapermitida()) document.getElementById(MapaTeclado[tecla]).click()


}

document.addEventListener("keydown", MapearTeclado);
