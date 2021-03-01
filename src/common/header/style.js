import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position: relation;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const NavWrapper = styled.div`
    height: 100%;
    width: 95vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 2px solid green; */
`;

export const Logo = styled.div`
    font-size: 30px;
    line-height: 56px;
    color: #333;
    font-family: 'RedHatBold';
    // border: 2px solid red;
`;

export const Nav = styled.div`
    height: 56px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    // border: 2px solid blue; 
`;

export const NavItem = styled.div`
    width: 56px;
    line-height: 56px;
    padding-left: 40px;
    font-size: 20px;
    cursor: pointer;
    font-family: 'RedHatRegular';
    color: black;
    // border: 2px solid red;
`;

export const UnderlineSpan = styled.span`
    &.nav-underline {
        border-bottom: 1px solid black;
    }    
    &.nav-underline-none {
        border-bottom: 1px solid white;
    }
    &.underline-enter {
        transition: all .4s ease-in;
    }
    &.underline-enter-active {
        border-bottom-color: black;
    }
    &.underline-exit {
        transition: all .2s ease-out;
    }
    &.underline-exit-active {
        border-bottom: 1px solid white;
    }
`;