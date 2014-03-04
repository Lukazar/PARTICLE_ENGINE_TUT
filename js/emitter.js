(function() {

  var that = this;

  var Emitter = this.Emitter = function(x, y, settings) {
    this.pos = {
      x: x,
      y: y
    };

    this.settings = settings;
    this.emission_delay = 1000 / settings.emission_rate;
    this.last_update = 0;
    this.last_emission = 0;
    this.particles = [];
    this.position_vary = settings.position_range || false;
    this.min_position = settings.min_position || {
      x: 0,
      y: 0
    };
  };

  $.extend(Emitter.prototype,
          {
            update: function() {
              if (!this.last_update) {
                this.last_update = Date.now();
                return;
              }

              var time = Date.now();
              var dt = time - this.last_update;

              this.last_emission += dt;
              this.last_update = time;

              if (this.last_emission > this.emission_delay) {
                var i = Math.floor(this.last_emission / this.emission_delay);

                this.last_emission -= i * this.emission_delay;

                while (i--) {

                  var start_color = this.settings.start_colors[Math
                          .floor(this.settings.start_colors.length
                                  * Math.random())];
                  var end_color = this.settings.end_colors[Math
                          .floor(this.settings.end_colors.length
                                  * Math.random())];

                  var life = this.settings.min_life + Math.random()
                          * this.settings.life_range;

                  var color_step = [(end_color[0] - start_color[0]) / life,
                      (end_color[1] - start_color[1]) / life,
                      (end_color[2] - start_color[2]) / life,
                      (end_color[3] - start_color[3]) / life];

                  this.particles.push(new Engine.Particle(this.min_position.x
                          + (this.position_vary ? Math.random()
                                  * this.position_vary.x : 0),
                          this.min_position.y
                                  + (this.position_vary ? Math.random()
                                          * this.position_vary.y : 0),
                          this.settings.min_angle + Math.random()
                                  * this.settings.angle_range,
                          this.settings.min_speed + Math.random()
                                  * this.settings.speed_range,
                          this.settings.min_life + Math.random()
                                  * this.settings.life_range,
                          this.settings.min_size + Math.random()
                                  * this.settings.size_range, start_color
                                  .slice(), color_step));
                }
              }

              dt /= 1000;

              var i = this.particles.length;
              var ctx = Engine.ctx;

              while (i--) {
                var particle = this.particles[i];

                if (particle.dead) {
                  this.particles.slice(i, 1);
                  continue;
                }

                particle.lived += dt;

                if (particle.lived >= particle.life) {
                  particle.dead = true;
                  continue;
                }

                particle.vel.x += this.settings.gravity.x * dt;
                particle.vel.y += this.settings.gravity.y * dt;

                particle.pos.x += particle.vel.x * dt;
                particle.pos.y += particle.vel.y * dt;

                particle.color[0] += particle.color_step[0] * dt;
                particle.color[1] += particle.color_step[1] * dt;
                particle.color[2] += particle.color_step[2] * dt;
                particle.color[3] += particle.color_step[3] * dt;

                ctx.fillStyle = 'rgba(' + Math.round(particle.color[0]) + ','
                        + Math.round(particle.color[1]) + ','
                        + Math.round(particle.color[2]) + ','
                        + particle.color[3] + ')';

                var x = this.pos.x + particle.pos.x;
                var y = this.pos.y + particle.pos.y

                ctx.beginPath();
                ctx.arc(x, y, particle.size, 0, Math.PI * 2);
                ctx.fill();
              }

            }
          });
}).call(Engine);