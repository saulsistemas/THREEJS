
//Comando para correr proyecto npx vite
import * as THREE from 'three';


//1 - Crear una Escena
const escena = new THREE.Scene();

//2 Agregar la camara
const camara = new THREE.PerspectiveCamera(
    72,
    window.innerWidth/window.innerHeight
)


//3 Agregar al render

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight) //Tamaño del navegador.
document.body.appendChild(renderer.domElement)//Agregando render al documento HTML

// 4 Agregar la Escena y la camara al render.
renderer.render(escena,camara)