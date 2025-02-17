import React, { useRef, useState, useEffect } from 'react';

const useCanvas = (draw, updateApp) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

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
    }, [draw, updateApp])

    return {canvasRef, contextRef};
}

const Canvas = props => {
    const {draw, ...rest} = props;

    const [active, setActive] = useState(true)
    const [planetoid] = useState({x: 0, y: 0, velocity: [1,1], accelartion: [0,0]})
    
    const updateApp = async () => {
        const delay = () => new Promise((resolve) => setTimeout(resolve, 500));
        while (active) {
            draw(contextRef.current, planetoid.x, planetoid.y);
            planetoid.x += planetoid.velocity[0];
            planetoid.y += planetoid.velocity[1];
            await delay();
        }
    }

    const {canvasRef, contextRef} = useCanvas(draw, updateApp);

    const handleMouseDown = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        setActive(false)
        draw(contextRef.current, offsetX, offsetY)
    }

    return (
        <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        {...rest}
        />
    );
}

export default Canvas