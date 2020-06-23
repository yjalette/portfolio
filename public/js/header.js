var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var canvas_wrapper = document.getElementById("header__canvas-wrapper");
renderer.setClearColor("#e0cfc3", 1);
renderer.setSize(window.innerWidth, window.innerHeight);
// if (window.innerWidth < 500) renderer.setSize(window.innerWidth, window.innerHeight);
canvas_wrapper.appendChild(renderer.domElement)
var geometry = new THREE.SphereGeometry(1, 30, 30);
THREE.ImageUtils.crossOrigin = '';
var texture = THREE.ImageUtils.loadTexture('images/map.jpg')
var material = new THREE.MeshBasicMaterial({ map: texture });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 3;

var animate = function () {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;
    renderer.render(scene, camera);
};

animate();
