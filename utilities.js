const HOVER_CUTOFF_DISTANCE = 20

const ZOOM_TIME = 1000
const UTIL = {
    previous_draw_scale:1100000000,
    next_draw_scale: 1100000000,
    transition_time: 1000,
    previous_radius: 2,
    next_radius: 2,
    processing: false,
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

    // The Moon
    body_facts["Moon"] = {}
    body_facts["Moon"]["Names:"] = "Moon, Luna, Selene, Cynthia"
    body_facts["Moon"]["Mass:"] = "7.346 * 10^22 kg"
    body_facts["Moon"]["Mean Radius:"] = '1,738.1 km'
    body_facts["Moon"]["Apogee:"] = '405,400 km'
    body_facts["Moon"]["Perigee:"] = '362,600 km'
    body_facts["Moon"]["Semi-major Axis:"] = '384,399 km'
    body_facts["Moon"]["Orbital Period:"] = '27d 7h 43m 11.5s (sidereal) or 29d 12h 44m 2.9s (synodic)'
    body_facts["Moon"]["Mean Orbital Velocity:"] = '1.022 km/s'
    body_facts["Moon"]["Synodic Rotation:"] = '29d 12h 44m 2.9s (tidally locked)'
    body_facts["Moon"]["Sidereal Rotation:"] = '27d 7h 43m 11.5s (tidally locked)'

    // Martian Moons
    body_facts["Deimos"] = {}
    body_facts["Deimos"]["Names:"] = "Deimos"
    body_facts["Deimos"]["Mass:"] = "1.51 * 10^15 kg"
    body_facts["Deimos"]["Mean Radius:"] = '6.27 km'
    body_facts["Deimos"]["Apoapsis:"] = '23,455.5 km'
    body_facts["Deimos"]["Periapsis:"] = '23,470.9 km'
    body_facts["Deimos"]["Semi-major Axis:"] = '23,463.2 km'
    body_facts["Deimos"]["Orbital Period:"] = '1d 6h 18m 43.2s (sidereal)'
    body_facts["Deimos"]["Mean Orbital Velocity:"] = '1.3513 km/s'
    body_facts["Deimos"]["Sidereal Period:"] = 'synchronous (tidally locked)'
    
    body_facts["Phobos"] = {}
    body_facts["Phobos"]["Names:"] = "Phobos"
    body_facts["Phobos"]["Mass:"] = "1.060 * 10^16 kg"
    body_facts["Phobos"]["Mean Radius:"] = '11.08 km'
    body_facts["Phobos"]["Apoapsis:"] = '9,517.58 km'
    body_facts["Phobos"]["Periapsis:"] = '9,234.42 km'
    body_facts["Phobos"]["Semi-major Axis:"] = '9,376 km'
    body_facts["Phobos"]["Orbital Period:"] = '7h 39m 12s (sidereal)'
    body_facts["Phobos"]["Mean Orbital Velocity:"] = '2.138 km/s'
    body_facts["Phobos"]["Sidereal Period:"] = 'synchronous (tidally locked)'

    // Jovian Moons
    body_facts["Io"] = {}
    body_facts["Io"]["Names:"] = "Io, Jupiter I"
    body_facts["Io"]["Mass:"] = "8.931938 * 10^22 kg"
    body_facts["Io"]["Mean Radius:"] = '1,821.6 km'
    body_facts["Io"]["Apoapsis:"] = '423,400 km'
    body_facts["Io"]["Periapsis:"] = '420,000 km'
    body_facts["Io"]["Semi-major Axis:"] = '421,700 km'
    body_facts["Io"]["Orbital Period:"] = '1d 18h 27m 33.505s (sidereal)'
    body_facts["Io"]["Mean Orbital Velocity:"] = '1.022 km/s'
    body_facts["Io"]["Synodic Period:"] = 'synchronous (tidally locked)'

    body_facts["Europa"] = {}
    body_facts["Europa"]["Names:"] = "Europa, Jupiter II"
    body_facts["Europa"]["Mass:"] = "4.79984 * 10^22 kg"
    body_facts["Europa"]["Mean Radius:"] = '1,560.8 km'
    body_facts["Europa"]["Apoapsis:"] = '679,938 km'
    body_facts["Europa"]["Periapsis:"] = '664,862 km'
    body_facts["Europa"]["Semi-major Axis:"] = '670,900 km'
    body_facts["Europa"]["Orbital Period:"] = '3d 13h 13m 42.04s (sidereal)'
    body_facts["Europa"]["Mean Orbital Velocity:"] = '13.74336 km/s'
    body_facts["Europa"]["Synodic Period:"] = 'synchronous (tidally locked)'

    body_facts["Ganymede"] = {}
    body_facts["Ganymede"]["Names:"] = "Ganymede, Jupiter III"
    body_facts["Ganymede"]["Mass:"] = "1.4819 * 10^23 kg"
    body_facts["Ganymede"]["Mean Radius:"] = '2,643.1 km'
    body_facts["Ganymede"]["Apoapsis:"] = '1,071,600 km'
    body_facts["Ganymede"]["Periapsis:"] = '1,069,200 km'
    body_facts["Ganymede"]["Semi-major Axis:"] = '1,070,400 km'
    body_facts["Ganymede"]["Orbital Period:"] = '7d 3h 42m 33.38s (sidereal)'
    body_facts["Ganymede"]["Mean Orbital Velocity:"] = '10.880 km/s'
    body_facts["Ganymede"]["Synodic Period:"] = 'synchronous (tidally locked)'
    
    body_facts["Callisto"] = {}
    body_facts["Callisto"]["Names:"] = "Callisto, Jupiter IV"
    body_facts["Callisto"]["Mass:"] = "1.075938 * 10^23 kg"
    body_facts["Callisto"]["Mean Radius:"] = '2,410.3 km'
    body_facts["Callisto"]["Apoapsis:"] = '1,897,000 km'
    body_facts["Callisto"]["Periapsis:"] = '1,869,000 km'
    body_facts["Callisto"]["Semi-major Axis:"] = '1,882,700 km'
    body_facts["Callisto"]["Orbital Period:"] = '16d 16h 32m 11.19s (sidereal)'
    body_facts["Callisto"]["Mean Orbital Velocity:"] = '1.022 km/s'
    body_facts["Callisto"]["Synodic Period:"] = 'synchronous (tidally locked)'

    // Saturnian Moons
    body_facts["Titan"] = {}
    body_facts["Titan"]["Names:"] = "Titan"
    body_facts["Titan"]["Mass:"] = "1.34518 * 10^23 kg"
    body_facts["Titan"]["Mean Radius:"] = '2,574.73 km'
    body_facts["Titan"]["Apoapsis:"] = '1,257,060 km'
    body_facts["Titan"]["Periapsis:"] = '1,186,680 km'
    body_facts["Titan"]["Semi-major Axis:"] = '1,221,870 km'
    body_facts["Titan"]["Orbital Period:"] = '15d 22h 40m 48s (sidereal)'
    body_facts["Titan"]["Mean Orbital Velocity:"] = '5.57 km/s'
    body_facts["Titan"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    body_facts["Rhea"] = {}
    body_facts["Rhea"]["Names:"] = "Rhea"
    body_facts["Rhea"]["Mass:"] = "7.346 * 10^22 kg"
    body_facts["Rhea"]["Mean Radius:"] = '1,738.1 km'
    body_facts["Rhea"]["Apoapsis:"] = '527,567.57 km'
    body_facts["Rhea"]["Periapsis:"] = '526,513.49 km'
    body_facts["Rhea"]["Semi-major Axis:"] = '527,040 km'
    body_facts["Rhea"]["Orbital Period:"] = '4d 12h 26m 13.52s (sidereal) or 29d 12h 44m 2.9s (synodic)'
    body_facts["Rhea"]["Mean Orbital Velocity:"] = '8.48 km/s'
    body_facts["Rhea"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    body_facts["Enceladus"] = {}
    body_facts["Enceladus"]["Names:"] = "Enceladus"
    body_facts["Enceladus"]["Mass:"] = "1.080318 * 10^20 kg"
    body_facts["Enceladus"]["Mean Radius:"] = '252.1 km'
    body_facts["Enceladus"]["Apoapsis:"] = '239,071.637 km'
    body_facts["Enceladus"]["Periapsis:"] = '236,834.876 km'
    body_facts["Enceladus"]["Semi-major Axis:"] = '237,948 km'
    body_facts["Enceladus"]["Orbital Period:"] = '1d 8h 53m 6.84s (sidereal)'
    body_facts["Enceladus"]["Mean Orbital Velocity:"] = '12.629 km/s'
    body_facts["Enceladus"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    body_facts["Mimas"] = {}
    body_facts["Mimas"]["Names:"] = "Mimas"
    body_facts["Mimas"]["Mass:"] = "3.75094 * 10^19 kg"
    body_facts["Mimas"]["Mean Radius:"] = '198.2 km'
    body_facts["Mimas"]["Apoapsis:"] = '189,179 km'
    body_facts["Mimas"]["Periapsis:"] = '181,902 km'
    body_facts["Mimas"]["Semi-major Axis:"] = '185,539 km'
    body_facts["Mimas"]["Orbital Period:"] = '22h 37m 5.26s (sidereal)'
    body_facts["Mimas"]["Mean Orbital Velocity:"] = '14.28 km/s'
    body_facts["Mimas"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    body_facts["Tethys"] = {}
    body_facts["Tethys"]["Names:"] = "Tethys"
    body_facts["Tethys"]["Mass:"] = "6.1749 * 10^20 kg"
    body_facts["Tethys"]["Mean Radius:"] = '531.1 km'
    body_facts["Tethys"]["Apoapsis:"] = '294,648.5 km'
    body_facts["Tethys"]["Periapsis:"] = '294,589.5 km'
    body_facts["Tethys"]["Semi-major Axis:"] = '294,619 km'
    body_facts["Tethys"]["Orbital Period:"] = '1d 21h 18m 26.09s (sidereal)'
    body_facts["Tethys"]["Mean Orbital Velocity:"] = '11.35 km/s'
    body_facts["Tethys"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    body_facts["Dione"] = {}
    body_facts["Dione"]["Names:"] = "Dione"
    body_facts["Dione"]["Mass:"] = "1.0954868 * 10^21 kg"
    body_facts["Dione"]["Mean Radius:"] = '561.4 km'
    body_facts["Dione"]["Apoapsis:"] = '378,228.102 km'
    body_facts["Dione"]["Periapsis:"] = '376,567.551 km'
    body_facts["Dione"]["Semi-major Axis:"] = '377,396 km'
    body_facts["Dione"]["Orbital Period:"] = '2d 17h 41m 9.456s (sidereal)'
    body_facts["Dione"]["Mean Orbital Velocity:"] = '10.028 km/s'
    body_facts["Dione"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    body_facts["Lapetus"] = {}
    body_facts["Lapetus"]["Names:"] = "Lapetus"
    body_facts["Lapetus"]["Mass:"] = "1.80565 * 10^21 kg"
    body_facts["Lapetus"]["Mean Radius:"] = '734.4 km'
    body_facts["Lapetus"]["Apoapsis:"] = '3,662,193.9224 km'
    body_facts["Lapetus"]["Periapsis:"] = '3,464,907.2105 km'
    body_facts["Lapetus"]["Semi-major Axis:"] = '3,560,820 km'
    body_facts["Lapetus"]["Orbital Period:"] = '79d 7h 42m 57.6s (sidereal)'
    body_facts["Lapetus"]["Mean Orbital Velocity:"] = '3.265 km/s'
    body_facts["Lapetus"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    // Uranian Moons
    body_facts["Titania"] = {}
    body_facts["Titania"]["Names:"] = "Titania, Uranus III"
    body_facts["Titania"]["Mass:"] = "3.455 * 10^21 kg"
    body_facts["Titania"]["Mean Radius:"] = '788.4 km'
    body_facts["Titania"]["Apoapsis:"] = '436,390.03 km'
    body_facts["Titania"]["Periapsis:"] = '435,431.03 km'
    body_facts["Titania"]["Semi-major Axis:"] = '435,910 km'
    body_facts["Titania"]["Orbital Period:"] = '8d 16h 56m 58.6s (sidereal)'
    body_facts["Titania"]["Mean Orbital Velocity:"] = '3.64 km/s'
    body_facts["Titania"]["Synodic Rotation:"] = 'presumed synchronous (tidally locked)'

    body_facts["Oberon"] = {}
    body_facts["Oberon"]["Names:"] = "Oberon, Uranus IV"
    body_facts["Oberon"]["Mass:"] = "3.1104 * 10^21 kg"
    body_facts["Oberon"]["Mean Radius:"] = '761.4 km'
    body_facts["Oberon"]["Apoapsis:"] = '584,338.1 km'
    body_facts["Oberon"]["Periapsis:"] = '582,704.2 km'
    body_facts["Oberon"]["Semi-major Axis:"] = '583,520 km'
    body_facts["Oberon"]["Orbital Period:"] = '13d 11h 7m 3.4s (sidereal)'
    body_facts["Oberon"]["Mean Orbital Velocity:"] = '3.15 km/s'
    body_facts["Oberon"]["Synodic Rotation:"] = 'presumed synchronous (tidally locked)'

    body_facts["Umbriel"] = {}
    body_facts["Umbriel"]["Names:"] = "Umbriel, Uranus II"
    body_facts["Umbriel"]["Mass:"] = "1.2885 * 10^21 kg"
    body_facts["Umbriel"]["Mean Radius:"] = '584.7 km'
    body_facts["Umbriel"]["Apoapsis:"] = '267041.46 km'
    body_facts["Umbriel"]["Periapsis:"] = '264966.63 km'
    body_facts["Umbriel"]["Semi-major Axis:"] = '266,000 km'
    body_facts["Umbriel"]["Orbital Period:"] = '4d 3h 27m 21.6s (sidereal)'
    body_facts["Umbriel"]["Mean Orbital Velocity:"] = '4.67 km/s'
    body_facts["Umbriel"]["Synodic Rotation:"] = 'presumed synchronous (tidally locked)'

    body_facts["Ariel"] = {}
    body_facts["Ariel"]["Names:"] = "Ariel, Uranus I"
    body_facts["Ariel"]["Mass:"] = "1.2331 * 10^21 kg"
    body_facts["Ariel"]["Mean Radius:"] = '578.9 km'
    body_facts["Ariel"]["Apoapsis:"] = ' km'
    body_facts["Ariel"]["Periapsis:"] = ' km'
    body_facts["Ariel"]["Semi-major Axis:"] = '190,900 km'
    body_facts["Ariel"]["Orbital Period:"] = '2d 12h 28m 48s (sidereal)'
    body_facts["Ariel"]["Mean Orbital Velocity:"] = '5.51 km/s'
    body_facts["Ariel"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    body_facts["Miranda"] = {}
    body_facts["Miranda"]["Names:"] = "Miranda, Uranus V"
    body_facts["Miranda"]["Mass:"] = "6.293 * 10^19 kg"
    body_facts["Miranda"]["Mean Radius:"] = '235.8 km'
    body_facts["Miranda"]["Apoapsis:"] = ' km'
    body_facts["Miranda"]["Periapsis:"] = ' km'
    body_facts["Miranda"]["Semi-major Axis:"] = '129,390 km'
    body_facts["Miranda"]["Orbital Period:"] = '1d 9h 55m 24.6s (sidereal)'
    body_facts["Miranda"]["Mean Orbital Velocity:"] = '6.66 km/s'
    body_facts["Miranda"]["Synodic Rotation:"] = 'synchronous (tidally locked)'

    // Neptunian Moons
    body_facts["Triton"] = {}
    body_facts["Triton"]["Names:"] = "Triton"
    body_facts["Triton"]["Mass:"] = "2.1389 * 10^22 kg"
    body_facts["Triton"]["Mean Radius:"] = '1,353.4 km'
    body_facts["Triton"]["Apoapsis:"] = '354,764.68 km'
    body_facts["Triton"]["Periapsis:"] = '354,753.32 km'
    body_facts["Triton"]["Semi-major Axis:"] = '354,759 km'
    body_facts["Triton"]["Orbital Period:"] = '5d 21h 2m 40.2s (sidereal)'
    body_facts["Triton"]["Mean Orbital Velocity:"] = '4.39 km/s'
    body_facts["Triton"]["Synodic Rotation:"] = 'synchronous (tidally locked)'
    body_facts["Triton"]["Sidereal Rotation:"] = '5d 21h 2m 53s'
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
        fill(255, 255, 255, random(5, 60))
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
    screen_pos.x = (planet.position.x - planet_data.selected_planet.position.x) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
    screen_pos.y = (planet.position.y - planet_data.selected_planet.position.y) / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
    
    let text_offset = createVector(10, -5, 0)

    textSize(12)
    text(planet.name, screen_pos.x + text_offset.x, screen_pos.y + text_offset.y)

    noFill()
    strokeWeight(1)
    stroke(100)
    circle(screen_pos.x, screen_pos.y, planet.draw_radius * 3.5 / planet_data.MANUAL_SCALE_OFFSET)

    pop()
}

function draw_zoom_info_label() {
    push()
    fill(155)
    textAlign(CENTER)

    let base_x = 0;
    let base_y = 0
    
    let text_offset = createVector(10, SCREEN_HEIGHT / 2 - 20, 0)

    textSize(12)
    text("Use UP and DOWN arrows, or W and S keys, to zoom IN and OUT.", base_x + text_offset.x, base_y + text_offset.y)
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
    mouse_pos.x += planet_data.selected_planet.position.x / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
    mouse_pos.y += planet_data.selected_planet.position.y / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET)
    
    planet_data.selected_planet.children.forEach(planet => {
        let planet_pos = createVector(planet.position.x / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET), planet.position.y / (planet_data.DRAW_SCALE * planet_data.MANUAL_SCALE_OFFSET))

        if (mouse_pos.dist(planet_pos) < HOVER_CUTOFF_DISTANCE) {
            hovered_planet = planet
            return hovered_planet;
        }
    });

    // let planet_pos = createVector(planet_data.selected_planet.position.x / planet_data.DRAW_SCALE, planet_data.selected_planet.position.y / planet_data.DRAW_SCALE)
    // if (mouse_pos.dist(planet_pos) < HOVER_CUTOFF_DISTANCE) {
    //     hovered_planet = planet_data.selected_planet
    // }

    return hovered_planet;
}

// Focuses camera on chosen planet
function select_planet(name) {
    if (name == planet_data.selected_planet.name)
        return;

    let planets = planet_data.planets;
    planets.forEach(planet => {
        if (planet.name == name) {
            UTIL.prev_planet = planet_data.selected_planet
            planet_data.selected_planet = planet

            UTIL.previous_draw_scale = UTIL.next_draw_scale
            UTIL.next_draw_scale /= planet_data.selected_planet.focus_scale
            UTIL.transition_time = 0

            PATH_SETTINGS.DOT_FREQUENCY /= 200

            clear_path_dots()
            
            planet_data.SPEED_SCALE /= 50
            UTIL.next_speed_scale = planet_data.SPEED_SCALE
            
            planet_data.UPDATE_ITERATIONS *= 50

            planet_data.draw_rings = true
            
            return
        }
    });
}

// Interpolates between previously selected planet and currently selected
function process_planet_select() {
    let dt = deltaTime / planet_data.SPEED_SCALE

    for (let i = 0; i < planet_data.UPDATE_ITERATIONS; i++) {

        if (UTIL.transition_time < ZOOM_TIME) {
            UTIL.processing = true
            UTIL.transition_time += dt / planet_data.UPDATE_ITERATIONS;
    
            planet_data.DRAW_SCALE = lerp(UTIL.previous_draw_scale, UTIL.next_draw_scale, UTIL.transition_time / ZOOM_TIME)
    
            if (UTIL.previous_draw_scale < UTIL.next_draw_scale) {
                // Zooming out
                UTIL.prev_planet.draw_radius = lerp (UTIL.prev_planet.zoomed_radius, planet_data.selected_planet.child_radius, UTIL.transition_time / ZOOM_TIME)

                UTIL.prev_planet.children.forEach((child) => {
                    child.draw_radius = lerp(planet_data.selected_planet.child_radius, 1, UTIL.transition_time / ZOOM_TIME)
                })
    
                planet_data.focus_pos.x = lerp (UTIL.prev_planet.position.x, planet_data.selected_planet.position.x, UTIL.transition_time / ZOOM_TIME)
                planet_data.focus_pos.y = lerp (UTIL.prev_planet.position.y, planet_data.selected_planet.position.y, UTIL.transition_time / ZOOM_TIME)
            }
            else {
                // Zooming in
                planet_data.selected_planet.draw_radius = lerp (planet_data.selected_planet.parents[0].child_radius, planet_data.selected_planet.zoomed_radius, UTIL.transition_time / ZOOM_TIME)

                planet_data.selected_planet.children.forEach((child) => {
                    child.draw_radius = lerp(1, planet_data.selected_planet.child_radius, UTIL.transition_time / ZOOM_TIME)
                })

                planet_data.focus_pos.x = lerp (UTIL.prev_planet.position.x, planet_data.selected_planet.position.x, UTIL.transition_time / ZOOM_TIME)
                planet_data.focus_pos.y = lerp (UTIL.prev_planet.position.y, planet_data.selected_planet.position.y, UTIL.transition_time / ZOOM_TIME)
            }

    
        } else if (UTIL.previous_draw_scale != UTIL.next_draw_scale){
            planet_data.DRAW_SCALE = UTIL.next_draw_scale
            planet_data.SPEED_SCALE = UTIL.next_speed_scale
            UTIL.previous_draw_scale = UTIL.next_draw_scale

            UTIL.processing = false

            if (planet_data.selected_planet.name == "Sun"){
                planet_data.DRAW_SCALE = planet_data.sun.focus_scale
                planet_data.draw_rings = false
            }
        }
        else {
            planet_data.focus_pos.x = planet_data.selected_planet.position.x
            planet_data.focus_pos.y = planet_data.selected_planet.position.y
        }
    }
}

// Resets selected planet to the sun
function deselect_planets() {
    if (planet_data.selected_planet.name == "Sun"){
        planet_data.DRAW_SCALE = planet_data.sun.focus_scale
        return;
    }
    
    UTIL.prev_centerx = planet_data.selected_planet.position.x
    UTIL.prev_centery = planet_data.selected_planet.position.y

    UTIL.previous_draw_scale = planet_data.DRAW_SCALE
    UTIL.next_draw_scale *= planet_data.selected_planet.focus_scale
    UTIL.transition_time = 0

    UTIL.prev_planet = planet_data.selected_planet

    PATH_SETTINGS.DOT_FREQUENCY *= 200

    clear_path_dots()
    
    UTIL.next_speed_scale = planet_data.SPEED_SCALE * 50

    planet_data.UPDATE_ITERATIONS /= 50

    planet_data.selected_planet = planet_data.selected_planet.parents[0]
}

function clear_path_dots() {
    let planets = planet_data.planets
    planets.forEach((body) => {
        body.path_dots = []
    })
}