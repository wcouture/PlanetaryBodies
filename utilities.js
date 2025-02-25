const HOVER_CUTOFF_DISTANCE = 20

const ZOOM_TIME = 1000
const UTIL = {
    previous_draw_scale:1100000000,
    next_draw_scale: 1100000000,
    transition_time: 1000,
    previous_radius: 2,
    next_radius: 2,
}

var STAR_DRAW_SCALE = 1

function init_draw_scales() {
    UTIL.previous_draw_scale = 1100000000;
    UTIL.next_draw_scale = 1100000000;
    UTIL.transition_time = ZOOM_TIME;
    prev_planet = planet_data.selected_planet;
}

function center_screen() {
    // let planet_offset = {}
    // if (UTIL.prev_planet == null)
    // {
    //     UTIL.prev_planet = planet_data.selected_planet
    // }

    
    // planet_offset.x = lerp(UTIL.prev_planet.position.x, planet_data.selected_planet.position.x, UTIL.transition_time / ZOOM_TIME) / planet_data.DRAW_SCALE
    // planet_offset.y = lerp(UTIL.prev_planet.position.y, planet_data.selected_planet.position.y, UTIL.transition_time / ZOOM_TIME) / planet_data.DRAW_SCALE
    // if (UTIL.transition_time >= ZOOM_TIME) {
    //     planet_offset.x = planet_data.selected_planet.position.x / planet_data.DRAW_SCALE;
    //     planet_offset.y = planet_data.selected_planet.position.y / planet_data.DRAW_SCALE;
    // }
    //console.log("X: ", planet_offset.x);
    //console.log("Y: ", planet_offset.y);


    let centerX = (SCREEN_WIDTH / 2)
    let centerY = (SCREEN_HEIGHT / 2)
    translate(centerX, centerY);
}

function display_fps() {
    fill(255)
  
    let fps_offset = createVector(10, 20, 0)
    let fps = round(1000 / deltaTime, 2);

    let pos_x = fps_offset.x - SCREEN_WIDTH/2
    let pos_y = fps_offset.y - SCREEN_HEIGHT/2
  
    text("FPS: " + fps, pos_x, pos_y)
}

function draw_background() {
    background(0)
    randomSeed(planet_data.STAR_SEED)
    for (let i = 0; i < planet_data.NUM_STARS; i++) {
        let position = createVector(random(-3*SCREEN_WIDTH/4, 3*SCREEN_WIDTH/4), random(-SCREEN_HEIGHT/2, SCREEN_HEIGHT/2))

        if (planet_data.selected_planet.position.x != 0) {
            let angle = atan2(planet_data.selected_planet.position.y, planet_data.selected_planet.position.x)
            //console.log("Angle: ", angle)
        }

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

function get_selection_hovered() {

}


// Draws planet details when focusing on it
function draw_focus_details() {
    let planet = planet_data.selected_planet;

    let base_x = 0
    let base_y = - SCREEN_HEIGHT / 2

    push()
    fill(255)
    textSize(18)

    push()
    textAlign(CENTER)
    text(planet.name, base_x, base_y + 40)
    pop()

    text("Satellites:", base_x - SCREEN_WIDTH / 2 + 30, base_y + 50)
    textSize(14)
    var padding = 65
    var hovered_body = null;
    planet_data.selected_planet.children.forEach(child => {
        let item = "- " + child.name

        let text_pos_x = base_x - SCREEN_WIDTH / 2 + 40
        let text_pos_y = base_y + padding

        let mouse_pos = {
            x: mouseX - SCREEN_WIDTH / 2,
            y: mouseY - SCREEN_HEIGHT / 2
        }

        let bounds = APP_FONT.textBounds(item, text_pos_x, text_pos_y)

        if ((mouse_pos.x > bounds.x && mouse_pos.x < bounds.x + bounds.w) &&
            (mouse_pos.y > bounds.y && mouse_pos.y < bounds.y + bounds.h)) {
            fill(255, 0, 0)
            hovered_body = child;
        }
        else {
            fill(255)
        }

        text(item, text_pos_x, text_pos_y)
        padding += 15
    })
    pop()
    return hovered_body
}

// Draws selection circle around planet and displays name
function display_planet_details(planet) {
    push()
    fill(255)
    let screen_pos = createVector(0,0,0)
    screen_pos.x = (planet.position.x - planet_data.selected_planet.position.x) / planet_data.DRAW_SCALE
    screen_pos.y = (planet.position.y - planet_data.selected_planet.position.y) / planet_data.DRAW_SCALE
    
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
    // if (planet_data.selected_planet.name != "Sun") {
    //     return;
    // }

    planet_data.hovered_planet = get_hovered_planet();
    // console.log(hovered_planet)
    if (planet_data.hovered_planet == null) {
        planet_data.hovered_planet = draw_focus_details();
        
        if (planet_data.hovered_planet == null)
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
    
    planet_data.selected_planet.children.forEach(planet => {
        let planet_pos = createVector(planet.position.x / planet_data.DRAW_SCALE, planet.position.y / planet_data.DRAW_SCALE)

        if (mouse_pos.dist(planet_pos) < HOVER_CUTOFF_DISTANCE) {
            hovered_planet = planet
        }
    });

    return hovered_planet;
}

// Focuses camera on chosen planet
function select_planet(name) {
    if (name == planet_data.selected_planet.name)
        return;

    let planets = planet_data.planets;
    planets.forEach(planet => {
        if (planet.name == name) {
            planet_data.selected_planet = planet

            UTIL.next_draw_scale /= planet_data.selected_planet.focus_scale
            UTIL.transition_time = 0

            planet_data.SPEED_SCALE /= 100
            planet_data.UPDATE_ITERATIONS *= 50
            
            return
        }
    });
}

// Interpolates between previously selected planet and currently selected
function process_planet_select() {
    if (UTIL.transition_time < ZOOM_TIME) {
        UTIL.transition_time += deltaTime;

        planet_data.DRAW_SCALE = lerp(UTIL.previous_draw_scale, UTIL.next_draw_scale, UTIL.transition_time / ZOOM_TIME)

        if (UTIL.previous_draw_scale < UTIL.next_draw_scale) {
            // Zooming out
            UTIL.prev_planet.draw_radius = lerp (planet_data.selected_planet.zoomed_radius, planet_data.selected_planet.child_radius, UTIL.transition_time / ZOOM_TIME)
        }
        else {
            // Zooming in
            planet_data.selected_planet.draw_radius = lerp (planet_data.selected_planet.child_radius, planet_data.selected_planet.zoomed_radius, UTIL.transition_time / ZOOM_TIME)
        }

    } else if (UTIL.previous_draw_scale != UTIL.next_draw_scale){
        planet_data.DRAW_SCALE = UTIL.next_draw_scale
        UTIL.previous_draw_scale = UTIL.next_draw_scale
    }

}

// Resets selected planet to the sun
function deselect_planets() {
    if (planet_data.selected_planet.name == "Sun")
        return;
    
    UTIL.prev_centerx = planet_data.selected_planet.position.x
    UTIL.prev_centery = planet_data.selected_planet.position.y

    UTIL.next_draw_scale *= planet_data.selected_planet.focus_scale
    UTIL.transition_time = 0

    UTIL.prev_planet = planet_data.selected_planet
    
    planet_data.SPEED_SCALE *= 100
    planet_data.UPDATE_ITERATIONS /= 50

    planet_data.selected_planet = planet_data.selected_planet.parents[0]
}