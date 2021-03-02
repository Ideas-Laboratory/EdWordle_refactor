import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators as headerActionCreators } from '../../common/header/store';

import T1img from '../../statics/img/T1_350x500.png';
import T2img from '../../statics/img/T2_350x500.png';
import T3img from '../../statics/img/T3_350x500.png';

import {
  HomeWrapper,
  ImageContainer,
  ImageItem,
  TitleContainer,
  Title,
  Description,
  Image,
  Button,
  ActiveDivider,
  ActiveBox
} from './style';


class Home extends PureComponent {
  render() {
    const { title, description, changeNavItem } = this.props;

    return (
      <HomeWrapper>
        <ImageContainer>  
          <ImageItem className="left">
            <Image className="image-left" src={T2img} alt=""/>
          </ImageItem>
          <ImageItem className="medium">
            <Image className="image" src={T1img} alt=""/>
          </ImageItem>
          <ImageItem className="right">
            <Image className="image-right" src={T3img} alt=""/>
          </ImageItem>
        </ImageContainer>
        <ActiveDivider>
          <ActiveBox/>
        </ActiveDivider>
        <TitleContainer>
          <Title>
            { title }
          </Title>
          <Description>
            { description }
          </Description>
          <Link to={'/create'} style={{ textDecoration: 'none' }}>
            <Button onClick={changeNavItem}>
              Create Now
            </Button>
          </Link>
        </TitleContainer>
      </HomeWrapper>
    )
  }

}

const mapStateToProps = (state) => ({
  title: state.getIn(['home', 'title']),
  description: state.getIn(['home', 'description'])
})

const mapDispatchToProps = (dispatch) =>({
  changeNavItem() {
    dispatch(headerActionCreators.navChangeAction("Create"));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
