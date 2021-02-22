
import styled from "styled-components";
import nextArrow from '../../../statics/imgs/homePageImgs/nextArrow.png';
import prevArrow from '../../../statics/imgs/homePageImgs/prevArrow.png';




//精选房源 New Project Demo
export const NewProjectDemoWrapper = styled.div`
  width: 100vw;
  height: 64rem;

  border-top: 1px solid #ffffff;
  background-color: #F6F8F9;
  & .button:hover {
    border: 0.1rem solid #2D84FF;
    box-shadow: 0 0 0 0.2rem  rgba(45, 132, 255, 0.5);
    -moz-outline-radius: 0.8rem;
  }
  & .button:active{ -moz-transform: translate(0.1rem,0.1rem); -webkit-transform: translate(0.1rem,0.1rem); -o-transform: translate(0.1rem,0.1rem); }
`;


export const SliderTitle = styled.div`
  width: 72rem;
  height: auto;
  margin: 5.7rem auto 0;
 
  & .title {
    width: 12.8rem;
    height: 4.7rem;
    line-height: 4.7rem;
    margin: 0 auto;
    font-family:SourceHanSansSC-Bold;
    font-size:3.2rem;
    color:#333333;
    text-align:center;
    cursor: pointer;
    white-space: nowrap;
  }
  & .rec {
    width: 5rem;
    height: 0.3rem;
    margin: 1.6rem auto 0;
    border-radius: 0.15rem;
    background-color: #2D84FF;
  }
  & .subTitle {
    width: 72rem;
    height: 2.2rem;
    margin: 3.7rem auto 0;
    font-family:PingFangSC-Regular;
    font-size: 1.5rem;
    color:#999999;
    text-align:center;
    line-height:2.2rem;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 123rem;
  height: 33rem;
  margin: 5.4rem auto 11.3rem; 

`;
export const PrevArrow = styled.div`
  position: absolute;
  top: 9.6rem; 
  left: -9.1rem;
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  border-radius: 2.8rem;
  border: 1px solid transparent;
  background-image: url(${prevArrow});
  background-size: contain;
`;

export const NextArrow = styled.div`

  position: absolute;
  
  top: 9.6rem;
  right: -9.1rem; 
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
  border: 1px solid transparent;
  background-image: url(${nextArrow});
  background-size: contain;
  border-radius: 2.8rem;
`;
export const Item = styled.div`
  position: relative;
  width: 38rem;
  height: 29.3rem;  
  margin: 0 1.5rem;
  border-radius: 0.8rem;
  & img{
    width: 38rem;
    height: 24.8rem;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  & .intro {
    margin-top: 2.3rem;
  }
  & .intro-left {
    font-family: HiraginoSans-W6;
    color: #DE2F2F;
    line-height: 2.2rem;
    font-size: 2.4rem;
    float: left;
    & .perMonth {
      font-family: SourceHanSansSC-Medium;
      font-size: 1.6rem;    
    }
  }
  & .intro-right {  
    font-family: SourceHanSansSC-Normal;
    color: #333333;
    text-align: right;
    line-height: 2.2rem;
    float: right;
    font-size: 1.6rem;
  }
`;


export const ImgBottom = styled.div`
  width: 38rem;
  height: 6rem;
  z-index: 200;
  position: absolute;
  bottom: 4.5rem;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.80) 98%);
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  padding:0 0.8rem;
  box-sizing: border-box;
  border-radius: 0 0 0.8rem 0.8rem;
  & .img-bottom-left {
  height: 2.2rem;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-family: SourceHanSansSC-Medium;
  & img {
    width: 1.2rem;
    height: 1.5rem;
    margin: auto 0.8rem auto 0
  } 
  }
`;
export const MoreInfo = styled.div`
  cursor: pointer;
  width: 7.2rem;
  height: 3rem;
  border: 0.1rem solid rgba(255,255,255,0.6);
  border-radius: 1.9rem;
  padding: 0 1.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around; 
  align-items: center;
  white-space: nowrap;
  background: rgba(0,0,0,0.20);
  font-family: SourceHanSansSC-Regular;
  font-size: 1.4rem;
  line-height: 3rem;
  color: #FFFFFF;
  & img {
    width: 0.7rem;
    height: 1.2rem;
    margin-left: 0.5rem;
  }

  
`;