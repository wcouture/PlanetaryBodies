const planet_data = {}

function init_sun() {
    let sun = {
        name: "Sun",
        position: createVector(0,0,0),
        mass: 2000000000000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 5,
        zoomed_radius: 5,
        child_radius: 2,
        color: [222, 202, 0],
        children: []
    }
    planet_data.sun = sun;
    planet_data.selected_planet = sun;
}

function init_stars() {
    planet_data.STAR_SEED = random(0, 1000);
    planet_data.NUM_STARS = random(200, 300)
}

// Initializes scalar variables used in drawing and updating planets
function init_scalars() {
    planet_data.DRAW_SCALE = 1100000000
    planet_data.SPEED_SCALE = 1000
    planet_data.UPDATE_ITERATIONS = 1
}

function init_planets() {
    init_scalars();

    planet_data.planets = []

    let mercury = {
        name: "Mercury",
        position: createVector(0, 55200000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 47360 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 330100000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [156, 156, 156],
        parents: [planet_data.sun],
        children: []
    }
    add_planet(mercury)
    let venus = {
        name: "Venus",
        position: createVector(0, 108200000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 35020 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 4867300000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [191, 179, 145],
        parents: [planet_data.sun],
        children: []
    }
    add_planet(venus)

    let earth = {
        name: "Earth",
        position: createVector(0, 149000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 29780 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 5972200000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 5000,
        color: [101, 144, 252],
        parents: [planet_data.sun],
        children: []
    }
    add_planet(earth)
    let moon = {
        name: "Moon",
        position: createVector(0, (149000000000 + 384400000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (29780 + 1082) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 73646000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [100, 100, 100],
        parents: [earth, planet_data.sun],
        children: []
    }
    add_planet(moon)
    earth.children.push(moon)



    let mars = {
        name: "Mars",
        position: createVector(0, 225000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 24080 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 639000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 100000,
        color: [161, 91, 67],
        parents: [planet_data.sun],
        children: []
    }
    add_planet(mars)
    let phobos = {
        name: "Phobos",
        position: createVector(0, (225000000000 + 9367000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (24080 + 2138) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 10600000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [100, 100, 100],
        parents: [mars, planet_data.sun],
        children: []
    }
    add_planet(phobos)
    mars.children.push(phobos)
    let deimos = {
        name: "Deimos",
        position: createVector(0, (225000000000 + 23463000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (24080 + 1351) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 1500000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [100, 100, 100],
        parents: [mars, planet_data.sun],
        children: []
    }
    add_planet(deimos)
    mars.children.push(deimos)



    let jupiter = {
        name: "Jupiter",
        position: createVector(0, 775000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 13060 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 1898130000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [242, 189, 148],
        parents: [planet_data.sun],
        children: []
    }
    add_planet(jupiter)
    let ganymede = {
        name: "Ganymede",
        position: createVector(0, (775000000000 + 1070400000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (13060 + 10880) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 148190000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [191, 182, 157],
        parents: [jupiter, planet_data.sun],
        children: []
    }
    add_planet(ganymede)
    jupiter.children.push(ganymede)
    let callisto = {
        name: "Callisto",
        position: createVector(0, (775000000000 + 1882700000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (13060 + 8204) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 107593800000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [142, 146, 158],
        parents: [jupiter, planet_data.sun],
        children: []
    }
    add_planet(callisto)
    jupiter.children.push(callisto)
    let io = {
        name: "Io",
        position: createVector(0, (775000000000 + 421700000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (13060 + 17334) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 89319380000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [252, 238, 179],
        parents: [jupiter, planet_data.sun],
        children: []
    }
    add_planet(io)
    jupiter.children.push(io)
    let europa = {
        name: "Europa",
        position: createVector(0, (775000000000 + 670900000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (13060 + 13743) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 47998400000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [219, 247, 255],
        parents: [jupiter, planet_data.sun],
        children: []
    }
    add_planet(europa)
    jupiter.children.push(europa)

    let saturn = {
        name: "Saturn",
        position: createVector(0, 1420000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 9670 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 568320000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [255, 228, 207],
        parents: [planet_data.sun],
        children: []
    }
    add_planet(saturn)
    let titan = {
        name: "Titan",
        position: createVector(0, (1420000000000 + 1221870000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (9670 + 5570) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 134518000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [255, 228, 207],
        parents: [saturn, planet_data.sun],
        children: []
    }
    add_planet(titan)
    saturn.children.push(titan)
    let rhea = {
        name: "Rhea",
        position: createVector(0, (1420000000000 + 527040000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (9670 + 8480) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 2306485400000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [255, 228, 207],
        parents: [saturn, planet_data.sun],
        children: []
    }
    add_planet(rhea)
    saturn.children.push(rhea)
    let enceladus = {
        name: "Enceladus",
        position: createVector(0, (1420000000000 + 237948000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (9670 + 12640) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 108031800000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [255, 228, 207],
        parents: [saturn, planet_data.sun],
        children: []
    }
    add_planet(enceladus)
    saturn.children.push(enceladus)
    

    let uranus = {
        name: "Uranus",
        position: createVector(0, 2882000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 6790 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 86811000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [0,0,220],
        parents: [planet_data.sun],
        children: []
    }
    add_planet(uranus)
    let neptune = {
        name: "Neptune",
        position: createVector(0, 4510000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 5450 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 102409000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 2,
        zoomed_radius: 5,
        child_radius: 2,
        focus_scale: 1000,
        color: [50,0,255],
        parents: [planet_data.sun],
        children: []
    }
    add_planet(neptune)

    planet_data.sun.children.push(mercury)
    planet_data.sun.children.push(venus)
    planet_data.sun.children.push(earth)
    planet_data.sun.children.push(mars)
    planet_data.sun.children.push(jupiter)
    planet_data.sun.children.push(saturn)
    planet_data.sun.children.push(uranus)
    planet_data.sun.children.push(neptune)

    init_stars()
}

function add_planet(planet) {
    planet_data.planets.push(planet)
}

function draw_body(body) {
    let screen_x = (body.position.x - planet_data.selected_planet.position.x) / planet_data.DRAW_SCALE 
    let screen_y = (body.position.y - planet_data.selected_planet.position.y) / planet_data.DRAW_SCALE

    fill(body.color[0], body.color[1], body.color[2])
    circle(screen_x, screen_y, body.draw_radius * 2)
}

function draw_planets() {
    strokeWeight(0)
    draw_planet(planet_data.sun)
    // let planets = planet_data.selected_planet.children;
    // for (let i = 0; i < planets.length; i++) {
    //     draw_body(planets[i]);
    // }
    // draw_body(planet_data.selected_planet)
}

function draw_planet(planet) {
    let children = planet.children
    children.forEach(child => {
        draw_planet(child)
    });
    draw_body(planet)
}