import React from 'react';
export default class Canvas extends React.Component {
    render() {
        return (
            <div className="canvasContainer">
                <canvas className="drawpad"></canvas>
            </div>
        )
    }
}