import React, { useEffect, useRef } from 'react';
import { BoardWrapper } from '../style';
import Matter from 'matter-js';

const CanvasBoard = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  // useEffect(() => {
  //   let Engine = Matter.Engine
  //   let Render = Matter.Render
  //   let World = Matter.World
  //   let Bodies = Matter.Bodies
  //   let engine = Engine.create({})
  //   let render = Render.create({
  //     element: boxRef.current,
  //     engine: engine,
  //     canvas: canvasRef.current,
  //     options: {
  //       background: 'white',
  //       wireframes: false,
  //     },
  //   });
  //   const floor = Bodies.rectangle(150, 300, 300, 20, {
  //     isStatic: true,
  //     render: {
  //       fillStyle: 'blue',
  //     },
  //   });
  //   const ball = Bodies.circle(150, 0, 10, {
  //     restitution: 1.2,
  //     render: {
  //       fillStyle: 'red',
  //     },
  //   });
  //   World.add(engine.world, [floor, ball]);
  //   Engine.run(engine);
  //   Render.run(render);
  // }, []);


  const Paint = (e) => { // 每次点击canvas
    const canvas = canvasRef.current;
    const { left, top, right, bottom } = canvas.getBoundingClientRect();
    console.log(left, top, right, bottom);
    console.log(canvas.width, canvas.height);
    const middleX = canvas.width / 2;
    const middleY = canvas.height / 2;

    const context = canvas.getContext("2d");
    context.fillRect(middleX, middleY, 5, 5);

    var radius = 0,angle = 0;
    var x = 0,y=0;
    var center = {
      x : canvas.width/2,
      y : canvas.height/2
    }
    context.lineWidth = 10;
    context.strokeStyle = "#0096FF";
    context.beginPath();
    context.moveTo(center.x,center.y);
    
    for(var n=0; n< 150; n++){
      radius += 0.75;
      angle += (Math.PI*2)/50;
      x = center.x + radius*Math.cos(angle);
      y = center.y + radius*Math.sin(angle);
      context.lineTo(x,y);
    }
    context.stroke();
    
  }

  return (
    <BoardWrapper>
      <canvas ref={canvasRef}
        onClick={e => Paint(e)}
      />
    </BoardWrapper>
  )
}

export default CanvasBoard;