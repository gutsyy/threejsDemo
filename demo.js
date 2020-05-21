//this is a demo about some threejs function 
//authored by gy


//获得canvas来初始化渲染器
var renderer = new THREE.WebGLRenderer({
    alpha: true,     //画布是否包含alpha（透明度）缓冲区，默认false; 若不设置，将使renderer.setClearColor属性无效
})
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xcfd8dc,0.3);
var canvas = renderer.domElement;
renderer.domElement.id = "canvas";
document.getElementById("createCanvas").appendChild(renderer.domElement);

//创建场景
var scene = new THREE.Scene();

//创建透视摄像机
var PersCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    //设置摄像机的位置
    PersCamera.position.set(0,0,200);
    PersCamera.up.set(0,0,1);

//创建正交摄像机
var OrthoCamera = new THREE.OrthographicCamera(window.innerWidth / -4, window.innerWidth / 4, window.innerHeight / 4, window.innerHeight / -2, 1, 1000);
    OrthoCamera.position.set(0,0,200);
    OrthoCamera.up.set(0,0,1);

//所选择的摄像机
var camera = null;
camera = PersCamera;

//加入光照
    //平行光
    var directionalLight = new THREE.DirectionalLight( 0xffffff , 0.5 );
    directionalLight.position.set( 1000,1000,1000);
    scene.add(directionalLight);
    //环境光
    var light = new THREE.AmbientLight( 0x404040 );
    scene.add(light);


//创建一个控制器
var controls = new THREE.OrbitControls(camera, renderer.domElement);


//创建一个正方体demo
var geometry = new THREE.BoxBufferGeometry(100, 100, 100);
var material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true,
    de
 });
var material1 = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
})
var cube = new THREE.Mesh( geometry, material );
var cube1 = new THREE.Mesh( geometry, material1);
scene.add( cube1 );
scene.add( cube );


//递归渲染
function render(){
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

//调用render函数来用于循环渲染
render();


