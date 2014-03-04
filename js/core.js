var Engine = Engine || {};

//shim
window.requestAnimFrame = window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame || function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };

Engine.canvas = document.getElementById('c');
Engine.ctx = Engine.canvas.getContext('2d');

Engine.canvas.width = window.innerWidth;
Engine.canvas.height = window.innerHeight;