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
    const geometry = new THREE.TorusKnotGeometry(1, 0.2, 300, 50);
    const customUniforms = {
        uTime: { value: 0 },
        uX: { value: 0 },
        uY: { value: 0 }
    };
    const material = new THREE.MeshStandardMaterial({
        color: '#ffffff',
        wireframe: false,
        roughness: 0.0,
        metalness: 0.7,
        onBeforeCompile: shader => {
            // Logging
            /* console.log(shader.fragmentShader);
            console.log(shader.vertexShader);
            console.log(THREE.ShaderChunk.common); */ // <common>

            // Uniforms
            shader.uniforms.uTime = customUniforms.uTime;
            shader.uniforms.uX = customUniforms.uX;
            shader.uniforms.uY = customUniforms.uY;
        
            // ou bien
            shader.vertexShader = shader.vertexShader.replace(
                `void main() {`,
                `
                uniform float uTime;
                uniform float uX;
                uniform float uY;
                

                // Classic Perlin 3D Noise 
                // by Stefan Gustavson
                //
                vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
                vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
                vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

                float cnoise(vec3 P){
                    vec3 Pi0 = floor(P); // Integer part for indexing
                    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
                    Pi0 = mod(Pi0, 289.0);
                    Pi1 = mod(Pi1, 289.0);
                    vec3 Pf0 = fract(P); // Fractional part for interpolation
                    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
                    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
                    vec4 iy = vec4(Pi0.yy, Pi1.yy);
                    vec4 iz0 = Pi0.zzzz;
                    vec4 iz1 = Pi1.zzzz;

                    vec4 ixy = permute(permute(ix) + iy);
                    vec4 ixy0 = permute(ixy + iz0);
                    vec4 ixy1 = permute(ixy + iz1);

                    vec4 gx0 = ixy0 / 7.0;
                    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
                    gx0 = fract(gx0);
                    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
                    vec4 sz0 = step(gz0, vec4(0.0));
                    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
                    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

                    vec4 gx1 = ixy1 / 7.0;
                    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
                    gx1 = fract(gx1);
                    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
                    vec4 sz1 = step(gz1, vec4(0.0));
                    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
                    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

                    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
                    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
                    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
                    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
                    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
                    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
                    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
                    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

                    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
                    g000 *= norm0.x;
                    g010 *= norm0.y;
                    g100 *= norm0.z;
                    g110 *= norm0.w;
                    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
                    g001 *= norm1.x;
                    g011 *= norm1.y;
                    g101 *= norm1.z;
                    g111 *= norm1.w;

                    float n000 = dot(g000, Pf0);
                    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
                    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
                    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
                    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
                    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
                    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
                    float n111 = dot(g111, Pf1);

                    vec3 fade_xyz = fade(Pf0);
                    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
                    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
                    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
                    return 2.2 * n_xyz;
                }


                void main() {`);

            // Vertex - Main
            shader.vertexShader = shader.vertexShader.replace(
                `#include <begin_vertex>`,
                `#include <begin_vertex>
                vec3 worldNormal = normalize(vec3(modelMatrix * vec4(objectNormal, 0.0)));
                float noise = cnoise(transformed * uX + transformed * .5 * uY + uTime * .001) * 2.;
                float noise2 = cnoise(vec3(noise * 2.) * pow(abs(uX), .5) * .1);
                transformed += (worldNormal * abs(uY) * .2 * noise) + (worldNormal * noise2);
                `);


            // Fragment - Déclarations
            shader.fragmentShader = shader.fragmentShader.replace(
                `void main() {`,
                `
                uniform float uTime;

                void main() {`);
                    
            // Fragment - Main
            shader.fragmentShader = shader.fragmentShader.replace(
                `#include <opaque_fragment>`,
                `
                #ifdef OPAQUE
                    diffuseColor.a = 1.0;
                #endif
                #ifdef USE_TRANSMISSION
                    diffuseColor.a *= material.transmissionAlpha;
                #endif
                gl_FragColor = vec4( outgoingLight, diffuseColor.a );
            `);
        }
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
        customUniforms.uTime.value = time;
    }
    renderer.setAnimationLoop(animate);

    // Resize handling
    window.addEventListener('resize', resize);
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

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
        label: 'Basics',
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

    gui.slider({ label: 'Metalness', obj: material, prop: 'metalness' });

    gui.toggle({ label: 'Wireframe', value: false }, state => {
        material.wireframe = state;
        if (state) {
            material.roughness = 1;
        } else {
            material.roughness = 0;
        }
    });

    gui.image({ label: 'HDR1', path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/hdr1.jpg', selected: true }, changeEnvMap);
    gui.image({ label: 'HDR2', path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/hdr2.jpg' }, changeEnvMap);
    gui.image({ label: 'HDR3', path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/hdr3.jpg' }, changeEnvMap);

    const folder = gui.folder({ label: 'Point light', closed: true });

    folder.vector2({
        label: 'Displacement',
        x: { obj: customUniforms.uX, prop: 'value', min: -1, max: 1 },
        y: { obj: customUniforms.uY, prop: 'value', min: -1, max: 1 },
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