const SCREEN_WIDTH = innerWidth;
const SCREEN_HEIGHT = innerHeight;

var DRAW_SCALE = 1100000000;

var update_iterations = 1; // Higher = smoother movement, how many subdivided update iterations
var speed_scale = 100; // Higher = faster movement, how many times to update per frame

function setup() {
  init_sun()
  init_planets();
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function mouseClicked() {
  if (planet_data.selected_planet.name != "Sun") {
    deselect_planets();
  }
  else if (planet_data.hovered_planet != null) {
    select_planet(planet_data.hovered_planet.name);
  }
}

function update() {
  for (let i = 0; i < speed_scale; i++) {
    update_positions();
  }
}

function draw() {
  update();
  center_screen();

  // Draw space background
  draw_background();

  // Draw planets
  draw_planets();
  draw_hover_details();
  display_fps();
}
