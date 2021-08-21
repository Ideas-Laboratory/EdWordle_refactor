import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import { actionCreators } from './store';
import {useSpring, animated} from 'react-spring';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavWrapper,
} from './style'

const getItemClassName = (item) => {
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

const SpringItem = (underlineNav, item) => {
  console.log(`underlineNav: ${underlineNav}, item: ${item}`);
  const underlineProps = useSpring({
    from: { 
      borderBottom: '1px solid white'
    },
    borderBottom: underlineNav === item ? '1px solid black' : '1px solid white',
  });

  return (
    <animated.span style={underlineProps}>
      { item.charAt(0).toUpperCase() + item.slice(1) }
    </animated.span>
  )
}

const InitMatch = (item) => {
  const [ underlineNav, toggleUnderline ] = useState('');
  const match = useRouteMatch('/' + item);
  useEffect(() => toggleUnderline(item), [ match ]);
  return SpringItem(underlineNav, item);
}

const Header = (props) => {

  const { 
    navList,
    handleMouseEnter,
    handleMouseLeave
  } = props;
  
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link style={{textDecoration: 'none'}} to='/'>
          <Logo> EdWordle </Logo>
        </Link>
        <Nav>
          {
            navList.map((item) => (
              <NavLink
                className="nav-item"
                key={item}
                style={{textDecoration: 'none'}}
                to={`/${item}`}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                { InitMatch(item) }
              </NavLink>
            ))
          }
        </Nav>
      </NavWrapper>
    </HeaderWrapper>
  )
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


          {/* {
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
            } */}