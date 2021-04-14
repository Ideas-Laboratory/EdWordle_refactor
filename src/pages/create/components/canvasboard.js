import React from 'react';
import { BoardWrapper } from '../style';
import Matter from 'matter-js';
export default class CanvasBoard extends React.Component {
    render() {
        return (
            <BoardWrapper>
                <canvas></canvas>
            </BoardWrapper>
        )
    }
}