const planet_data = {}

function init_sun() {
    let sun = {
        name: "Sun",
        position: createVector(0,0,0),
        mass: 2000000000000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 3,
        color: [222, 202, 0]
    }
    planet_data.sun = sun;
    planet_data.selected_planet = sun;
}

function init_stars() {
    planet_data.STAR_SEED = random(0, 1000);
    planet_data.NUM_STARS = random(200, 300)
}

function init_planets() {
    planet_data.DRAW_SCALE = 1100000000
    planet_data.SPEED_SCALE = 100
    planet_data.UPDATE_ITERATIONS = 10
    planet_data.planets = []

    let mercury = {
        name: "Mercury",
        position: createVector(0, 55200000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 47360 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 330100000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [156, 156, 156],
        parents: [planet_data.sun]
    }
    let venus = {
        name: "Venus",
        position: createVector(0, 108200000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 35020 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 4867300000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [191, 179, 145],
        parents: [planet_data.sun]
    }
    let earth = {
        name: "Earth",
        position: createVector(0, 149000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 29780 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 5972200000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [101, 144, 252],
        parents: [planet_data.sun]
    }
    let moon = {
        name: "Moon",
        position: createVector(0, (149000000000 + 384400000) / UNIVERSE_SCALE, 0),
        velocity: createVector( (29780 + 1082) / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 73646000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [100, 100, 100],
        parents: [earth, planet_data.sun]
    }
    let mars = {
        name: "Mars",
        position: createVector(0, 225000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 24080 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 639000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [161, 91, 67],
        parents: [planet_data.sun]
    }
    let jupiter = {
        name: "Jupiter",
        position: createVector(0, 775000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 13060 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 1898130000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [242, 189, 148],
        parents: [planet_data.sun]
    }
    let saturn = {
        name: "Saturn",
        position: createVector(0, 1420000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 9670 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 568320000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [255, 228, 207],
        parents: [planet_data.sun]
    }
    let uranus = {
        name: "Uranus",
        position: createVector(0, 2882000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 6790 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 86811000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [0,0,220],
        parents: [planet_data.sun] 
    }
    let neptune = {
        name: "Neptune",
        position: createVector(0, 4510000000000 / UNIVERSE_SCALE, 0),
        velocity: createVector( 5450 / (UNIVERSE_SCALE / 3), 0, 0),
        accel: createVector(0,0,0),
        mass: 102409000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        radius: 2,
        color: [50,0,255],
        parents: [planet_data.sun]
    }
      
    add_planet(moon)
    add_planet(mercury)
    add_planet(venus)
    add_planet(earth)
    add_planet(mars)
    add_planet(jupiter)
    add_planet(saturn)
    add_planet(uranus)
    add_planet(neptune)

    init_stars()
}

function add_planet(planet) {
    planet_data.planets.push(planet)
}

function draw_body(body) {
    fill(body.color[0], body.color[1], body.color[2])
    circle(body.position.x / planet_data.DRAW_SCALE, body.position.y / planet_data.DRAW_SCALE, body.radius * 2)
}

function draw_planets() {
    strokeWeight(0)
    let planets = planet_data.planets;
    for (let i = 0; i < planets.length; i++) {
        draw_body(planets[i]);
    }
    draw_body(planet_data.sun)
}