import { registerImage } from "./lazy";

/*Consumiendo API RandomFox  https://randomfox.ca/ */

/*Creando una funcion RANDOM*/

const minimo = 1;
const maximo = 123;

const azar = () => {
    const random = Math.floor(Math.random() * (maximo - minimo)) + minimo;
    return random;
}

const crearNodo = () => {
    const container = document.createElement('div');
    container.className = 'p4';

    const imagen = document.createElement('img');
    imagen.className = 'p-4';
    imagen.classList.add('mx-auto');
    imagen.setAttribute('width', '320');
    imagen.dataset.src = `https://randomfox.ca/images/${azar()}.jpg`;

    container.appendChild(imagen);

    return container;
}



// Agregando funciones al botón
const boton = document.querySelector('button');
const accion = () => {
    const target = crearNodo();
    agregar.append(target);
    registerImage(target);

}
boton.addEventListener('click', accion);

const agregar = document.getElementById('contenedor')