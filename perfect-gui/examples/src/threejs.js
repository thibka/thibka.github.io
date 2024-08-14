import GUI from './perfect-gui/index';
import { materialFolder } from '../../../../perfect-gui/src/addons/three.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
resize();
window.addEventListener('resize', resize);

function resize() {
    const w = document.documentElement.clientWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    canvas.width = w;
    canvas.height = h;
}

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

renderer.render(scene, camera);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 2, 1);
scene.add(light);

const controls = new OrbitControls(camera, canvas);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

GUI.prototype.materialFolder = materialFolder;

const gui = new GUI();

gui.materialFolder({ name: 'material', obj: material });