import React from 'react';
import { ToolsWapper,Tools,Item } from '../style';
// import {Button} from 'antd';
export default class ToolBox extends React.Component {
    render() {
        return (
            <ToolsWapper>
                <Tools>
                    <Item>Export</Item>
                    <hr className="sp" />
                    <Item>Re-Layout</Item>
                    <hr className="sp" />
                    <Item>Edit Words</Item>
                    <hr className="sp" />
                    <Item>Force On</Item>
                    <hr className="sp" />
                    <Item>Show Outline</Item>
                </Tools>
            </ToolsWapper>
        )
    }
}