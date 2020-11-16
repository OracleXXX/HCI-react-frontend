
import styled from "styled-components";
import nextArrow from '../../../statics/imgs/homePageImgs/nextArrow.png';
import prevArrow from '../../../statics/imgs/homePageImgs/prevArrow.png';

//精选房源 New Project Demo
export const NewProjectDemoWrapper = styled.div`
  width: calc(192rem - 17px);
  height: 64rem;

  border-top: 1px solid #ffffff;
  background-color: #F6F8F9;
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
  & .button:hover {
    border: 1px solid blue;
  }
`;
export const PrevArrow = styled.div`
  position: absolute;
  top: 9.6rem; 
  left: -9.1rem;
  width: 5.6rem;
  height: 5.6rem;
  cursor: pointer;
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


export const InnerImg = styled.div`
  position: absolute;
  top: calc(24.8rem - 6rem - 1px);
  width: 38rem;
  height: 6rem;
  padding: 0 1.6rem;
  box-sizing: border-box;
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  line-height: 3rem;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.80) 98%);
  
  & .addr {
    font-family: SourceHanSansSC-Medium;
    font-size: 1.8rem;
    line-height: 3rem;
    color: #FFFFFF;  
    display: inline-block;
    float: left;
    height: 3rem;
    margin: 1.5rem auto;
    & .addrIcon {
      display: inline-block;
      width: 1.2rem;
      height: 1.5rem;
      margin-right: .8rem;
      
    }
  }
  & .projectMoreInfo {
    display: inline-block;
    float: right;
    width: fit-content;
    height: 3rem;
    padding-right: 1.4rem;
    background: rgba(0,0,0,0.20);
    border: 1px solid rgba(255,255,255,0.60);
    border-radius: 1.9rem;
    margin: 1.5rem auto;
    cursor: pointer;
    & span {
      margin: 0 0.8rem 0 1.4rem;
      font-family: SourceHanSansSC-Regular;
      font-size: 1.4rem;
      line-height: 3rem;
      vertical-align: top;
      color: #F6F8F9;
    }
    & img {
      display: inline-block;
      width: 0.7rem;
      height: 1.2rem;  
      margin: 0.9rem 0;    
    } 
  }
  & .projectMoreInfo:hover {
    border: 1px solid dodgerblue;
    
  }
`;