
//Comando para correr proyecto npx vite
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


//1 - Crear una Escena
const escena = new THREE.Scene();
//escena.background = new THREE.Color("skyblue") //agregando color de fonodo
//escena.fog = new THREE.Fog(0x76456c, 0.1, 8) //efecto de sombra


//cargaremos imagen
//const carga = new THREE.TextureLoader()
//carga.load('./img/custom-sky.png', (textura) => {
//    escena.background = textura
//})

//2 Agregar la camara
const camara = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1, //Defecto si no se manda
    2000  //Defecto si no se manda
)



//3 Agregar al render

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight) //Tamaño del navegador.
document.body.appendChild(renderer.domElement)//Agregando render al documento HTML

// 5-1 Agregando geometria
const geometria = new THREE.BoxGeometry();
// 5-2 Material
const material = new THREE.MeshBasicMaterial({ color: 0x00f000, wireframe: true });
// 5 Mesh esta compuesto por una geometria y un material
const cubo = new THREE.Mesh(geometria, material)
//6 - Agregando el cubo a la escena
escena.add(cubo)

//Cambiando la posicion de nuestra camara zoom misntras menos número, la figura es mas grande
camara.position.z = 5 //unidades saliendo del computador

//activamos el orbicontrols para girar, zoom la camara, funciona automaticamentes
const controles = new OrbitControls(camara,renderer.domElement)

//propiedades opcionales
controles.minDistance = 3
controles.maxDistance =10
//controles.enableZoom=false
//controles.enableRotate=false
controles.enableDamping=true
controles.dampingFactor = 0.5
//controles.maxPolarAngle = Math.PI /10
controles.screenSpacePanning = true;
// 4 Agregar la Escena y la camara al render.
//renderer.render(escena,camara)

const redimencionar = () =>{
    camara.aspect =window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix()
    renderer.setSize(window.innerWidth , window.innerHeight)
    renderer.render(escena, camara)
}
window.addEventListener("resize",redimencionar)

//7 crear anumacion
const animacion = () => {
    //Bucle para que se repita la animacion
    requestAnimationFrame(animacion)

    cubo.rotation.x += 0.01;
    cubo.rotation.z += 0.01;
    //Actualizaremos el render en bucle
    renderer.render(escena, camara)

}
animacion()