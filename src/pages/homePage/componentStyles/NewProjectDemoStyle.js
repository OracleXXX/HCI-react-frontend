//精选房源
import styled from "styled-components";
import nextArrow from '../../../statics/imgs/homePageImgs/nextArrow.png';
import prevArrow from '../../../statics/imgs/homePageImgs/prevArrow.png';


export const NewProjectDemoWrapper = styled.div`
  width: 100%;
  height: 640px;
  border-top: 1px solid #ffffff;
  background-color: #F6F8F9;
`;


export const SliderTitle = styled.div`
  width: 720px;
  height: 122px;
  margin: 57px auto 0;
 
  & .title {
    width: 128px;
    height: 47px;
    line-height: 47px;
    margin: 0 auto;
    font-family:SourceHanSansSC-Bold;
    font-size:32px;
    color:#333333;
    text-align:center;
  }
  & .rec {
    width: 50px;
    height: 3px;
    margin: 16px auto 0;
    border-radius: 1.5px;
    background-color: #2D84FF;
  }
  & .subTitle {
    width: 720px;
    height: 22px;
    margin: 37px auto 0;
    font-family:PingFangSC-Regular;
    font-size:15px;
    color:#999999;
    text-align:center;
    line-height:22px;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 1230px;
  height: 330px;


  margin: 54px auto 113px; 
  & .button:hover {
    border: 1px solid blue;
  }
`;
export const PrevArrow = styled.div`
  position: absolute;
  top: 96px; 
  left: -91px;
  width: 56px;
  height: 56px;
  cursor: pointer;
  border: 1px solid transparent;
  background-image: url(${prevArrow});
`;

export const NextArrow = styled.div`

  position: absolute;
  
  top: 96px;
  right: -91px; 
  width: 56px;
  height: 56px;
  cursor: pointer;
  border: 1px solid transparent;
  background-image: url(${nextArrow});
`
export const Item = styled.div`
  position: relative;
  width: 380px;
  height: 293px;  
  margin: 0 15px;
  border-radius: 19px;
  & img{
    width: 380px;
    height: 248px;
    border-radius: 19px;
    overflow: hidden;
  }
  & .intro {
    margin-top: 23px;
  }
  & .intro-left {
    font-family: HiraginoSans-W6;
    color: #DE2F2F;
    line-height: 22px;
    font-size: 24px;
    float: left;
    & .perMonth {
      font-family: SourceHanSansSC-Medium;
      font-size: 16px;    
    }
  }
  & .intro-right {  
    font-family: SourceHanSansSC-Normal;
    color: #333333;
    text-align: right;
    line-height: 22px;
    float: right;
    font-size: 16px;
  }
`;


export const InnerImg = styled.div`
  position: absolute;
  top: 70%;
  left: 16px;
  width: 348px;
  height: 30px;
  line-height: 30px;
  
  & .addr {
    font-family: SourceHanSansSC-Medium;
    font-size: 18px;
    color: #FFFFFF;  
    display: inline-block;
    float: left;
    & .addrIcon {
      display: inline-block;
      width: 12px;
      height: 15px;
      margin-right: 8px;
      
    }
  }
  & .projectMoreInfo {
    display: inline-block;
    float: right;
    width: 72px;
    height: 30px;
    background: rgba(0,0,0,0.20);
    border: 1px solid rgba(255,255,255,0.60);
    border-radius: 19px;
    & span {
      margin: 0 8px 0 14px;
      font-family: SourceHanSansSC-Regular;
      font-size: 14px;
      color: #F6F8F9;
    }
    & img {
      display: inline-block;
      width: 7px;
      height: 12px;       
    } 
  }
  & .projectMoreInfo:hover {
    border: 1px solid dodgerblue;
    
  }
`;