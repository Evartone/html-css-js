
"Use Strict"


const FormatarDigitos =(digitos)=> `0${digitos}` .slice(-2)

const atualizar =(tempo)=> {

    const segundos = document.getElementById("segundos");
    const minutos = document.getElementById("minutos");
    const horas = document.getElementById("horas");
    const dias = document.getElementById("dias");

    const qtdSegundos = tempo % 60 ;
    const qtdminutos = Math.floor((tempo % (60 * 60)) / 60 );
    const qtdhoras = Math.floor((tempo % (60 * 60 * 24)) / ( 60 * 60) );
    const qtddias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = FormatarDigitos(qtdSegundos)
    minutos.textContent = FormatarDigitos(qtdminutos)
    horas.textContent = FormatarDigitos(qtdhoras)
    dias.textContent = (qtddias)

}
const Regressiva =(tempo)=>{

    const pararContagem =( )=> clearInterval(id)
    
    const contar =( ) =>{
        
        if(tempo == 0){

            pararContagem()
        }
         
        atualizar(tempo)
        tempo --;
    }

    const id = setInterval(contar, 1000)
}
Regressiva(31140800);