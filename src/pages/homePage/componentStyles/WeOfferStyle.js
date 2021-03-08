import styled from "styled-components";


/*  我们提供什么, We offer  */
export const WeOfferFragment = styled.div`
  width: 100vw;
  height: fit-content;
  

`;
export const WeOfferWrapper = styled.div`
  position: relative;
  width: 120.4rem;
  height: fit-content;
  //border: 1px solid red;
  margin: 8.6rem auto 5.6rem;
  font-size: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
/*  左边文字部分  */
export const WeOfferLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60rem;
  height: 46rem;
  //border: 1px dashed greenyellow;
  overflow: hidden; //让行内块元素的基准线变为一起
  & .offer-title {
    position: relative;
    width: fit-content;
    height: fit-content;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .title {
      width: fit-content;
      height: 4.7rem;
      line-height: 4.7rem;
      font-family: SourceHanSansSC-Bold;
      font-size: 3.2rem;
      color: #333333;
      text-align: center;  
      white-space: nowrap;
    }   
    & .rec {
      width: 5rem;
      height: 0.3rem;
      border-radius: 0.15rem;
      background-color: #2D84FF;
      margin-top: 1.6rem;
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
  width: 60rem;
  height: fit-content;
  border-radius: 0.8rem;
  //border: 1px dashed black;
  overflow: hidden;
  & img {
    width: 60rem;
    height: 46rem;
    border-radius: 0.8rem;
  }
`;
/*  三个图标  */
export const WeOfferIcons = styled.div`
  width: 73rem;
  height: 20.9rem;
  background-color: #FFFFFF;
  box-shadow: 0 0.4rem 1.8rem 0 #E6E6E6;
  border-radius: 0.8rem;
  margin-top: 5.6rem;
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

