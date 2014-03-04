(function() {

  var Particle = this.Particle = function(x, y, angle, speed, life, size, start_color, color_step) {
    this.pos = {
      x: x || 0,
      y: y || 0
    };

    this.speed = speed || 5;
    this.life = life || 1;
    this.size = size || 2;
    this.lived = 0;
    this.color = start_color;
    this.color_step = color_step;

    var radians = angle * Math.PI / 180;

    this.vel = {
      x: Math.cos(radians) * speed,
      y: -Math.sin(radians) * speed
    };
  }; 
}).call(Engine);