import logo from './logo.svg';
import './App.css';

import Canvas from "./Canvas.js";
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const drawCircle = (context, pos_x, pos_y) => {
    console.log("Drawing circle")
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = '#000000'
    context.beginPath()
    context.arc(pos_x, pos_y, 20, 0, 2*Math.PI)
    context.fill()
    context.closePath();
  };


  return (
    <Canvas 
    draw={drawCircle}/>
  );
}

export default App;
