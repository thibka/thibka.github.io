import "@babel/polyfill"
import 'normalize.css'
import noise from './js/noise'
import * as THREE from 'three'
import anime from 'animejs'
import './styles/main.scss'
import './js/legacyJSONLoader'

import perfectGUI from 'perfect-gui'

 
var perlin = noise,
    lightPositionAmp = 8,
    cameraInteractionEnabled = false,
    initVerticesY = [],
    verticesShuffles = 0,
    mouse = {};

/*
	============================================
	SRC : Scene - Renderer - Camera
	============================================
*/

var scene = new THREE.Scene({alpha: true});
//scene.background = new THREE.Color( 0x000000, 1 );

var canvas = document.getElementById("canvas"),
    canvasWidth,
    canvasHeight,
    renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.01,
    10000
);

camera.position.z = 3;
camera.position.x = 0;
camera.position.y = 1;
camera.rotation.set(0, 0, 0);
scene.add(camera);

/*
	============================================
	Background color
	============================================
*/

var gl = canvas.getContext("experimental-webgl");
//gl.clearColor(51, 51, 51, 1);
//gl.clear(gl.COLOR_BUFFER_BIT);

/*
	============================================
	Lights
	============================================
*/
var light_1 = new THREE.PointLight(0xffffff, 10, 8, 2);
light_1.position.set(0, 0, 0);
scene.add(light_1);

var rimlight = new THREE.DirectionalLight(0xffffff, 2);
rimlight.position.set(7.6, 0, -2.4);
scene.add(rimlight);

/*
	============================================
	Objects
	============================================
*/

var mesh;
function init() {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;

    camera.position.initY = 1;
    camera.position.initZ = 4;

    var loader = new THREE.LegacyJSONLoader();
    loader.load(
        "https://projects.thibautfoussard.com/themountains/old_1/json/plane_2.json",
        function (geometry, materials) {
            var material = new THREE.MeshPhongMaterial({
                color: 0x1a1a1a,
                reflectivity: 1,
                transparent: true,
                opacity: 1,
                side: THREE.DoubleSide,
                shininess: 100,
                specular: 0x333333,
                flatShading: true
            });
            mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = 0;
            mesh.position.y = 0;
            mesh.position.z = 0;
            scene.add(mesh);

            mesh.geometry.vertices.forEach(function (vertex) {
                initVerticesY.push(vertex.y);
            });
            document.getElementById("wrapper").style.opacity = 1;

            animate();
            intro();
        }
    );
}

function animate() {
    mesh.geometry.verticesNeedUpdate = true;

    requestAnimationFrame(animate);

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

function intro() {
    anime({
        targets: [light_1.position, camera.position],
        z: 6.5,
        easing: "easeInOutQuart",
        duration: 3000
    });

    setTimeout(function () {
        anime({
            targets: "#loader",
            opacity: 0,
            easing: "easeInQuart",
            duration: 2000
        });
        setTimeout(function () {
            document.getElementById('loader').style.display = "none";
        }, 2025);
        anime({
            targets: ["#note"],
            opacity: 1,
            easing: "easeInQuart",
            duration: 2000
        });
        cameraInteractionEnabled = true;
    }, 2000);
}

function shuffleLight() {
    anime({
        targets: [light_1.color],
        r: 0.1 + Math.random(),
        g: 0.1 + Math.random(),
        b: 0.1 + Math.random(),
        easing: "easeInOutQuart",
        duration: 1000
    });

    anime({
        targets: [rimlight.color],
        r: 0.1 + Math.random(),
        g: 0.1 + Math.random(),
        b: 0.1 + Math.random(),
        easing: "easeInOutQuart",
        duration: 1000
    });

    anime({
        targets: light_1.position,
        y: Math.random(),
        easing: "easeInOutQuart",
        duration: 1000
    });

    anime({
        targets: light_1.intensity,
        intensity: Math.max(Math.random() * 20, 2),
        easing: "easeInOutQuart",
        duration: 1000
    });
}

function shuffleVertices() {
    if (MathAnimations.animation === null)
        updateFOV(Math.floor(Math.random() * 30) + 30);

    verticesShuffles++;
    if (verticesShuffles >= 8) {
        verticesShuffles = 0;
        reset();
        return;
    }
    var randX = 0.1 + Math.random(),
        randY = 0.1 + Math.random(),
        randZ = 0.1 + Math.random(),
        randXYZ = 0.5 + Math.random(),
        heightFactor = 1 + Math.random();

    mesh.geometry.vertices.forEach(function (vertex) {
        var newY =
            perlin(
                vertex.x * randX * randXYZ,
                vertex.y * randY * randXYZ,
                vertex.z * randZ * randXYZ
            ) * heightFactor;
        anime({
            targets: vertex,
            y: newY - .8,
            easing: "easeInOutQuart",
            duration: 2000
        });
    });
}

var MathAnimations = {
    animation: null,
    i: 0,
    animate: function (newAnimation) {
        MathAnimations.animation = newAnimation;
        MathAnimations.i = 0;
        newAnimation();
    },
    sinX: function () {
        if (MathAnimations.animation == MathAnimations.sinX)
            requestAnimationFrame(MathAnimations.animation);
        mesh.geometry.vertices.forEach(function (vertex) {
            var newY = vertex.y + Math.sin(MathAnimations.i / 100 + vertex.x) / 100;
            vertex.y = newY;
        });
        MathAnimations.i++;
    },
    sinZ: function () {
        if (MathAnimations.animation == MathAnimations.sinZ)
            requestAnimationFrame(MathAnimations.animation);
        mesh.geometry.vertices.forEach(function (vertex) {
            var newY = vertex.y + Math.sin(MathAnimations.i / 100 + vertex.z) / 100;
            vertex.y = newY;
        });
        MathAnimations.i++;
    },
    sinXZ: function () {
        if (MathAnimations.animation == MathAnimations.sinXZ)
            requestAnimationFrame(MathAnimations.animation);
        mesh.geometry.vertices.forEach(function (vertex) {
            var newY = Math.sin(MathAnimations.i / 100 + vertex.x * vertex.z) / 3;
            vertex.y = newY;
        });
        MathAnimations.i++;
    }
};

function reset() {
    moveCameraY(1);
    updateFOV(45);
    MathAnimations.animation = null;
    var i = 0;
    mesh.geometry.vertices.forEach(function (vertex) {
        var newY = initVerticesY[i];
        anime({
            targets: vertex,
            y: newY,
            easing: "easeInOutQuart",
            duration: 2000
        });
        i++;
    });
}

function updateFOV(fov) {
    console.log(fov);
    
    var fovAnimation = anime({
        targets: camera,
        fov: fov,
        easing: "easeInOutQuart",
        duration: 2000
    });
    fovAnimation.update = function () {
        camera.updateProjectionMatrix();
    };
}

function moveCameraY(y) {
    cameraInteractionEnabled = false;
    var cameraAnimation = anime({
        targets: camera.position,
        y: y,
        easing: "easeInOutQuart",
        duration: 2000
    });
    cameraAnimation.complete = function () {
        cameraInteractionEnabled = true;
        camera.position.initY = y;
    };
}

/*
	============================================
	Window events
	============================================
*/

window.addEventListener("load", init);

window.addEventListener("resize", function () {
    (canvas.width = window.innerWidth), (canvas.height = window.innerHeight);

    renderer.setSize(canvas.width, canvas.height);

    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
});

window.addEventListener("mousemove", function (event) {
    if (!cameraInteractionEnabled) return;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    light_1.position.x = (mouse.x / canvas.width * 2 - 1) * lightPositionAmp;
    light_1.position.z =
        camera.position.initZ +
        (mouse.y / canvas.height * 2 - 1) * lightPositionAmp;
    camera.position.y =
        camera.position.initY + (mouse.y / canvas.height * 2 - 1) / 10;
    camera.position.x = (mouse.x / canvas.width * 2 - 1) / 10;
});

// Perfect GUI

const gui_1 = new perfectGUI({
    name: "You can name and size instances..."
});

gui_1.addImage('Background 1', require('./img/Modern_Affliction_thumb.jpg'), () => {        
        document.body.style.backgroundImage = `url(${require('./img/Modern_Affliction.jpg')})`;
        document.body.style.backgroundColor = `none`;
        document.getElementById('gui-note').textContent = "Photo by Modern Affliction on Unsplash";
    }
);
gui_1.addImage('Background 2', require('./img/Jonas_Verstuyft_thumb.jpg'), () => {
        document.body.style.backgroundImage = `url(${require('./img/Jonas_Verstuyft.jpg')})`;
        document.body.style.backgroundColor = `none`;
        document.getElementById('gui-note').textContent = "Photo by Jonas Verstuyft on Unsplash";
    }
);
gui_1.addImage('Background 3', 'https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80',
    () => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80)`;
        document.body.style.backgroundColor = `none`;
        document.getElementById('gui-note').textContent = "Photo by Cassi Josh on Unsplash";
    }
);

gui_1.addButton("Shuffle vertices", shuffleVertices);
gui_1.addButton("Shuffle lights", shuffleLight);

gui_1.addButton(
    "Reset vertices",
    () => {
        reset();
        document.body.style.backgroundImage = `none`;
        document.getElementById('gui-note').textContent = "";
    }
);

gui_1.addSlider(
    "Rim light intensity", { min: 0, max: 10, value: 2, step: .01 }, (value) => {
        rimlight.intensity = value;
    }
);

gui_1.addSwitch("Rim light switch", true, (state) => {
    rimlight.visible = state
});

gui_1.addList('Animation', ['-', 'sin(Z)', 'sin(X)', 'sin(XZ)'], function (item) {
    document.body.style.backgroundImage = `none`;
    document.getElementById('gui-note').textContent = "";

    if (item == 'sin(Z)') {
        updateFOV(25);
        moveCameraY(5);
        MathAnimations.animate(MathAnimations.sinZ);
    }

    if (item == 'sin(X)') {
        updateFOV(25);
        moveCameraY(-5);
        MathAnimations.animate(MathAnimations.sinX);
    }

    if (item == 'sin(XZ)') {
        updateFOV(45);
        moveCameraY(1);
        MathAnimations.animate(MathAnimations.sinXZ);
    }
    
});

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};

const gui_2 = new perfectGUI({
    name: "...and drag and close them!",
    width: 175,
    closed: true
});

gui_2.addButton(
    "gui_1.toggleClose()",
    function () {
        gui_1.toggleClose();
    }
);
gui_2.addButton(
    "Multiple line button text",
    () => {
        alert('Yay');
    }
);