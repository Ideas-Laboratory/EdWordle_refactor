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
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    /* border: 2px solid green; */
`;

export const Logo = styled.div`
    font-size: 30px;
    line-height: 56px;
    color: #333;
    font-family: 'RedHatBold';
    justify-content: left;
    // border: 2px solid red;
`;

export const Nav = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    /* border: 2px solid blue; */
    .nav-item {
        box-sizing: border-box;
        width: 60px;
        margin-left: 40px;
        font-size: 20px;
        cursor: pointer;
        font-family: 'RedHatRegular';
        color: black;
        /* border: 2px solid red; */
    }
`;

// export const UnderlineSpan = styled.span`
//     &.nav-underline {
//         border-bottom: 1px solid black;
//     }    
//     &.nav-underline-none {
//         border-bottom: 1px solid white;
//     }
//     &.underline-enter {
//         transition: all .4s ease-in;
//     }
//     &.underline-enter-active {
//         border-bottom-color: black;
//     }
//     &.underline-exit {
//         transition: all .2s ease-out;
//     }
//     &.underline-exit-active {
//         border-bottom: 1px solid white;
//     }

//     &.nav-magnify {
//         font-size: 22px;
//     }    
//     &.magnify-enter {
//         transition: all .2s ease-out;
//     }
//     &.magnify-enter-active {
//         font-size: 22px;
//     }
//     &.magnify-exit {
//         transition: all .2s ease-out;
//     }
//     &.magnify-exit-active {
//         font-size: 20px;
//     }
// `;