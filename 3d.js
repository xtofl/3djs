var start = function(){
	var scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 5;

	function render() {
		requestAnimationFrame( render );
		renderer.render( scene, camera );
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
	}
	render();

	var speed = null;
	speed = {x: 0.1, y: 0.1, z: 0.1,
		apply: function(position){
			var current = position;
			var next = {
				x: current.x + speed.x,
				y: current.y + speed.y,
				z: current.z + speed.z};
			position.set(next.x, next.y, next.z);
		},
		applyNegative: function(position){
			var current = position;
			var next = {
				x: current.x - speed.x,
				y: current.y - speed.y,
				z: current.z - speed.z};
			position.set(next.x, next.y, next.z);
		}
	};
	camera.left = function(){
		camera.position.x -= speed.x;
	};
	camera.right = function(){
		camera.position.x += speed.x;
	};
	camera.forward = function(){
		speed.apply(camera.position);
	};
	camera.backward = function(){
		speed.applyNegative(camera.position);
	};
}

