const planet_data = {}

function init_sun() {
    let sun = {
        name: "Sun",
        position: createVector(0,0,0),
        mass: 2000000000000000000000000000000 / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: 8,
        zoomed_radius: 10,
        child_radius: 1,
        focus_scale: 600000000,
        color: [222, 202, 0],
        graphic: loadImage("assets/sun-graphic.png"),
        rotation: 0,
        rotate_time: 100000,
        children: [],
        path_dots: []
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
    planet_data.MANUAL_SCALE_OFFSET = 1
    planet_data.DRAW_SCALE = 800000000
    planet_data.SPEED_SCALE = 1000
    planet_data.UPDATE_ITERATIONS = 1
    planet_data.focus_pos = createVector(0,0)
}

function create_planet(name, orbit_radius, velocity, mass, zoomed_radius, child_radius, focus_scale, color, rotate_time) {
    let angle = random(0, TWO_PI)
    let init_pos = createVector(cos(angle) * orbit_radius / UNIVERSE_SCALE, sin(angle) * orbit_radius / UNIVERSE_SCALE)
    let init_vel = createVector(cos(angle - HALF_PI) * velocity / (UNIVERSE_SCALE / 3), sin(angle - HALF_PI) * velocity / (UNIVERSE_SCALE / 3))

    let graphic_path = "assets/" + name.toLowerCase() + "-graphic.png"

    let planet = {
        name: name,
        orbit_radius: orbit_radius,
        position: init_pos,
        velocity: init_vel,
        accel: createVector(0,0,0),
        mass: mass / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: planet_data.sun.child_radius,
        zoomed_radius: zoomed_radius,
        child_radius: child_radius,
        focus_scale: focus_scale,
        color: color,
        graphic: loadImage(graphic_path, (img) => {}, (event)=> {
            planet.graphic = undefined
        }),
        rotation: 0,
        rotate_time: rotate_time,
        parents: [planet_data.sun],
        children: [],
        path_dots: [{x: init_pos.x, y: init_pos.y}]
    }
    add_planet(planet)
    planet_data.sun.children.push(planet)

    return planet
}

function create_moon(parent, name, orbit_radius, velocity, mass, zoomed_radius, child_radius, focus_scale, color, rotate_time) {
    let angle = atan2(parent.position.y, parent.position.x)
    let init_pos = createVector((cos(angle) * orbit_radius / UNIVERSE_SCALE) + parent.position.x, (sin(angle) * orbit_radius / UNIVERSE_SCALE) + parent.position.y)
    let init_vel = createVector((cos(angle - HALF_PI) * velocity / (UNIVERSE_SCALE / 3)) + parent.velocity.x, (sin(angle - HALF_PI) * velocity / (UNIVERSE_SCALE / 3)) + parent.velocity.y)

    let graphic_path = "assets/" + name.toLowerCase() + "-graphic.png"

    let planet = {
        name: name,
        orbit_radius: orbit_radius,
        position: init_pos,
        velocity: init_vel,
        accel: createVector(0,0,0),
        mass: mass / (UNIVERSE_SCALE*UNIVERSE_SCALE),
        draw_radius: planet_data.sun.child_radius,
        zoomed_radius: zoomed_radius,
        child_radius: child_radius,
        focus_scale: focus_scale,
        color: color,
        graphic: loadImage(graphic_path, (img) => {}, (event)=> {
            planet.graphic = undefined
        }),
        rotation: 0,
        rotate_time: rotate_time,
        parents: [parent, planet_data.sun],
        children: [],
        path_dots: [{x: init_pos.x, y: init_pos.y}]
    }
    add_planet(planet)
    parent.children.push(planet)
}

function init_planets() {
    init_scalars();

    planet_data.planets = []

    let mercury_color = [156, 156, 156]
    create_planet("Mercury", 55200000000, 47360, 330100000000000000000000, 10, 2, 1000, mercury_color, 15206400)

    let venus_color = [191, 179, 145]
    create_planet("Venus", 108200000000, 35020, 4867300000000000000000000, 10, 2, 1000, venus_color, -10088064)

    // Earth system ----------------------------------------------------------------
    let earth_color = [101, 144, 252]
    let earth = create_planet("Earth", 149000000000, 29780, 5972200000000000000000000, 14, 6, 5000, earth_color, 86400)
    
    let moon_color = [100, 100, 100]
    create_moon(earth, "Moon", 384400000, 1082, 73646000000000000000000, 22, 2, 100, moon_color, 2378642.9)

    // Martian system ----------------------------------------------------------------
    let mars_color = [161, 91, 67]
    let mars = create_planet("Mars", 225000000000, 24080, 639000000000000000000000, 20, 2, 100000, mars_color, 88656)

    let phobos_color = [100, 100, 100]
    create_moon(mars, "Phobos", 9376000, 2138, 10600000000000000, 15, 2, 1000, phobos_color, 27552)

    let deimos_color = [100, 100, 100]
    create_moon(mars, "Deimos", 23463200, 1351, 1500000000000000, 15, 2, 1000, deimos_color, 109123.2)

    // Jovian system ----------------------------------------------------------------
    let jupiter_color = [242, 189, 148]
    let jupiter = create_planet("Jupiter", 775000000000, 13060, 1898130000000000000000000000, 15, 2, 2000, jupiter_color, 35733)

    let ganymede_color = [191, 182, 157]
    create_moon(jupiter, "Ganymede", 1070400000, 10880, 148190000000000000000000, 10, 2, 1000, ganymede_color, 0)

    let callisto_color = [142, 146, 158]
    create_moon(jupiter, "Callisto", 1882700000, 8204, 107593800000000000000000, 10, 2, 1000, callisto_color, 0)
    
    let io_color = [252, 238, 179]
    create_moon(jupiter, "Io", 421700000, 17334, 89319380000000000000000, 10, 2, 1000, io_color, 0)
    
    let europa_color = [219, 247, 255]
    create_moon(jupiter, "Europa", 670900000, 13743, 47998400000000000000000, 10, 2, 1000, europa_color, 0)

    // Saturnian system ----------------------------------------------------------------
    let saturn_color = [255, 228, 207]
    let saturn = create_planet("Saturn", 1420000000000, 9670, 568320000000000000000000000, 10, 2, 3000, saturn_color, 0)
    
    let titan_color = [141, 134, 145]
    create_moon(saturn, "Titan", 1221870000, 5570, 134518000000000000000000, 10, 2, 100, titan_color, 0)

    let rhea_color = [101, 102, 125]
    create_moon(saturn, "Rhea", 527040000, 8480, 2306485400000000000000, 10, 2, 100, rhea_color, 0)

    let enceladus_color = [77, 67, 67]
    create_moon(saturn, "Enceladus", 237948000, 12635, 108031800000000000000, 10, 2, 100, enceladus_color, 0)

    let mimas_color = [138, 109, 109]
    create_moon(saturn, "Mimas", 185539000, 12280, 37509400000000000000, 10, 2, 100, mimas_color, 0)

    let tethys_color = [143, 143, 143]
    create_moon(saturn, "Tethys", 294619000, 11350, 617490000000000000000, 10, 2, 100, tethys_color, 0)

    let dione_color = [144, 173, 167]
    create_moon(saturn, "Dione", 377396000, 10028, 1095486800000000000000, 10, 2, 1000, dione_color, 0)

    let lapetus_color = [181, 155, 136]
    create_moon(saturn, "Lapetus", 3560820000, 3265, 1805650000000000000000, 10, 2, 1000, lapetus_color, 0)

    // Uranian system ----------------------------------------------------------------
    let uranus_color = [136, 194, 227]
    let uranus = create_planet("Uranus", 2882000000000, 6790, 86811000000000000000000000, 10, 2, 5000, uranus_color, 0)

    let titania_color = [141, 134, 145]
    create_moon(uranus, "Titania", 435910000, 3640, 3455000000000000000000, 10, 2, 1000, titania_color, 0)

    let oberon_color = [206, 220, 242]
    create_moon(uranus, "Oberon", 583520000, 3150, 3110400000000000000000, 10, 2, oberon_color, 0)

    let umbriel_color = [168, 168, 168]
    create_moon(uranus, "Umbriel", 266000000, 4670, 1288500000000000000000, 10, 2, 1000, umbriel_color, 0)

    let ariel_color = [177, 199, 185]
    create_moon(uranus, "Ariel", 190900000, 5510, 1233100000000000000000, 10, 2, 1000, ariel_color, 0)

    let miranda_color = [168, 151, 158]
    create_moon(uranus, "Miranda", 129390000, 6660, 62930000000000000000, 10, 2, 1000, miranda_color, 0)

    // Neptunian system ----------------------------------------------------------------
    let neptune_color = [66, 116, 201]
    let neptune = create_planet("Neptune", 4510000000000, 5450, 102409000000000000000000000, 10, 2, 3000, neptune_color, 0)

    let triton_color = [125,120,150]
    create_moon(neptune, "Triton", 354759000, 4390, 21389000000000000000000, 10, 2, 1000, triton_color, 0)

    init_stars()
    imageMode(CENTER)
}

function add_planet(planet) {
    planet_data.planets.push(planet)
}

function draw_dot(dots, index, max, moon = false) {
    if (max == 0)
        return 


    if (index < max) {
        draw_dot(dots, index + 1, max, moon)
    }

    let dot = dots[index]
    
    
}

function draw_body(body) {
    let screen_x = (body.position.x - planet_data.focus_pos.x) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
    let screen_y = (body.position.y - planet_data.focus_pos.y) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)

    if (planet_data.selected_planet.children.includes(body)){
        push()
        beginShape()

        curveVertex(screen_x, screen_y)
        let is_moon = body.parents[0] != planet_data.sun;
        body.path_dots.forEach((dot) => {
            var pos_x = (dot.x - planet_data.focus_pos.x) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
            var pos_y = (dot.y - planet_data.focus_pos.y) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)

            if (is_moon) {
                pos_x = (dot.x + planet_data.selected_planet.position.x - planet_data.focus_pos.x) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
                pos_y = (dot.y + planet_data.selected_planet.position.y - planet_data.focus_pos.y) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
            }
            stroke(40)
            strokeWeight(1)
            noFill()
            curveVertex(pos_x, pos_y)
        })

        endShape()

        pop()
    }
    
    imageMode(CENTER)
    if (body.graphic != undefined) {
        let width = body.draw_radius * 2 / planet_data.MANUAL_SCALE_OFFSET;
        let height = body.draw_radius * 2 / planet_data.MANUAL_SCALE_OFFSET;

        if (UTIL.processing == false && planet_data.selected_planet.name == body.name) {
            push()
            translate(screen_x, screen_y)
            rotate(body.rotation)
            image(body.graphic, screen_x, screen_y, width, height)
            pop()
            return
        }

        image(body.graphic, screen_x, screen_y, width, height)
        return
    }

    fill(body.color[0], body.color[1], body.color[2])
    circle(screen_x, screen_y, body.draw_radius * 2 / planet_data.MANUAL_SCALE_OFFSET)
}

function draw_rings(body) {
    push()
    noFill()

    let x_pos = (-planet_data.focus_pos.x + planet_data.selected_planet.position.x) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
    let y_pos = (-planet_data.focus_pos.y + planet_data.selected_planet.position.y) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
    
    strokeWeight(body.draw_radius - 1)
    stroke(150, 131, 95)
    circle(x_pos,y_pos, body.draw_radius * 3.5 / (planet_data.MANUAL_SCALE_OFFSET / planet_data.DRAW_SCALE))

    strokeWeight(body.draw_radius - 7)
    stroke(189, 173, 143)
    circle(x_pos,y_pos, body.draw_radius * 3.5 / (planet_data.MANUAL_SCALE_OFFSET / planet_data.DRAW_SCALE))

    strokeWeight(body.draw_radius - 10)
    stroke(179, 176, 152)
    circle(x_pos,y_pos, body.draw_radius * 3.5 / (planet_data.MANUAL_SCALE_OFFSET / planet_data.DRAW_SCALE))

    pop()

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