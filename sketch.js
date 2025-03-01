const SCREEN_WIDTH = innerWidth;
const SCREEN_HEIGHT = innerHeight;

let APP_FONT;

var DRAW_SCALE = 1100000000;

function preload() {
  APP_FONT = loadFont('/assets/Mulish-Black.ttf')
}

function setup() {
  strokeWeight(5)
  textFont(APP_FONT)

  init_sun()
  init_planets();
  init_body_facts()

  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  deselect_planets()
  noSmooth()
}

function mouseClicked() {
  if (UTIL.processing)
    return

  if (planet_data.hovered_planet != null) {
    select_planet(planet_data.hovered_planet.name);
  }
  else {
    deselect_planets();
  }
}

function keyPressed() {
  if (key === 'w') {
    planet_data.MANUAL_SCALE_OFFSET /= 2
    console.log("Zoom in: ", planet_data.MANUAL_SCALE_OFFSET)
  }
  else if (key === 's') {
    planet_data.MANUAL_SCALE_OFFSET *= 2
    console.log("Zoom out: ", planet_data.MANUAL_SCALE_OFFSET)
  }
  planet_data.MANUAL_SCALE_OFFSET = constrain(planet_data.MANUAL_SCALE_OFFSET, 0.0625, 4)
}

function update() {
  for (let i = 0; i < planet_data.SPEED_SCALE; i++) {
    update_positions();
    process_planet_select();
  }
}

function draw() {
  update();
  center_screen();

  // Draw space background
  draw_background()
  // Draw planets
  draw_planets();
  draw_hover_details();
  draw_focus_details();
  // display_fps()
}
