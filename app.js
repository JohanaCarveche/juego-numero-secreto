let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
};

function verificarIntento(){
    
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    
    
       if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acertó
        if (numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
            
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        };
        intentos++;
        limpiarCaja();        
    };
    return;
};

function limpiarCaja(){
    let valorCaja = document.querySelector('#numeroUsuario');
    valorCaja.value = '';
};

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   if(listaNumerosSorteados.length== numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');

   }else{

   if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    
   };
};
};



function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
};

function nuevoJuego(){
    //limpiar la caja
    limpiarCaja();
    //mensaje de inicio de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
};

condicionesIniciales();