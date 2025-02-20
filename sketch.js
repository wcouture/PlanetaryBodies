const SCREEN_WIDTH = innerWidth;
const SCREEN_HEIGHT = innerHeight;
const UNIVERSE_SCALE = 10;
const G = 0.000000000066743;


const DRAW_SCALE = 200000000;

let sun = {
  position: 0,
  mass: 2000000000000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
  radius: 10
}

let planets = []

function setup() {
  let mercury = {
    position: createVector(0, 55200000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 47360 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 330100000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [191, 179, 145]
  }
  let venus = {
    position: createVector(0, 108200000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 35020 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 4867300000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [191, 179, 145]
  }
  let earth = {
    position: createVector(0, 149000000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 29780 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 5972200000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [0,0,220]
  }
  let mars = {
    position: createVector(0, 225000000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 24080 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 639000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [161, 91, 67]
  }
  let jupiter = {
    position: createVector(0, 108200000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 35020 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 4867300000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [191, 179, 145]
  }
  let saturn = {
    position: createVector(0, 108200000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 35020 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 4867300000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [191, 179, 145]
  }
  let uranus = {
    position: createVector(0, 108200000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 35020 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 4867300000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [191, 179, 145]
  }
  let neptune = {
    position: createVector(0, 108200000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 35020 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 4867300000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [191, 179, 145]
  }
  planets.push(mercury)
  planets.push(venus)
  planets.push(earth)
  planets.push(mars)
  

  sun.position = createVector(0,0,0)

  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function calculate_acceleration(planet) {
  let r = planet.position.dist(sun.position)

  let accel_mag = sun.mass * G / (r*r);

  let accel_vec = createVector(0,0);
  accel_vec.x = sun.position.x - planet.position.x
  accel_vec.y = sun.position.y - planet.position.y
  accel_vec.normalize()

  accel_vec.setMag(accel_mag)

  return accel_vec;
}

function update_positions() {
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i]

    let g_accel_vec = calculate_acceleration(planet);
    planet.velocity.x += g_accel_vec.x * deltaTime;
    planet.velocity.y += g_accel_vec.y * deltaTime;
  
    planet.accel.x = g_accel_vec.x;
    planet.accel.y = g_accel_vec.y;
  
    planet.position.x += planet.velocity.x * deltaTime;
    planet.position.y += planet.velocity.y * deltaTime;
  }
}

function check_collision() {
  let planet = planets[0]
  let distance = planet.position.dist(sun.position);
  if (distance <= sun.radius + planet.radius) {
    planet.velocity = {x: 0, y: 0}
  }
}

function draw() {
  translate(SCREEN_WIDTH/2,SCREEN_HEIGHT/2);
  
  let iterations = 100

  for (let i = 0; i < iterations; i++) {
    check_collision();
    update_positions();
  }
  
  background(0);
  // Draw sun
  fill(250, 252, 111)
  circle(sun.position.x, sun.position.y, sun.radius * 2)

  // Draw planets
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i]
    fill(planet.color[0], planet.color[1], planet.color[2])
    circle(planet.position.x / DRAW_SCALE, planet.position.y / DRAW_SCALE, planet.radius * 2)
  }

  // let arrow_scale = 1000000
  // let accel_arrow_scale = 1000000
  // let velocity = planet.velocity;
  // let accel = planet.accel;


  // push()
  // stroke(255, 0, 0);
  // strokeWeight(2);
  // // Draw velocity
  // line(planet.position.x / DRAW_SCALE, planet.position.y / DRAW_SCALE, planet.position.x / DRAW_SCALE + velocity.x / DRAW_SCALE * arrow_scale, planet.position.y / DRAW_SCALE + velocity.y / DRAW_SCALE * arrow_scale);

  // // Draw accel line
  // stroke(0, 255, 0)
  // line(planet.position.x / DRAW_SCALE, planet.position.y / DRAW_SCALE, planet.position.x / DRAW_SCALE + accel.x * accel_arrow_scale / DRAW_SCALE, planet.position.y / DRAW_SCALE + accel.y * accel_arrow_scale / DRAW_SCALE);
  // pop()
}
