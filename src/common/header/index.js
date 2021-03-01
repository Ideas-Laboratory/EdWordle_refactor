import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavWrapper,
  NavItem,
  UnderlineSpan
} from './style'

class Header extends PureComponent {

  getItemClassName(item) {
    const { currentNav, pointNav } = this.props;
    let ans = "nav-underline-none";
    if (currentNav === item) {
      ans = "nav-underline"
    }
    if (pointNav === item) {
      ans += " nav-magnify"
    }
    return ans;
  }

  render() {
    const { 
      navList, 
      currentNav, 
      handleNav, 
      handleMouseEnter,
      handleMouseLeave,
      pointNav
    } = this.props;

    return (
      <HeaderWrapper>
        <NavWrapper>
          <Link style={{textDecoration: 'none'}} to='/'>
            <Logo> EdWordle </Logo>
          </Link>
          <Nav>
            {
              navList.map((item) => (
                <Link
                  key={item}
                  style={{textDecoration: 'none'}}
                  to={`/${item}`}
                  onClick={() => handleNav(item)}
                >
                  <NavItem 
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <CSSTransition
                      in={currentNav === item}
                      timeout={500}
                      classNames="underline"
                    >
                      <CSSTransition
                        in={pointNav === item}
                        timeout={200}
                        classNames="magnify"
                      >
                        <UnderlineSpan className={this.getItemClassName(item)}>
                          {item}
                        </UnderlineSpan>
                      </CSSTransition>
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
    currentNav: state.getIn(['header', 'currentNav']),
    navList: state.getIn(['header', 'navList']),
    pointNav: state.getIn(['header', 'pointNav'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNav(nextNav) {
      dispatch(actionCreators.navChangeAction(nextNav));
    },
    handleMouseEnter(item) {
      dispatch(actionCreators.magnifyAction(item));
    },
    handleMouseLeave() {
      dispatch(actionCreators.nonMagnifyAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);