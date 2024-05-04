
//Comando para correr proyecto npx vite
import * as THREE from 'three';


//1 - Crear una Escena
const escena = new THREE.Scene();
escena.background = new THREE.Color("skyblue") //agregando color de fonodo
escena.fog = new THREE.Fog(0x76456c, 0.1, 8) //efecto de sombra

//cargaremos imagen
    const carga = new THREE.TextureLoader()
    carga.load('./img/custom-sky.png',(textura)=>{
        escena.background = textura
    })

//2 Agregar la camara
const camara = new THREE.PerspectiveCamera(
    72,
    window.innerWidth/window.innerHeight
)


//3 Agregar al render

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight) //Tamaño del navegador.
document.body.appendChild(renderer.domElement)//Agregando render al documento HTML

// 5-1 Agregando geometria
const geometria = new THREE.BoxGeometry();
// 5-2 Material
const material =  new THREE.MeshBasicMaterial({color: 0x00f000});
// 5 Mesh esta compuesto por una geometria y un material
const cubo = new THREE.Mesh(geometria,material)

//6 - Agregando el cubo a la escena
escena.add(cubo)

//Cambiando la posicion de nuestra camara zoom misntras menos número, la figura es mas grande
camara.position.z =5

// 4 Agregar la Escena y la camara al render.
//renderer.render(escena,camara)

//7 crear anumacion
const animacion = ()=>{
    //Bucle para que se repita la animacion
    requestAnimationFrame(animacion)
    cubo.rotation.x +=0.01;
    cubo.rotation.z +=0.01;
    //Actualizaremos el render en bucle
renderer.render(escena,camara)

}
animacion()