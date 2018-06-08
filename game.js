var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

console.log(canvas);

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x,
    mouse.y = event.y,

    circle();


    console.log(mouse);
})
/*if(mouse.x === event.x && mouse.y === event.y) {
    c.beginPath();
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "rgba(250, 125, 0, 1)";
    c.fillStyle = "rgba(250, 125, 0, 1)";
    c.stroke();
    c.fill();


}*/
function getDistance(x1, x2, y1, y2){
    let xDistance = Math.hypot(x2 - x1);
    let yDistance = Math.hypot(y2 - y1);

    return Math.hypot(xDistance, yDistance);

}

var v = 500;
var w = 800;
var x = 1065;
var y = 1350;
var z = 1650;

function rect() {
    c.fillRect(v, 482, 20, 500);
    c.fillRect(w, 0, 20, 700);
    c.fillRect(x, 682, 20, 300);
    c.fillRect(y, 0, 20, 700);
    c.fillRect(z, 482, 20, 500);

    v -= 1;
    w -= 1;
    x -= 1;
    y -= 1;
    z -= 1;

}


function circle() {
    c.beginPath();
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "rgba(250, 125, 0, 1)";
    c.fillStyle = "rgba(250, 125, 0, 1)";
    c.stroke();
    c.fill();

}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circle();

    rect();

    
    

    console.log("hiii");
    console.log(getDistance(circle.x, circle.y, rect.x, rect.y));
}
animate();

/*;(function () {
    function animate() {
      window.requestAnimationFrame( animate );
      
      // Your main loop contents.
      
    }
    
    animate(); // Start the cycle
  })();*/


    