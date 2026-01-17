import GUI from '../../perfect-gui/index';
import * as THREE from 'three';

export default function basics() {
    // ------------------------------------------------
    // 1. Setup Three.js Scene
    // ------------------------------------------------
    const container = document.querySelector('#container-1');
    let canvasWidth, canvasHeight;

    function getCanvasSize() {
        if (window.innerWidth < 600) {
            return { width: container.clientWidth, height: 300 };
        } else if (window.innerWidth < 640) {
            return { width: container.clientWidth - 100, height: container.clientHeight };
        } else {
            return { width: container.clientWidth - 290, height: container.clientHeight };
        }
    }

    ({ width: canvasWidth, height: canvasHeight } = getCanvasSize());

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvasWidth / canvasHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Object
    const geometry = new THREE.TorusKnotGeometry(1, 0.2, 160, 32);
    const material = new THREE.MeshStandardMaterial({ 
        color: '#ffffff', 
        wireframe: false,
        roughness: 0.0,
        metalness: 0.7
    });

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.colorSpace = THREE.SRGBColorSpace;
        material.envMap = texture;
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    // Light
    const pointLight = new THREE.PointLight(0xffffff, 20);
    pointLight.position.set(0, 0, 4);
    scene.add(pointLight);

    // Animation Loop
    function animate(time) {
        mesh.rotation.x = time * 0.0005;
        mesh.rotation.y = time * 0.0005;
        mesh.rotation.z = time * 0.0005;
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);

    // Resize handling
    window.addEventListener('resize', resize);
    setTimeout(resize, 100);

    function resize() {
({ width: canvasWidth, height: canvasHeight } = getCanvasSize());
        camera.aspect = canvasWidth / canvasHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvasWidth, canvasHeight);
    }

    // ------------------------------------------------
    // 2. Setup GUI
    // ------------------------------------------------
    const gui = new GUI({
        label: 'Three.js mesh',
        container: '#container-1'
    });

    gui.button({ label: 'Randomize color' }, () => {
        const col = `#${Math.floor(Math.random() * 16777215).toString(16)}`;        
        material.color.set(col);
    });

    gui.color({ label: 'Color', value: '#ffffff' }, color => {
        material.color.set(color);
    });

    gui.list({ label: 'Preset', values: ['-', 'red', 'pink', 'yellow', 'blue'], value: '-' }, value => {
        if (value != '-') {
            material.color.set(value);
        }
    });

    //gui.slider({ label: 'Roughness', obj: material, prop: 'roughness', min: 0, max: 1, step: 0.01 });
    gui.slider({ label: 'Metalness', obj: material, prop: 'metalness', min: 0, max: 1, step: 0.01 });

    gui.toggle({ label: 'Wireframe', value: false }, state => {
        material.wireframe = state;
    });

    gui.image({ label: 'HDR1', path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/hdr1.jpg', selected: true }, changeEnvMap);
    gui.image({ label: 'HDR2', path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/hdr2.jpg' }, changeEnvMap);
    gui.image({ label: 'HDR3', path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/hdr3.jpg' }, changeEnvMap);
    
    const folder = gui.folder({ label: 'Point light', closed: true });
    folder.vector2({ label: 'X / Y position',
        x: { obj: pointLight.position, prop: 'x', min: -5, max: 5 },
        y: { obj: pointLight.position, prop: 'y', min: -5, max: 5 },
    }, () => {
        pointLight.position.x = pointLight.position.x;
        pointLight.position.y = pointLight.position.y;
    });

    function changeEnvMap(img) {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(img.path, (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.colorSpace = THREE.SRGBColorSpace;
            mesh.material.envMap = texture;
        });
    }
}