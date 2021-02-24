import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavWrapper,
  NavItem,
  UnderlineSpan
} from './style'

class Header extends PureComponent {


  render() {

    const navList = ['Home', 'Create', 'Guide', 'About', 'Links'];
    const { currentNav, handleNav } = this.props;

    return (
      <HeaderWrapper> 
        <NavWrapper>
          <Link style={{textDecoration:'none'}} to='/'>
            <Logo> EdWordle </Logo>
          </Link>
          <Nav>
            {
              navList.map((item) => (
                <Link 
                  style={{textDecoration:'none'}} 
                  to={`/${item}`}
                  onClick={() => handleNav(item)}
                >
                  <NavItem> 
                    <CSSTransition
                      key={item}
                      in={currentNav === item}
                      timeout={500}
                      classNames="underline"
                    >
                      <UnderlineSpan className={ currentNav === item ? 'nav-underline' : 'nav-underline-none' }>
                        {item}
                      </UnderlineSpan>
                    </CSSTransition>
                  </NavItem>
                </Link>
              ))
            }
          </Nav>
        </NavWrapper>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentNav: state.getIn(['header', 'currentNav'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNav(nextNav) {
      dispatch(actionCreators.navChangeAction(nextNav));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);