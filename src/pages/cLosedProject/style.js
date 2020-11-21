import styled from "styled-components";
import prevArrow from "../../statics/imgs/homePageImgs/prevArrow.png";
import nextArrow from "../../statics/imgs/homePageImgs/nextArrow.png";

//global
export const ClosedProjectDemoWrapper = styled.div`
  width: calc(192rem - 17px);
  height: 89.6rem;
  & .button:hover {
    border: 0.1rem solid #2D84FF;
    box-shadow: 0 0 0 0.2rem  rgba(45, 132, 255, 0.5);
    -moz-outline-radius: 0.8rem;
  }
  & .button:active{ -moz-transform: translate(0.1rem,0.1rem); -webkit-transform: translate(0.1rem,0.1rem); -o-transform: translate(0.1rem,0.1rem); }
  
`;
// title
export const ClosedProjectTitle = styled.div`
  position: relative;
  width: 56rem;
  height: 5.9rem;
  margin: 5.7rem auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
  & .title {
    width: 24.5rem;
    height: 3.8rem;
    line-height: 3.8rem;
    font-family:SourceHanSansSC-Bold;
    font-size:2.6rem;
    color:#333333;
    text-align:center;
    cursor: pointer;
  }

`;
// move bar
export const Rec = styled.div`
    position: absolute;
    bottom: 0;
    width: 56rem;
    height: 0.3rem;
    border-radius: 0.15rem;
    background-color: #F6F6F6;
    box-sizing: border-box;
    & .move-bar-container {
      width: 39.2rem;
      height: inherit;
      margin: 0 auto;
        
    }
    & .move-bar {
      float: left;
      width: 8rem;
      height: inherit;
      background-color: #2D84FF;
    }
    & .right {
      float: right;
    }


`;
// slider
export const SliderWrapper = styled.div`
  position: relative;
  width: 138rem;
  height: 53.4rem;
  margin: 6.6rem auto 11.3rem; 
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  & .slider{

    margin: 0 auto;
    width: 123.2rem;
  }

`;

export const PrevArrow = styled.div`
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3rem;
  background-image: url(${prevArrow});
  background-size: contain;
`;

export const NextArrow = styled.div`
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  border: 1px solid transparent;
  background-image: url(${nextArrow});
  background-size: contain;
  border-radius: 3rem;
  box-sizing: border-box;
`;
export const Item = styled.div`
  width: 27.6rem;
  height: 53.9rem;
  border-radius: 0.8rem;
  box-sizing: border-box;

  margin: 0 1.6rem;
  & .mid-bottom {
    border-radius: 0 0 0.8rem 0.8rem;
    border: 0.1rem solid #DAE1E5;
  }
  
  

`;
export const ItemTop = styled.div`
  position: relative;
  width: 27.6rem;
  height: 20rem;
  overflow: hidden;
& .item-top-img {
  width: inherit;
  height: inherit;
  border-radius: 0.8rem 0.8rem 0 0;
};
`;

export const FixedBottom = styled.div`
  width: inherit;
  height: 3.8rem;
  z-index: 200;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.80) 98%);
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  padding:0 0.8rem;
  box-sizing: border-box;
  & .fixed-bottom-left {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-family: SourceHanSansSC-Medium;
  & img {
    width: 1.1rem;
    height: 1.3rem;
    margin: auto 0.8rem auto 0
  } 
  }
`;
export const MoreInfo = styled.div`
  cursor: pointer;
  width: 6.1rem;
  height: 2.7rem;
  border: 0.1rem solid rgba(255,255,255,0.6);
  border-radius: 1.9rem;
  padding: 0 1.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  white-space: nowrap;
  background: rgba(0,0,0,0.20);
  font-family: PingFangSC-Regular;
  font-size: 1.3rem;
  line-height: 1.9rem;
  & img {
    width: 0.6rem;
    height: 1rem;
    margin-left: 0.5rem;
  }
  
`;


export const ItemMid = styled.div`
  width: inherit;
  height: 2.2rem;
  padding: 1.6rem;

  display: flex;
  justify-content: space-between;
  line-height: 2.2rem;
  
  & .price-month {
    width: fit-content;
   
    color: #DE2F2F;
    vertical-align: top;
  }  
  & .price {
    font-family: HiraginoSans-W6;
    font-size: 1.8rem;
  }  
/*  & .month {
    font-family: SourceHanSansSC-Normal;
    font-size: 1.3rem;
  }*/
  & .area-rental {
    width: fit-content;
    font-family: SourceHanSansSC-Normal;
    font-size: 1.3rem;
    color: #333333;
    text-align: right;

    
  }  
`;

export const ItemBottom = styled.div`
  width: inherit;
  height: 28rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
  color: #333333;
  & .item-info {
    width: 24.4rem;
    height: 25.5rem;
    background-color: #F7FBFF;
    padding: 1.2rem 0.8rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  };
  & .item-info-1 {
      display: flex;
      flex-direction: row;
      word-break:break-all;
  }
  & .item-info-title {
    height: 2.1rem;
    white-space: nowrap;
    font-family: SourceHanSansSC-Medium;
    font-size: 1.5rem;
    line-height: 2.1rem;
  }
  & .item-info-content {
    height: 4.2rem;
    line-height: 2.1rem;
    font-family: SourceHanSansSC-Normal;
    font-size: 1.5rem;
    overflow: hidden;
    
  }
`;
export const DivLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 24.4rem;
  height: 0.1rem;
  background-color: #DAE1E5;
  border-radius: 0.8rem;
`;

export const VerticalDivLine = styled.div`
  width: 0.2rem;
  height: 1.9rem;
  background-color: #D8D8D8;
  margin-top: 1.1rem;
  box-sizing: border-box;
`;


