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
  console.log("Curr Offset: ", planet_data.MANUAL_SCALE_OFFSET)

  if (keyCode === UP_ARROW || key == 'w') {
    if (planet_data.MANUAL_SCALE_OFFSET <= 0.0625) {
      return
    }
    planet_data.MANUAL_SCALE_OFFSET /= 2
  }
  else if (keyCode === DOWN_ARROW || key == 's') {
    if (planet_data.MANUAL_SCALE_OFFSET >= 4) {
      return
    }
    planet_data.MANUAL_SCALE_OFFSET *= 2
  }

  console.log("Now Offset: ", planet_data.MANUAL_SCALE_OFFSET)
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
  draw_zoom_info_label();
  // display_fps()
}
