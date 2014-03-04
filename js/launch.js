(function() {

  var canvas = Engine.canvas;
  var ctx = Engine.ctx;
  var settings = Engine.settings;

  var emitter = new Engine.Emitter(canvas.width / 2, canvas.height / 2,
          settings.abstract);

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    emitter.update();
    requestAnimFrame(loop);
  }

  function rain() {
    emitter = new Engine.Emitter(100, 60, settings.rain);
  }

  function abstract() {
    emitter = new Engine.Emitter(canvas.width / 2, canvas.height / 2, settings.abstract);
  }

  function blood() {
    emitter = new Engine.Emitter(canvas.width / 2, canvas.height / 2, settings.blood);
  }

  function fire() {
    emitter = new Engine.Emitter(canvas.width / 2, canvas.height / 2, settings.fire);
  }

  loop();
  
  $('button').click(function(e){
    var type = $(this).attr('id');
    
    switch(type){
      case 'rain':
        rain();
        break;
      case 'abstract':
        abstract();
        break;
      case 'blood':
        blood();
        break;
      case 'fire':
        fire();
        break;
      default:
        abstract();
        break;
    }
    
  });
  

})();