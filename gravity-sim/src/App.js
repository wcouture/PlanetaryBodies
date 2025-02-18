import logo from './logo.svg';
import './App.css';

import Canvas from "./Canvas.js";
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const drawCircle = (context, pos_x, pos_y, radius) => {
    context.fillStyle = '#AAA'
    context.beginPath()
    context.arc(pos_x, pos_y, radius, 0, 2*Math.PI)
    context.fill()
    context.closePath();
  };

  const clearScreen = (context) => {
    context.fillStyle = '#000000';
    context.beginPath()
    context.rect(0, 0, context.canvas.width, context.canvas.height)
    context.fill()
  }


  return (
    <Canvas 
    drawCircle={drawCircle}
    clearScreen={clearScreen}/>
  );
}

export default App;
