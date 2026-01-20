import GUI from './perfect-gui/index';
import * as ThreeGUI from '../../../../perfect-gui/src/plugins/three.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

GUI.registerPlugin(ThreeGUI)

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

const scale = .5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.position.x = -1;
cube.scale.set(scale, scale, scale);

const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube2 = new THREE.Mesh(geometry, material2);
scene.add(cube2);
cube2.position.x = 0;
cube2.scale.set(scale, scale, scale);

const material3 = new THREE.MeshPhysicalMaterial({ color: 0xff0000 });
const cube3 = new THREE.Mesh(geometry, material3);
scene.add(cube3);
cube3.position.x = 1;
cube3.scale.set(scale, scale, scale);

camera.position.z = 5;

renderer.render(scene, camera);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 0, 1);
const ambient = new THREE.AmbientLight(0xffffff, .5)
scene.add(light, ambient);

const controls = new OrbitControls(camera, canvas);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.002;
    cube.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();

const gui = new GUI();

gui.threeMaterial({ label: 'material', obj: material, closed: true });
gui.threeMaterial({ label: 'material2', obj: material2 });
gui.threeMaterial({ label: 'material3', obj: material3 });
scene.background = new THREE.Color('black')
gui.threeColor({label: 'background', obj: scene.background})