import React from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
// const { Sider } = Layout;
export default class MySider extends React.Component {
    render() {
        return (
            <div className="toolsContainer">
                <div className="tools">

                    <div className="item">Export </div>
                    <hr className="sp" />
                    <div className="item">Re-Layout</div>
                    <hr className="sp" />
                    <div className="item">Edit-Words</div>
                    <hr className="sp" />
                    <div className="item">Force On</div>
                    <hr className="sp" />
                    <div className="item">Show Outline</div>
                </div>
            </div>
        )
    }
}