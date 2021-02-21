import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class Links extends PureComponent {
  render() {
    return (
    // 这里需要 Wrapper 哦
      <div> Links components here, child components need be contained in ./components, but styled in ./style</div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) =>({

})

export default connect(mapStateToProps, mapDispatchToProps)(Links);
