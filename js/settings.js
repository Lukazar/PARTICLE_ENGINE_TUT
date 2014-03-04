(function() {
  
  var canvas = Engine.canvas;
  
  this.settings = {

    'abstract': {

      'emission_rate': 500,
      'min_life': 1,
      'life_range': 1,
      'min_angle': 0,
      'angle_range': 360,
      'min_speed': 10,
      'speed_range': 100,
      'min_size': 2,
      'size_range': 4,
      'start_colors': [[130, 196, 245, 0.8], [69, 152, 212, 0.8],
          [179, 166, 250, 0.8]],
      'end_colors': [[130, 196, 245, 0], [155, 119, 253, 0],
          [244, 121, 201, 0]],
      'gravity': {
        x: 0,
        y: 0
      },
      'min_position': {
        x: -30,
        y: -30
      },
      'position_range': {
        x: 60,
        y: 60
      }
    },

    'blood': {

      'emission_rate': 1000,
      'min_life': 1,
      'life_range': 1,
      'min_angle': 85,
      'angle_range': 10,
      'min_speed': 10,
      'speed_range': 100,
      'min_size': 2,
      'size_range': 2,
      'start_colors': [[253, 69, 69, 0.8], [201, 10, 10, 0.8],
          [168, 57, 57, 0.8]],
      'end_colors': [[253, 69, 69, 0.1], [201, 10, 10, 0.1],
          [168, 57, 57, 0.1]],
      'gravity': {
        x: 0,
        y: 100
      }
    },

    'fire': {

      'emission_rate': 1000,
      'min_life': 1,
      'life_range': 0.5,
      'min_angle': 80,
      'angle_range': 20,
      'min_speed': 10,
      'speed_range': 140,
      'min_size': 2,
      'size_range': 10,
      'start_colors': [[239, 127, 67, 0.7], [253, 69, 69, 0.8],
          [239, 100, 67, 0.7]],
      'end_colors': [[90, 90, 90, 0], [110, 110, 110, 0], [130, 130, 130, 0]],
      'gravity': {
        x: 0,
        y: -100
      },
      'min_position': {
        x: -20,
        y: -20
      },
      'position_range': {
        x: 40,
        y: 40
      }
    },

    'rain': {

      'emission_rate': 50,
      'min_life': 2,
      'life_range': 0.3,
      'min_angle': 260,
      'angle_range': 20,
      'min_speed': 30,
      'speed_range': 30,
      'min_size': 1,
      'size_range': 2,
      'start_colors': [[130, 196, 245, 0.8], [69, 152, 212, 0.8]],
      'end_colors': [[130, 196, 245, 0.3], [69, 152, 212, 0.3]],
      'gravity': {
        x: 20,
        y: 100
      },
      'min_position': {
        x: 0,
        y: 0
      },
      'position_range': {
        x: canvas.width - 200,
        y: 0
      }
    }
  };
}).call(Engine);