const SCREEN_WIDTH = innerWidth;
const SCREEN_HEIGHT = innerHeight;

var DRAW_SCALE = 1100000000;

function setup() {
  init_sun()
  init_planets();
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function mouseClicked() {
  if (planet_data.hovered_planet != null && planet_data.select_planet != planet_data.hovered_planet) {
    select_planet(planet_data.hovered_planet.name);
  }
  else {
    deselect_planets();
  }
}

function update() {
  for (let i = 0; i < planet_data.SPEED_SCALE; i++) {
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
