import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100vh - 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* border: 2px solid red; */
`;

export const ImageContainer = styled.div`
  margin: 20px auto;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* border: 1px solid green; */
`;

export const ImageItem = styled.div`
  height: 350px;
  width: 600px;
  margin: auto 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.left {
    box-shadow: 20px 0px 35px -10px rgba(0,0,0,0.1);
  }
  &.medium {
    box-shadow: 0px 0px 35px -10px rgba(0,0,0,0.1);
  }
  &.right {
    box-shadow: -20px 0px 35px -10px rgba(0,0,0,0.1);
  }
`;

export const Image = styled.img`
	height: auto;
  width: 100%;
  border-radius: 15px;
  border: 2px solid #808080;
  &.image-left {
    mask: linear-gradient(90deg, transparent, #000);
  }
  &.image-right {
    mask: linear-gradient(-90deg, transparent, #000);
  }
`;

export const ActiveDivider = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 0px;
  display: flex;
  justify-content: center;
  /* border: 1px solid green; */
`;

export const ActiveBox = styled.div`
  width: 50%;
  height: 50%;
  border-bottom: 2px solid #808080;
`;


export const TitleContainer = styled.div`
  margin: 30px auto;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid green; */
`;

export const Title = styled.div`
  margin-top: 20px;
  font-size: 100px;
  font-family: 'MilknBalls';
`;

export const Description = styled.div`
  margin-top: 50px;
  width: 625px; 
  font-size: 20px;
  color: gray;
  line-height: 1.5;
  text-align: center;
  font-family: 'RedHatRegular';
`;

export const Button = styled.div`
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 30px;
  color: white;
  background-color: black;
  font-family: 'RedHatRegular';
  font-size: 20px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;