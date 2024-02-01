let numeroAleatorio = 0;
let listaDeNumerosGenerados = [];
let numeroMaximo = 10
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsurario').value);

    if (numeroDeUsuario === numeroAleatorio) {
        asignarTextoElemento('p',`Acertastes el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }  else {
        //En caso de no acertar
        if (numeroDeUsuario > numeroAleatorio){
            asignarTextoElemento('p','El numero es menor');
        } else{
            asignarTextoElemento('p','El numero es mayor');
        }       
        intentos++;
        eliminarNumero();

    } 
    return;
}

function eliminarNumero() {
    document.getElementById("valorUsurario").value="";
}
 
function generarNumeroAleatorio() {
    //Generamos el numero aleatorio
    let numeroAleatorio = Math.floor(Math.random()*10+1);

    console.log(numeroAleatorio);
    console.log(listaDeNumerosGenerados);
    //Su ya se agregaron todos los numeros a la lista.
    if (listaDeNumerosGenerados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Se acabarin los numeros');
    } else {
            //Si el numero generado esta incluido
        if (listaDeNumerosGenerados.includes(numeroAleatorio)) {
            return generarNumeroAleatorio();        
        } else{
            //Si el numero aleatoria no esta incluido en la lista
            listaDeNumerosGenerados.push(numeroAleatorio);
            return numeroAleatorio;
    }
    }
    
}

function reiniciarJuego() {
    //-----Funcion corta--------
    //Funciona como F5 para reiniciar toda la pagina
    //location.reload();

    //------Funcion larga-------
    //LIMPIAR CAJA
    eliminarNumero();
    //INICIALIZAR EL NUMERO DE intentos, GENERAR EL un nuevo numero ALEATORIO y GENERAR MENSAJES iniciales.
    caracteristicasIniciales();
    
    //DESABILITAR EL BOTON DE NUEVO JUEGO
    document.getElementById('reiniciar').setAttribute('disabled','true')
    
}

function caracteristicasIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Escribe un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroAleatorio = generarNumeroAleatorio();
}
caracteristicasIniciales()