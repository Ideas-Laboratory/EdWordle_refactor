import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  HomeWrapper,
} from './style';


class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div> home components here, child components need be contained in ./components, but styled in ./style</div>
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) =>({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
