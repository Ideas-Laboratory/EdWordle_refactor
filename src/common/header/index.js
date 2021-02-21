import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
} from './style'

class Header extends PureComponent {

  render() {
    return (
      <HeaderWrapper> 
        <Link to='/'>
          <div> logo here</div>
        </Link>
        <div> other, pls use styled</div>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);