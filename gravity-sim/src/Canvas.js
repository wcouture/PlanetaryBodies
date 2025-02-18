import React, { useRef, useState, useEffect } from 'react';

const useCanvas = (drawPlanets, updateApp) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const draw_loop = async () => {
        const delay = () => new Promise((resolve) => setTimeout(resolve, 10));
        while(true) {
            drawPlanets()
            await delay();
        }
    }

    useEffect( () => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        const context = canvas.getContext('2d')
        context.scale(2,2)
        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 5

        contextRef.current = context;
        updateApp()
        draw_loop();
    }, [drawPlanets, updateApp])

    return {canvasRef, contextRef};
}

const Canvas = props => {
    const {drawCircle, clearScreen, ...rest} = props;

    const [active, setActive] = useState(true)
    const [origin, setOrigin] = useState({x:600,y:400})
    const [planetoid] = useState({mass: 1, x: 0, y: 0})
    const [orbit] = useState({r_min: 100, r_max: 200, eccentricity: 0, a: 0, b: 0, p: 0, theta: 0, delta_A: 0})

    orbit.p = 1 / ((1/orbit.r_max + 1/orbit.r_min) / 2);
    orbit.eccentricity = (orbit.r_max - orbit.r_min) / (orbit.r_max + orbit.r_min);

    orbit.a = (orbit.r_max + orbit.r_min) / 2;
    orbit.b =  Math.sqrt(orbit.r_max * orbit.r_min)
    
    const updateApp = async () => {
        const delay = () => new Promise((resolve) => setTimeout(resolve, 10));
        while (active) {

            // Increment theta
            orbit.theta += .1
            orbit.theta %= 360

            let radians = orbit.theta * (Math.PI / 180);

            // Calculate new r
            let r = orbit.p / (1 + orbit.eccentricity * Math.cos(radians))

            let y_offset = Math.sin(radians) * r;
            let x_offset = Math.cos(radians) * r;

            planetoid.x = x_offset;
            planetoid.y = y_offset;
            
            // console.log("r: ", r)
            // console.log("Theta: ", orbit.theta)
            // console.log("x_offset:, ", origin.x + x_offset)
            // console.log("y_offset:, ", origin.y + y_offset)

            await delay();
        }
    }

    const drawPlanets = () => {
        clearScreen(contextRef.current);
        
        // Draw static body
        drawCircle(contextRef.current, origin.x, origin.y, 20)

        // Draw orbiting body
        drawCircle(contextRef.current, origin.x + planetoid.x, origin.y + planetoid.y, 10)
    }   

    const {canvasRef, contextRef} = useCanvas(drawPlanets, updateApp);

    

    return (
        <canvas
        ref={canvasRef}
        {...rest}
        />
    );
}

export default Canvas