var scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// var camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
// camera.rotation.y = 45/180*Math.PI;
// camera.position.x = 800;
// camera.position.y = 100;
// camera.position.z = 1000;

var renderer = new THREE.WebGLRenderer();
//var finalCameraPosition = 10;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.id = "3d-dom";
renderer.domElement.classList.add("off");

document.getElementById("shoe-div").appendChild(renderer.domElement);

window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});




//adjust camera-zoom
if (window.innerWidth <= 767) {
  var Start = function () {
    camera.position.set(0, 0, 30);

      scene.background = new THREE.Color(0x88888);
  };

  // alert("This is a mobile device.");
} else {
  var Start = function () {
    camera.position.set(0, 0, 15);
   
  };

  // alert("This is a tablet or desktop.");
}

// const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
// const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// const cubeMesh = new THREE.Mesh( cubeGeometry, cubeMaterial );
// cubeMesh.position.set(0,0,0)
// scene.add( cubeMesh );

var ambiantLight = new THREE.AmbientLight(0xffffff, 1);

scene.add(ambiantLight);
//scene.background = new THREE.Color(0xffffff);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls = new THREE.OrbitControls(camera);
//controls.Update;



let frame = 0;
var Update = function () {
  if (frame == 0) {
    Start();
    frame += 1;
  }
};

var Render = function () {
  renderer.render(scene, camera);
};

var GameLoop = function () {
  requestAnimationFrame(GameLoop);

  Update();
  Render();
};

var loader = new THREE.GLTFLoader();

//loader.load("model/ascis-nimbus-20/scene.gltf", function (gltf) {
//loader.load("model/container/scene.gltf", function (gltf) {
  loader.load(
          "model/chair/chair1.glb", 
          function (gltf) {
              //gltf.scene.position.set(5, -15, 7);
              var chair = gltf.scene.children[0];
              chair.scale.set(15,15,15)
              //gltf.scene.position.set(5, 20,7);
              gltf.scene.position.set(4, -5,7);
              scene.add(gltf.scene);
              GameLoop();
            },
            function (xhr){
              console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            function ( error ){
              console.log('Error happened');
            }

            //GameLoop();
           );

//  var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});

//  var cube = new THREE.Mesh(geometry, material);

//called once at the beginning of the game



GameLoop();


// //setup scene, renderer and camera
// var scene = new THREE.Scene()
// var camera = new THREE.PerspectiveCamera
// (75, window.innerWidth/window.innerHeight, 0.1, 1000)
// var renderer = new THREE.WebGLRenderer()
// var finalCameraPosition = 10

// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.domElement.id = '3d-dom'
// renderer.domElement.classList.add('off')

// document.getElementById('shoe-div').appendChild(renderer.domElement)

// window.addEventListener('resize', function(){
//     var width = window.innerWidth
//     var height = window.innerHeight
//     renderer.setSize(width, height)
//     camera.aspect = width/height
//     camera.updateProjectionMatrix();
// })


// scene.background = new THREE.Color(0x000000)

// controls = new THREE.OrbitControls(camera, renderer.domElement)

// //adding some nice and beautiful geometry to look at 
// //material
// var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
// //geometry
// var geometry = new THREE.BoxGeometry(1,1,1)
// //mesh/object
// var cube = new THREE.Mesh(geometry, material)

// scene.add(cube)

// //adjust camera-zoom
// if (window.innerWidth <= 767) {
//     var Start = function () {
//         camera.position.set(0, 0, 30);
//     };
// } else {
//     var Start = function () {
//         camera.position.set(0, 0, 15);
//     };
// }

// let frame = 0

// var Update = function(){
//     if(frame == 0)
//     {
//         Start()
//     }

//     frame += 1
// }

// var Render = function (){
//     renderer.render(scene, camera)
// }

// var GameLoop = function(){
//     requestAnimationFrame(GameLoop)

//     Update()
//     Render()
// }

// GameLoop()


