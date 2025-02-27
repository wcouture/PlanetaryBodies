const HOVER_CUTOFF_DISTANCE = 20

const ZOOM_TIME = 1000
const UTIL = {
    previous_draw_scale:1100000000,
    next_draw_scale: 1100000000,
    transition_time: 1000,
    previous_radius: 2,
    next_radius: 2,
}

const body_facts = {}

var STAR_DRAW_SCALE = 1

function init_draw_scales() {
    UTIL.previous_draw_scale = 1100000000;
    UTIL.next_draw_scale = 1100000000;
    UTIL.transition_time = ZOOM_TIME;
    prev_planet = planet_data.selected_planet;
}

function init_body_facts() {
    body_facts["Sun"] = {}
    body_facts["Sun"]["Names:"] = "Sun, Sol, Helios"
    body_facts["Sun"]["Mass:"] = "1.9891 * 10^30 kg"
    body_facts["Sun"]["Equitorial Radius:"] = '6.957 * 10^8 m'
    body_facts["Sun"]["Mean Distance From Earth:"] = '148,600,000 km'
    body_facts["Sun"]["Mean Distance From Milky Way Core:"] = '24,000 - 28,000 light years'

    body_facts["Mercury"] = {}
    body_facts["Mercury"]["Names:"] = "Mercury"
    body_facts["Mercury"]["Classification:"] = "Terrestrial"
    body_facts["Mercury"]["Mass:"] = "3.3011 * 10^23 kg"
    body_facts["Mercury"]["Equitorial Radius:"] = '2,438.7 km'
    body_facts["Mercury"]["Aphelion:"] = '69,820,000 km'
    body_facts["Mercury"]["Perihelion:"] = '46,000,000 km'
    body_facts["Mercury"]["Semi-major Axis:"] = '57,910,000 km'
    body_facts["Mercury"]["Orbital Period:"] = '87.9691 d (sidereal) or 115.88 d (synodic)'
    body_facts["Mercury"]["Mean Orbital Velocity:"] = '47.36 km/s'
    body_facts["Mercury"]["Synodic Rotation:"] = '176 d'
    body_facts["Mercury"]["Sidereal Rotation:"] = '58.646 d'

    body_facts["Venus"] = {}
    body_facts["Venus"]["Names:"] = "Venus"
    body_facts["Venus"]["Classification:"] = "Terrestrial"
    body_facts["Venus"]["Mass:"] = "4.8675 * 10^24 kg"
    body_facts["Venus"]["Equitorial Radius:"] = '6,051.8 km'
    body_facts["Venus"]["Aphelion:"] = '108,940,000 km'
    body_facts["Venus"]["Perihelion:"] = '107,480,000 km'
    body_facts["Venus"]["Semi-major Axis:"] = '108,210,000 km'
    body_facts["Venus"]["Orbital Period:"] = '224.701 d (sidereal) or 583.92 d (synodic)'
    body_facts["Venus"]["Mean Orbital Velocity:"] = '35.02 km/s'
    body_facts["Venus"]["Synodic Rotation:"] = '-116.75 d (retrograde)'
    body_facts["Venus"]["Sidereal Rotation:"] = '-243.0226 d (retrograde)'
    
    body_facts["Earth"] = {}
    body_facts["Earth"]["Names:"] = "Earth, Terra, Tellus, Gaia"
    body_facts["Earth"]["Classification:"] = "Terrestrial"
    body_facts["Earth"]["Mass:"] = "5.972168 * 10^24 kg"
    body_facts["Earth"]["Equitorial Radius:"] = '6,378.137 km'
    body_facts["Earth"]["Aphelion:"] = '152,097,597 km'
    body_facts["Earth"]["Perihelion:"] = '147,098,450 km'
    body_facts["Earth"]["Semi-major Axis:"] = '149,598,023 km'
    body_facts["Earth"]["Orbital Period:"] = '365.256363004 d (sidereal)'
    body_facts["Earth"]["Mean Orbital Velocity:"] = '29.7827 km/s'
    body_facts["Earth"]["Synodic Rotation:"] = '1 d (24 h)'
    body_facts["Earth"]["Sidereal Rotation:"] = '0.99726968 d (23h 56m 4.1s)'

    body_facts["Mars"] = {}
    body_facts["Mars"]["Names:"] = "Mars, 'The Red Planet'"
    body_facts["Mars"]["Classification:"] = "Terrestrial"
    body_facts["Mars"]["Mass:"] = "6.4171 * 10^23 kg"
    body_facts["Mars"]["Equitorial Radius:"] = '3,396.2 km'
    body_facts["Mars"]["Aphelion:"] = '249,261,000 km'
    body_facts["Mars"]["Perihelion:"] = '206,650,000 km'
    body_facts["Mars"]["Semi-major Axis:"] = '227,939,366 km'
    body_facts["Mars"]["Orbital Period:"] = '686.98 d (sidereal) or 779.94 d (synodic)'
    body_facts["Mars"]["Mean Orbital Velocity:"] = '24.07 km/s'
    body_facts["Mars"]["Synodic Rotation:"] = '1.02749125 d (24h 39m 36s)'
    body_facts["Mars"]["Sidereal Rotation:"] = '1.025957 d (24h 37m 22.7s)'

    body_facts["Jupiter"] = {}
    body_facts["Jupiter"]["Names:"] = "Jupiter"
    body_facts["Jupiter"]["Classification:"] = "Gas Giant"
    body_facts["Jupiter"]["Mass:"] = "1.8982 * 10^27 kg"
    body_facts["Jupiter"]["Equitorial Radius:"] = '71,492 km'
    body_facts["Jupiter"]["Aphelion:"] = '816,363,000 km'
    body_facts["Jupiter"]["Perihelion:"] = '740,595,000 km'
    body_facts["Jupiter"]["Semi-major Axis:"] = '778,479,000 km'
    body_facts["Jupiter"]["Orbital Period:"] = '4,332.59 d (sidereal) or 398.88 d (synodic)'
    body_facts["Jupiter"]["Mean Orbital Velocity:"] = '13.06 km/s'
    body_facts["Jupiter"]["Synodic Rotation:"] = '9h 55m 33s'
    body_facts["Jupiter"]["Sidereal Rotation:"] = '9h 55m 30s'

    body_facts["Saturn"] = {}
    body_facts["Saturn"]["Names:"] = "Saturn"
    body_facts["Saturn"]["Classification:"] = "Gas Giant"
    body_facts["Saturn"]["Mass:"] = "5.6834 * 10^26 kg"
    body_facts["Saturn"]["Equitorial Radius:"] = '60,268 km'
    body_facts["Saturn"]["Aphelion:"] = '1,514,500,000 km'
    body_facts["Saturn"]["Perihelion:"] = '1,353,550,000 km'
    body_facts["Saturn"]["Semi-major Axis:"] = '1,433,530,000 km'
    body_facts["Saturn"]["Orbital Period:"] = '10,755.7 d (sidereal) or 378.09 d (synodic)'
    body_facts["Saturn"]["Mean Orbital Velocity:"] = '9.68 km/s'
    body_facts["Saturn"]["Synodic Rotation:"] = '10h 32m 36s'
    body_facts["Saturn"]["Sidereal Rotation:"] = '10h 33m 38s'

    body_facts["Uranus"] = {}
    body_facts["Uranus"]["Names:"] = "Uranus"
    body_facts["Uranus"]["Classification:"] = "Ice Giant"
    body_facts["Uranus"]["Mass:"] = "8.681 * 10^25 kg"
    body_facts["Uranus"]["Equitorial Radius:"] = '25,559 km'
    body_facts["Uranus"]["Aphelion:"] = '3,006,390,000 km'
    body_facts["Uranus"]["Perihelion:"] = '2,735,560,000 km'
    body_facts["Uranus"]["Semi-major Axis:"] = '2,870,972,000 km'
    body_facts["Uranus"]["Orbital Period:"] = '30,688.5 d (sidereal) or 369.66 d (synodic)'
    body_facts["Uranus"]["Mean Orbital Velocity:"] = '6.80 km/s'
    body_facts["Uranus"]["Synodic Rotation:"] = '-17h 14m 23s (retrograde)'
    body_facts["Uranus"]["Sidereal Rotation:"] = '-17h 14m 24s (retrograde)'

    body_facts["Neptune"] = {}
    body_facts["Neptune"]["Names:"] = "Neptune"
    body_facts["Neptune"]["Classification:"] = "Ice Giant"
    body_facts["Neptune"]["Mass:"] = "1.02409 * 10^26 kg"
    body_facts["Neptune"]["Equitorial Radius:"] = '24,764 km'
    body_facts["Neptune"]["Aphelion:"] = '4,540,000,000 km'
    body_facts["Neptune"]["Perihelion:"] = '4,460,000,000 km'
    body_facts["Neptune"]["Semi-major Axis:"] = '4,500,000,000 km'
    body_facts["Neptune"]["Orbital Period:"] = '60,195 d (sidereal) or 367.49 d (synodic)'
    body_facts["Neptune"]["Mean Orbital Velocity:"] = '5.43 km/s'
    body_facts["Neptune"]["Synodic Rotation:"] = '16h 6m 36s'
    body_facts["Neptune"]["Sidereal Rotation:"] = '16h 6m 36s'

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

function draw_satellite_list() {
    let base_x = 0;
    let base_y = - SCREEN_HEIGHT / 2

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

function draw_body_facts() {
    push()
    textAlign(RIGHT)

    let text_pos = createVector(SCREEN_WIDTH / 2 - 50, -SCREEN_HEIGHT / 2 + 50, 0)
    textSize(18)
    fill(255)
    text("Body Facts:", text_pos.x, text_pos.y)
    let line_padding = 15
    var line_num = 1

    textSize(12)
    let fact_keys = Object.keys(body_facts[planet_data.selected_planet.name])
    fact_keys.forEach((key, index) => {
        fill(200)
        textSize(12)
        text(body_facts[planet_data.selected_planet.name][key], text_pos.x, text_pos.y + line_padding * line_num + 12)

        fill(255)
        textSize(14)
        text(key, text_pos.x, text_pos.y + line_padding * (line_num))

        line_num += 2
    })

    pop()
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

    
    draw_body_facts()
    return draw_satellite_list()
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