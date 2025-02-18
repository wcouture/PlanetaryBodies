const SCREEN_WIDTH = innerWidth;
const SCREEN_HEIGHT = innerHeight;
const G = 0.00006;

let sun = {
  x: SCREEN_WIDTH/2, y: SCREEN_HEIGHT/2,
  mass: 1000000,
  radius: 50
}

let planet = {
  x: sun.x - 200,
  y: SCREEN_HEIGHT / 2,
  velocity: {x: 0, y: 0},
  mass: 100,
  radius: 5
}

function get_distance() {
  let deltaX_sq = (sun.x - planet.x) * (sun.x - planet.x);
  let deltaY_sq = (sun.y - planet.y) * (sun.y - planet.y);
  return sqrt(deltaX_sq + deltaY_sq)
}

function calculate_acceleration() {
  let r = get_distance();

  let accel_mag = sun.mass * G / (r*r);

  let accel_vec = {x: 0, y: 0};
  let deltaX = (sun.x - planet.x);

  let angle = acos(deltaX / r);
  accel_vec.x = cos(angle) * accel_mag;
  accel_vec.y = sin(angle) * accel_mag;

  return accel_vec;
}

function update_positions() {
  let deltaTime = frameCount;

  let g_accel_vec = calculate_acceleration();
  planet.velocity.x += g_accel_vec.x;
  planet.velocity.y += g_accel_vec.y;

  planet.x += planet.velocity.x;
  planet.y += planet.velocity.y;
}

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function draw() {
  update_positions();
  background(0);
  // Draw sun
  fill(250, 252, 111)
  circle(sun.x, sun.y, sun.radius * 2)

  // Draw planet
  fill(100,0,255)
  circle(planet.x, planet.y, planet.radius * 2)
}
