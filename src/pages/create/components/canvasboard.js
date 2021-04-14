import React from 'react';
import { BoardWapper } from '../style';
import Matter from 'matter-js';
export default class CanvasBoard extends React.Component {
    render() {
        return (
            <BoardWapper>
                <canvas></canvas>
            </BoardWapper>
        )
    }
}