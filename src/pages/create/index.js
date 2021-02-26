import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CreateStyle } from './style';
// import { Layout } from 'antd';
import MySider from './Sider';
import Canvas from './Canvas';

// const { Content } = Layout;
class Create extends PureComponent {
  render() {
    return (
      // 这里需要 Wrapper 哦
      <CreateStyle>
        <MySider></MySider>
        <Canvas></Canvas>
      </CreateStyle >
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Create);
