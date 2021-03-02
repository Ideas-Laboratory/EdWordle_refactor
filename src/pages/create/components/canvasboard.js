import React from 'react';
import { BoardWapper } from '../style';
export default class CanvasBoard extends React.Component {
    render() {
        return (
            <BoardWapper>
                <canvas></canvas>
            </BoardWapper>
        )
    }
}