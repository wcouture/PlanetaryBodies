const HOVER_CUTOFF_DISTANCE = 20
var STAR_DRAW_SCALE = 1

function center_screen() {
    let centerX = (SCREEN_WIDTH / 2) - (planet_data.selected_planet.position.x / planet_data.DRAW_SCALE)
    let centerY = (SCREEN_HEIGHT / 2) - (planet_data.selected_planet.position.y / planet_data.DRAW_SCALE)
    translate(centerX, centerY);
}

function display_fps() {
    fill(255)
  
    let fps_offset = createVector(10, 20, 0)
    let fps = round(1000 / deltaTime, 2);

    let pos_x = fps_offset.x - SCREEN_WIDTH/2 + planet_data.selected_planet.position.x / planet_data.DRAW_SCALE;
    let pos_y = fps_offset.y - SCREEN_HEIGHT/2 + planet_data.selected_planet.position.y / planet_data.DRAW_SCALE;
  
    text("FPS: " + fps, pos_x, pos_y)
}

function draw_background() {
    background(0)
    randomSeed(planet_data.STAR_SEED)
    for (let i = 0; i < planet_data.NUM_STARS; i++) {
        let position = createVector(random(-3*SCREEN_WIDTH/4, 3*SCREEN_WIDTH/4), random(-SCREEN_HEIGHT/2, SCREEN_HEIGHT/2))
        let centerX = (planet_data.selected_planet.position.x / planet_data.DRAW_SCALE)
        let centerY = (planet_data.selected_planet.position.y / planet_data.DRAW_SCALE)
        position.x += centerX - constrain(0.1 * centerX, -50, 50)
        position.y += centerY - constrain(0.1 * centerY, -50, 50)

        push()
        fill(255, 255, 255, 100)
        circle(position.x, position.y, 2)
        pop()
    }
}

// Draws vector lines for velocity and acceleration
function draw_vectors(planet) {
    push();
    stroke(255, 0, 0)
    strokeWeight(1)
    let velocity_vec_scale = .01;
    let accel_vec_scale = 100000;
  
    line(planet.position.x / DRAW_SCALE, planet.position.y / DRAW_SCALE, planet.position.x / DRAW_SCALE + planet.velocity.x * velocity_vec_scale, planet.position.y / DRAW_SCALE + planet.velocity.y * velocity_vec_scale)
        
    stroke(0, 255, 0)
    line(planet.position.x / DRAW_SCALE, planet.position.y / DRAW_SCALE, planet.position.x / DRAW_SCALE + planet.accel.x * accel_vec_scale, planet.position.y / DRAW_SCALE + planet.accel.y * accel_vec_scale)
  
    pop();
}

// Draws selection circle around planet and displays name
function display_planet_details(planet) {
    push()
    fill(255)
    let screen_pos = createVector(0,0,0)
    screen_pos.x = planet.position.x / planet_data.DRAW_SCALE
    screen_pos.y = planet.position.y / planet_data.DRAW_SCALE
    
    let text_offset = createVector(10, -5, 0)

    textSize(12)
    text(planet.name, screen_pos.x + text_offset.x, screen_pos.y + text_offset.y)

    noFill()
    strokeWeight(1)
    stroke(100)
    circle(screen_pos.x, screen_pos.y, 10)

    pop()
}

// If hovering over a planet, display planet details
function draw_hover_details() {
    if (planet_data.selected_planet.name != "Sun") {
        return;
    }

    planet_data.hovered_planet = get_hovered_planet();
    // console.log(hovered_planet)
    if (planet_data.hovered_planet == null) {
        return;
    }

    display_planet_details(planet_data.hovered_planet);
}

// Retrieves planet within mouse hover cutoff distance, else null
function get_hovered_planet() {
    var hovered_planet = null
    let mouse_pos = createVector(mouseX - SCREEN_WIDTH / 2, mouseY - SCREEN_HEIGHT / 2, 0)
    mouse_pos.x += planet_data.selected_planet.position.x / planet_data.DRAW_SCALE
    mouse_pos.y += planet_data.selected_planet.position.y / planet_data.DRAW_SCALE
    
    planet_data.planets.forEach(planet => {
        let planet_pos = createVector(planet.position.x / planet_data.DRAW_SCALE, planet.position.y / planet_data.DRAW_SCALE)

        if (mouse_pos.dist(planet_pos) < HOVER_CUTOFF_DISTANCE) {
            hovered_planet = planet
        }
    });

    return hovered_planet;
}

// Focuses camera on chosen planet
function select_planet(name) {
    let planets = planet_data.planets;
    planets.forEach(planet => {
        if (planet.name == name) {
            planet_data.selected_planet = planet
            planet_data.DRAW_SCALE /= 1000
            planet.radius = 5
            return
        }
    });
}

// Resets selected planet to the sun
function deselect_planets() {
    planet_data.selected_planet.radius = 2
    planet_data.selected_planet = planet_data.sun;
    planet_data.DRAW_SCALE *= 100
}