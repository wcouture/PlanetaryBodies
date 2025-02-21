const HOVER_CUTOFF_DISTANCE = 20

function center_screen() {
    translate(SCREEN_WIDTH / 2 - planet_data.selected_planet.position.x / DRAW_SCALE, SCREEN_HEIGHT / 2 - planet_data.selected_planet.position.y / DRAW_SCALE);
}

function display_fps() {
    fill(255)
  
    let details_padding = createVector(10, 20, 0)
    let fps = 1000 / deltaTime;
  
    text("FPS: " + fps, planet_data.selected_planet.position.x / DRAW_SCALE - SCREEN_WIDTH / 2 + details_padding.x, planet_data.selected_planet.position.y / DRAW_SCALE - SCREEN_HEIGHT / 2 + details_padding.y)
}

function draw_background() {
    background(0)
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
    screen_pos.x = planet.position.x / DRAW_SCALE
    screen_pos.y = planet.position.y / DRAW_SCALE
    
    let text_pos = createVector(-SCREEN_WIDTH/2, -SCREEN_HEIGHT/2)
    text_pos.x += 30
    text_pos.y += 50

    textSize(16)
    text(planet.name, text_pos.x, text_pos.y)

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
    
    planet_data.planets.forEach(planet => {
        let planet_pos = createVector(planet.position.x / DRAW_SCALE, planet.position.y / DRAW_SCALE)

        if (mouse_pos.dist(planet_pos) < HOVER_CUTOFF_DISTANCE) {
            hovered_planet = planet
        }
    });

    return hovered_planet;
}

// Focuses camera on chosen planet
function select_planet(name) {
    let planets = planet_data.planets;
    planets.forEach(element => {
        if (element.name == name) {
            planet_data.selected_planet = element
            return
        }
    });
}

// Resets selected planet to the sun
function deselect_planets() {
    planet_data.selected_planet = sun;
}