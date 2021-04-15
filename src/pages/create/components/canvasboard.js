import React, { useEffect, useRef } from 'react';
import { BoardWrapper } from '../style';
import Matter from 'matter-js';

const CanvasBoard = () => {
    const boxRef = useRef(null);
    const canvasRef = useRef(null);
    useEffect(() => {
      let Engine = Matter.Engine
      let Render = Matter.Render
      let World = Matter.World
      let Bodies = Matter.Bodies
      let engine = Engine.create({})
      let render = Render.create({
        element: boxRef.current,
        engine: engine,
        canvas: canvasRef.current,
        options: {
          background: 'white',
          wireframes: false,
        },
      });
      const floor = Bodies.rectangle(150, 300, 300, 20, {
        isStatic: true,
        render: {
          fillStyle: 'blue',
        },
      });
      const ball = Bodies.circle(150, 0, 10, {
        restitution: 1.2,
        render: {
          fillStyle: 'red',
        },
      });
      World.add(engine.world, [floor, ball]);
      Engine.run(engine);
      Render.run(render);
    }, []);
    return (
      <BoardWrapper>
        <canvas ref={canvasRef} />
     </BoardWrapper>
    )
}

export default CanvasBoard;