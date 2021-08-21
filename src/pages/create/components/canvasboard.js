import React from 'react';
import { BoardWapper } from '../style';
import Matter from "matter-js";
import textRenderer from "../text-renderer"
export default class CanvasBoard extends React.Component {
    constructor(props){
        super(props);
        this.canvas = React.createRef();
        this.specified = React.createRef();
    }

    componentDidMount() {
        let canvas = this.canvas.current;
        var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
        canvas.width = Math.floor(canvas.clientWidth * scale);
        canvas.height = Math.floor(canvas.clientHeight * scale);
        let context = canvas.getContext('2d');
        context.scale(scale,scale)
        const wordlist = {
            "Aaren": 1,
            "Aarika": 1,
            "Aaron": 1,
            "Aartjan": 1,
            "Abagael": 1,
            "Abagail": 1,
            "Abahri": 1,
            "Abbas": 1,
            "Abbe": 1,
            "Abbey": 1,
            "Abbi": 1,
            "Abbie": 1,
            "Abby": 1,
            "Abbye": 1,
            "Abdalla": 1,
            "Abdallah": 1,
        }
        var Engine = Matter.Engine,
            Render = textRenderer,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        var engine = Engine.create({
            // positionIterations: 20
            gravity: {
                scale:0,
            }
        });
        var render = textRenderer.create({
            canvas: this.canvas.current,
            engine: engine,
            options: {
                background: 'transparent',
                wireframes: false,
                width: this.canvas.current.clientWidth,
                height: this.canvas.current.clientHeight,
            }
        });
        let radius = 0,angle = 0;
        let x = 0,y=0;
        let center = {
            x : this.canvas.current.clientWidth/2,
            y : this.canvas.current.clientHeight/2
        }
        let blocks = []
        let constraints = []
        for (let word in wordlist){
            radius += 13;
            angle += (Math.PI*2)/7;
            x = center.x + radius*Math.cos(angle);
            y = center.y + radius*Math.sin(angle);
            let boundingBox = measureTextH_W(this.specified.current.getContext('2d'),0,0,250,300,30,'Arial',word);
            let wordBlock = Bodies.rectangle(x, y, boundingBox.width,boundingBox.height, { 
                restitution: 0,
                frictionAir: 0.1,
                friction:0.5,
                mass : wordlist[word],
                render: {
                    fillStyle: '#FFFFFF',
                    text:{
                        color: "#000000",
                        content: word,
                        size: 30,
                    }
                }
            });
            let elastic = Matter.Constraint.create({
                pointA: center,
                bodyB: wordBlock,
                length: 10, 
                stiffness: 0.0002,
                damping: 0.1,
                render:{
                    lineWidth:0,
                    anchors:false,
                }
            });
            blocks.push(wordBlock);
            constraints.push(elastic);
        }
        World.add(engine.world, blocks);
        World.add(engine.world, constraints);

        // add mouse control
        var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                visible: false
                }
            }
        });

        World.add(engine.world, mouseConstraint);

        Matter.Runner.run(engine);

        // setTimeout(()=>{
        //     blocks.forEach(item =>{
        //         Matter.Body.setStatic(item, true);
        //     })
        //     console.log("freeze")
        // }, 3000)

        Render.run(render);
    }
    render() {
        return (
            <BoardWapper>
                <canvas className="play-ground" ref={this.canvas}/>
                <canvas className="text-area" ref={this.specified}/>
            </BoardWapper>
        )
    }
}
const measureTextH_W = (ctx, left, top, width, height, fontsize, fontname, txt)=>{
    // Draw the text in the specified area
    ctx.clearRect(0,0,450,400);
    ctx.save();
    ctx.translate(left, fontsize + 10);
    ctx.font = fontsize +"px "+fontname;
    ctx.fillStyle = "#000000";
    ctx.fillText(txt,0,0);
    var bwidth = ctx.measureText(txt).width;
    ctx.restore();

    // Get the pixel data from the canvas
    var data = ctx.getImageData(left, top, width, height).data,
        first = false,
        last = false,
        desent = 0;
    var r = height,
        c = 0;

    // Find the last line with a non-white pixel
    while(!last && r) {
        r--;
        for(c = 0; c < width; c++) {
            if(data[r * width * 4 + c * 4 + 3]) {
                last = r;
                break;
            }
        }
    }

    // Find the first line with a non-white pixel
    while(r) {
        r--;
        for(c = 0; c < width; c++) {
            if(data[r * width * 4 + c * 4 + 3]) {
                if(r > fontsize+10)
                    desent++;
                first = r;
                break;
            }
        }
    }

    // If we've got it then return the height
    if(first != r) {
        ctx.clearRect(0,0,150,150);
        return {height:(last - first),width:bwidth,desent:desent};
    }

    // We screwed something up...  What do you expect from free code?
    return {height:-1,width:-1,desent:-1};
}
const findNeighbor = (bodies)=>{
    let neighbors = [];
    bodies.forEach((body1,i)=>{
        bodies.forEach((body2,j)=>{
            if(i >= j) return;
            let neighborOfBody1 = Matter.Query.ray(
                [body2],{
                    x : body1.position.x, 
                    y : body1.position.y
                },{
                    x : body2.position.x,
                    y : body2.position.y
                }
            )
            if(neighborOfBody1.size() !== 0){
                neighbors[body1].push(neighborOfBody1.get(0));
            }
        })
    })
}