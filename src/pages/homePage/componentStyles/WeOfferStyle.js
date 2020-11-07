import styled from "styled-components";

/*  我们提供什么, We offer  */
export const WeOfferWrapper = styled.div`
  position: relative;
  width: 1204px;
  height: 461px;
  //border: 1px solid red;
  margin: 86px auto;
  font-size: 0 
`;
    /*  左边文字部分  */
export const WeOfferLeft = styled.div`
  display: inline-block;
  width: 600px;
  height: 100%;
  //border: 1px dashed greenyellow;
  overflow: hidden; //让行内块元素的基准线变为一起
  & .offerTitle {
    position: relative;
    width: 192px;
    height: 50px;
    padding-top: 15px;
    font-family: SourceHanSansSC-Bold;
    font-size: 32px;
    color: #333333;
    text-align: center;     
    & .rec {
      position: absolute;
      bottom: 0;
      width: 50px;
      height: 3px;
      border-radius: 1.5px;
      background-color: #2D84FF;
    }
  }
  & .offerContent {
    width: 564px;
    font-family:SourceHanSansSC-Regular;
    font-size:15px;
    color:#555555;
    line-height:26px;
    text-align:left;
    margin-top: 28px;
  
  }
`;
    /*  右边图片部分  */
export const WeOfferRight = styled.div`
  display: inline-block;
  width: 600px;
  height: 100%;
  //border: 1px dashed black;
  overflow: hidden;
  & img {
    width: 600px;
    height: 340px;
  }
`;
  /*  三个图标  */
export const WeOfferIcons = styled.div`
  position: absolute;
  left: 0;
  top: 252px;
  width: 730px;
  height: 209px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 18px 0 #E6E6E6;
  border-radius: 8px;
`;

export const IconItem = styled.div`
  display: inline-block;
  width: 239px;
  height: 209px;
  margin: 40px auto 0;
  overflow: hidden;
  text-align: center;
  & .offerIcon {
    width: 86px;
    height: 86px;
    background-color: #F5F8FA;
    background-image: url("../../../statics/imgs/homePageImgs/RealEstateRecmd.svg");
  }
  & .offerName {
  
  margin: 23px auto;
    font-family: SourceHanSansSC-Regular;
    font-size: 14px;
    color: #333333;
  }
`;

export const DivLine = styled.div`
  display: inline-block;
  width: 1px;
  height: 72px;
  background-color: #EEEEEE;
  vertical-align: top;
  margin-top: 69px;

`;

