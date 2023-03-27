
// const calcular = document.getElementById("calcular");



function caculcular() {

    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    // validação do campo

    if (nome !== "" && altura !== "" && peso !== "") {
        
        const valorimc = (peso / (altura * altura)).toFixed(2);

        let classificação = ""

        if (valorimc < 18.5){
           classificação = "Abaixo do peso"
        } else if(valorimc < 25) {
            classificação ="com peso ideal. Parabés!!!"
             
        }else if (valorimc < 30){
            classificação = "levemente acima do peso."
        } else if(valorimc < 35){
            classificação = " com obesidade grau 1."
        }else if (valorimc < 40){
            classificação ="com obesidade grau 2"
        }else{
            classificação = "com obesidade grau 3. Cuidado!!"
        }

        resultado.textContent = `${nome}, seu IMC é ${valorimc} e você está ${classificação}`  ;

    } else{

        resultado.textContent = "Preencha todos os campos!"
    }

}


// calcular.addEventListener('click', imc);
