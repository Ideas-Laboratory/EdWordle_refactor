import React from 'react';
import { ToolsWapper,Tools,EditPanel } from '../style';
import { CaretRightOutlined } from "@ant-design/icons";
// import {Button} from 'antd';
export default class ToolBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleExport = (e) =>{
        alert(e.target.value)
    }
    render() {
        return (
            <ToolsWapper>
                <Tools>
                    <li>
                        Edit Words
                        <CaretRightOutlined style={{fontSize:'17px',marginLeft:'10px',color:'#AAA'}}/>
                        <EditPanel>
                        <li>Add words </li>
                        <li>Edit words</li>
                    </EditPanel>
                    </li>
                    <hr/>
                    <li>
                        Force On
                    </li>
                    <hr/>
                    <li>
                        Show Outline
                    </li>
                    <hr/>
                    <li onClick={this.handleExport}>
                        Export
                    </li>
                    <hr />
                    <li>
                        Re-Layout
                    </li>
                </Tools>
            </ToolsWapper>
        )
    }
}