import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// import { Layout } from 'antd';
import Toolbox from './components/toolbox';
import CanvasBoard from './components/canvasboard';

// const { Content } = Layout;
class Create extends PureComponent {
  render() {
    return (
      // 这里需要 Wrapper 哦
      <div>
        <Toolbox/>
        <CanvasBoard/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Create);
