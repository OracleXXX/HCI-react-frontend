import styled from "styled-components";


/*  我们提供什么, We offer  */
export const WeOfferFragment = styled.div`
  width: calc(192rem - 17px);
  height: fit-content;
  

`;
export const WeOfferWrapper = styled.div`
  position: relative;
  width: 120.4rem;
  height: 46.1rem;
  //border: 1px solid red;
  margin: 8.6rem auto;
  font-size: 0;
  display: flex;
  flex-wrap: nowrap;
`;
    /*  左边文字部分  */
export const WeOfferLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60rem;
  height: 19.8rem;
  //border: 1px dashed greenyellow;
  overflow: hidden; //让行内块元素的基准线变为一起
  & .offerTitle {
    position: relative;
    width: 19.2rem;
    height: 5rem;
    padding-top: 1.5rem;
    font-family: SourceHanSansSC-Bold;
    font-size: 3.2rem;
    color: #333333;
    text-align: center;  
    white-space: nowrap;   
    & .rec {
      position: absolute;
      bottom: 0;
      width: 5rem;
      height: 0.3rem;
      border-radius: 0.15rem;
      background-color: #2D84FF;
    }
  }
  & .offerContent {
    width: 56.4rem;
    font-family:SourceHanSansSC-Regular;
    font-size:1.5rem;
    color:#555555;
    line-height:2.6rem;
    text-align:left;
  
  }
`;

    /*  右边图片部分  */
export const WeOfferRight = styled.div`
  display: inline-block;
  width: 60rem;
  height: 100%;
  border-radius: 0.8rem;
  //border: 1px dashed black;
  overflow: hidden;
  & img {
    width: 60rem;
    height: 34rem;
    border-radius: 0.8rem;
  }
`;
  /*  三个图标  */
export const WeOfferIcons = styled.div`
  position: absolute;
  left: 0;
  top: 25.2rem;
  width: 73rem;
  height: 20.9rem;
  background-color: #FFFFFF;
  box-shadow: 0 0.4rem 1.8rem 0 #E6E6E6;
  border-radius: 0.8rem;
`;

export const IconItem = styled.div`
  display: inline-block;
  width: 23.9rem;
  height: 20.9rem;
  margin: 4rem auto 0;
  overflow: hidden;
  text-align: center;
  & .offerIcon {
    width: 8.6rem;
    height: 8.6rem;
    background-color: #F5F8FA;
    background-image: url("../../../statics/imgs/homePageImgs/RealEstateRecmd.svg");
  }
  & .offerName {
  
    margin: 2.3rem auto;
    font-family: SourceHanSansSC-Regular;
    font-size: 1.4rem;
    color: #333333;
  }
`;

export const DivLine = styled.div`
  display: inline-block;
  width: 1px;
  height: 7.2rem;
  background-color: #EEEEEE;
  vertical-align: top;
  margin-top: 6.9rem;

`;

