var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var canvas_wrapper = document.getElementById("about__chart");
renderer.setClearColor("#e0cfc3", 1);

if (window.innerWidth < 500) renderer.setSize(window.innerWidth, window.innerHeight);
canvas_wrapper.appendChild(renderer.domElement);



var geometry = new THREE.BoxBufferGeometry(1, 5, 1);
THREE.ImageUtils.crossOrigin = '';
var texture = THREE.ImageUtils.loadTexture('images/map-puzzle.jpg')
var material = new THREE.MeshBasicMaterial({ map: texture });

var cubeA = new THREE.Mesh(geometry, material);
// cubeA.position.set(100, 100, 0);

var cubeB = new THREE.Mesh(geometry, material);
// cubeB.position.set(-100, -100, 0);

//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
var group = new THREE.Group();
group.add(cubeA);
group.add(cubeB);

scene.add(group);


var animate = function () {
    requestAnimationFrame(animate);
    group.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    group.rotation.z += 0.01;
    renderer.render(scene, camera);
};

animate();

