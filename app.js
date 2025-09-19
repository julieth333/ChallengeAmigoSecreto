let amigos = [] ;
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }
    
    amigos.push(nombre);
    
    input.value = '';
    
    actualizarListaAmigos();
    
    limpiarResultado();
}


function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    []
    lista.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'friend-item';
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '❌';
        botonEliminar.className = 'delete-button';
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}


function eliminarAmigo(index){
    amigos.splice(index,1);
    actualizarListaAmigos();
    limpiarResultado();
}

function limpiarResultado(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}
function mostrarResultado(nombre){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML=`tu amigo secreto es ${nombre}`;
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('no hay amigos');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSeleccionado = amigos[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}
 
function configurarEventos(){
    const input = document.getElementById('amigo');

    input.addEventListener('keypress', function(evento){
        if (evento.key === 'enter'){
            agregarAmigo();
        }
    });

    input.focus()
}
document.addEventListener('DOMContentLoaded', configurarEventos)


