const SCREEN_WIDTH = innerWidth;
const SCREEN_HEIGHT = innerHeight;
const UNIVERSE_SCALE = 10;
const G = 0.000000000066743;

var DRAW_SCALE = 1100000000;


let sun = {
  position: 0,
  mass: 2000000000000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
  radius: 3
}

let planets = []

var selected_planet = sun;
var update_iterations = 10;

function setup() {
  let mercury = {
    name: "Mercury",
    position: createVector(0, 55200000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 47360 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 330100000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 2,
    color: [156, 156, 156],
    parents: [sun]
  }
  let venus = {
    name: "Venus",
    position: createVector(0, 108200000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 35020 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 4867300000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 2,
    color: [191, 179, 145],
    parents: [sun]
  }
  let earth = {
    name: "Earth",
    position: createVector(0, 149000000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 29780 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 5972200000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 5,
    color: [101, 144, 252],
    parents: [sun]
  }
  
  let moon = {
    name: "Moon",
    position: createVector(0, (149000000000 + 384400000) / UNIVERSE_SCALE, 0),
    velocity: createVector( (29780 + 1082) / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 73646000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 2,
    color: [100, 100, 100],
    parents: [earth, sun]
  }
  let mars = {
    name: "Mars",
    position: createVector(0, 225000000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 24080 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 639000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 2,
    color: [161, 91, 67],
    parents: [sun]
  }
  let jupiter = {
    name: "Jupiter",
    position: createVector(0, 775000000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 13060 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 1898130000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 2,
    color: [242, 189, 148],
    parents: [sun]
  }
  let saturn = {
    name: "Saturn",
    position: createVector(0, 1420000000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 9670 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 568320000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 2,
    color: [255, 228, 207],
    parents: [sun]
  }
  let uranus = {
    name: "Uranus",
    position: createVector(0, 2882000000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 6790 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 86811000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 2,
    color: [0,0,220],
    parents: [sun]
  }
  let neptune = {
    name: "Neptune",
    position: createVector(0, 4510000000000 / UNIVERSE_SCALE, 0),
    velocity: createVector( 5450 / (UNIVERSE_SCALE / 3), 0, 0),
    accel: createVector(0,0,0),
    mass: 102409000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
    radius: 2,
    color: [50,0,255],
    parents: [sun]
  }
  planets.push(moon)
  planets.push(mercury)
  planets.push(venus)
  planets.push(earth)
  planets.push(mars)
  planets.push(jupiter)
  planets.push(saturn)
  planets.push(uranus)
  planets.push(neptune)
  

  sun.position = createVector(0,0,0)

  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function calculate_acceleration(planet, parent_body) {
  let r = planet.position.dist(parent_body.position)

  let accel_mag = parent_body.mass * G / (r*r);

  let accel_vec = createVector(0,0);
  accel_vec.x = parent_body.position.x - planet.position.x
  accel_vec.y = parent_body.position.y - planet.position.y
  accel_vec.normalize()

  accel_vec.setMag(accel_mag)

  return accel_vec;
}

function update_positions() {
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i]
    planet.accel.x = 0
    planet.accel.y = 0

    for (let j = 0; j < planet.parents.length; j++) {
      let g_accel_vec = calculate_acceleration(planet,  planet.parents[j]);
      planet.velocity.x += g_accel_vec.x * deltaTime;
      planet.velocity.y += g_accel_vec.y * deltaTime;
    
      planet.accel.x += g_accel_vec.x;
      planet.accel.y += g_accel_vec.y;
    }


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

function keyPressed() {
  DRAW_SCALE = 11000000;
  update_iterations = 5;
  if (key === 'r') {
    selected_planet = planets[1]
  }
  else if (key == 'v') {
    selected_planet = planets[2]
  }
  else if (key == 'e') {
    selected_planet = planets[3]
    DRAW_SCALE = 1100000
  }
  else if (key == 'l') {
    selected_planet = planets[0]
    DRAW_SCALE = 1100000
  }
  else if (key == 'm') {
    selected_planet = planets[4]
  }
  else if (key == 'j') {
    selected_planet = planets[5]
  }
  else if (key == 's') {
    selected_planet = planets[6]
  }
  else if (key == 'u') {
    selected_planet = planets[7]
  }
  else if (key == 'n') {
    selected_planet = planets[8]  
  }
  else {
    selected_planet = sun;
    update_iterations = 100;
    DRAW_SCALE = 1100000000;
  }
}

function draw() {
  translate(SCREEN_WIDTH / 2 - selected_planet.position.x / DRAW_SCALE, SCREEN_HEIGHT / 2 - selected_planet.position.y / DRAW_SCALE);

  for (let i = 0; i < update_iterations; i++) {
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

    // if (planet.name == "Moon") {
    //   push();
    //   stroke(255, 0, 0)
    //   strokeWeight(1)
    //   let velocity_vec_scale = .01;
    //   let accel_vec_scale = 100000;

    //   line(planets[i].position.x / DRAW_SCALE, planets[i].position.y / DRAW_SCALE, planets[i].position.x / DRAW_SCALE + planets[i].velocity.x * velocity_vec_scale, planets[i].position.y / DRAW_SCALE + planets[i].velocity.y * velocity_vec_scale)
      
    //   stroke(0, 255, 0)
    //   line(planets[i].position.x / DRAW_SCALE, planets[i].position.y / DRAW_SCALE, planets[i].position.x / DRAW_SCALE + planets[i].accel.x * accel_vec_scale, planets[i].position.y / DRAW_SCALE + planets[i].accel.y * accel_vec_scale)

    //   pop();
    // }
  }
}
