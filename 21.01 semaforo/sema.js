const img = document.getElementById("img")
const buttons = document.getElementById("buttons")
let indexcolor = 0
let limparidintervalo = null


const trafficlight = (event) =>{

    stopaut()
   
   turnOn[event.target.id]()
}
buttons.addEventListener("click", trafficlight)


const mudançacor = () =>{

    indexcolor = indexcolor < 2 ? ++indexcolor : 0;
   
    
}

const changecolor = () =>{
    
    const colors = ["red", "yellow", "green"]
    const color = colors[indexcolor]
     turnOn[color]()
     mudançacor()

}

const  stopaut = () =>{

    clearInterval(limparidintervalo)
}


const turnOn ={

   "red": () => img.src= "img/vermelho.png",
   "yellow": () => img.src= "img/amarelo.png",
   "green": () => img.src= "img/verde.png",
   "automatic": () => limparidintervalo = setInterval(changecolor, 1000)
   
}