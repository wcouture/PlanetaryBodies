const UNIVERSE_SCALE = 10;
const G = 0.000000000066743;
var update_counter = 0

const PATH_SETTINGS = {
  DOT_FREQUENCY: 5000,
  DOT_LENGTH: 100
}

// Calculates accelerations, applies acceleration to velocity, applies velocity to position
function update_positions() {
  let planets = planet_data.planets;

  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i]

    if (update_counter >= PATH_SETTINGS.DOT_FREQUENCY && planet_data.selected_planet.children.includes(planet)){
      let dot_pos = {x: planet.position.x, y: planet.position.y}

      if (planet.parents[0] != planet_data.sun) {
        dot_pos.x = planet.position.x - planet.parents[0].position.x
        dot_pos.y = planet.position.y - planet.parents[0].position.y
      }

      planet.path_dots.unshift(dot_pos)
      
      if (planet.path_dots.length > PATH_SETTINGS.DOT_LENGTH * 2 ** (planet.orbit_radius / (10**10))) {
        planet.path_dots.pop()
      }
    }
    


    planet.accel.x = 0
    planet.accel.y = 0

    let total_deltaX = 0
    let total_deltaY = 0


    let dT = deltaTime / planet_data.UPDATE_ITERATIONS; // Calculates fractional time for subdivided updates
    for (let u = 0; u < planet_data.UPDATE_ITERATIONS; u++) {

      // Accumulates accelerations onto velocity for all parent bodies
      for (let j = 0; j < planet.parents.length; j++) {
        let g_accel_vec = calculate_acceleration(planet,  planet.parents[j]);
        planet.velocity.x += g_accel_vec.x * dT;
        planet.velocity.y += g_accel_vec.y * dT;
        
        planet.accel.x += g_accel_vec.x;
        planet.accel.y += g_accel_vec.y;
      }
    
      // Applies accumulated new velocity to position for calculated time interval
      total_deltaX += planet.velocity.x * dT;
      total_deltaY += planet.velocity.y * dT;
    }
    planet.position.x += total_deltaX
    planet.position.y += total_deltaY

    let rate = TWO_PI / planet.rotate_time
    planet.rotation -= rate * deltaTime
    planet.rotation %= TWO_PI
  }
  update_counter += 1
  if (update_counter > PATH_SETTINGS.DOT_FREQUENCY) {
    update_counter = 0
  }
}

// Calculates gravitational acceleration vector from planet to parent_body
function calculate_acceleration(planet, parent_body) {
    let r = planet.position.dist(parent_body.position) // Distance between bodies

  
    let accel_mag = parent_body.mass * G / (r*r); // Newton's equation for acceleration due to gravity
  
    // Computes a vector pointing toward parent_body
    let accel_vec = createVector(0,0);
    accel_vec.x = parent_body.position.x - planet.position.x
    accel_vec.y = parent_body.position.y - planet.position.y
    accel_vec.normalize()
  
    // Sets vector magnitude to calculated acceleration due to gravity
    accel_vec.setMag(accel_mag)
  
    return accel_vec;
}