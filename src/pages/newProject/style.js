import styled from "styled-components";

export const NewProjectWrapper = styled.div`

`;

export const NewProjectContainer = styled.div`
  width: 123.7rem;
  height: fit-content;
  display: flex;
  flex-flow:row wrap;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 58.2rem;
  height: 59.7rem;

  margin: 1.8rem;
  box-sizing: border-box;  
`;

export const ItemImgContainer = styled.div`
  position: relative;
  width: inherit;
  height: 38rem;
  background-color: blue;
  border-radius: 0.8rem;
  overflow: hidden;
  & .house-img {
    width: inherit;
    height: inherit;
    border-radius: 0.8rem;
  }
`;
export const AdditionInfo = styled.div`
  z-index: 200;
  position: absolute;
  bottom: 0;
  width: inherit;
  height: 8rem;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.80) 98%);
  & .addition-info-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 54.9rem;
    height: 3rem;
    margin: 2.5rem auto;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const City = styled.div`
  width: auto;
  height: 3rem;
  box-sizing: border-box;
  & .addr-icon {
    width: 1.2rem;
    height: 1.5rem;
    box-sizing: border-box;
    margin: 0.75rem 0.8rem 0 0;
  }
  & .city-name {
    height: 2.2rem;
    font-family: SourceHanSansSC-Medium;
    font-size: 1.8rem;
    color: #FFFFFF;
    line-height: 2.2rem;

  }
`;


export const MoreInfo = styled.div`
    width: 7.2rem;
    height: 3rem;
    background: rgba(0,0,0,0.20);
    border: 1px solid rgba(255,255,255,0.60);
    border-radius: 1.9rem;
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
  
`;

export const ItemPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: inherit;
  height: 2.2rem;

  & .leasing-fee {
    color: #DE2F2F;
    line-height: 2.2rem;
  }
  & .price {
    font-family: HiraginoSans-W6;
    
    font-size: 2.4rem;
  }
  & .per-month {
    font-family: SourceHanSansSC-Medium;
    font-size: 1.6rem;
  }
  & .area {
    font-family: SourceHanSansSC-Normal;
    font-size: 1.6rem;
    color: #333333;
    line-height: 2.2rem;
  }
`;

export const MarginContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit ;
  height: 15.1rem;
  background-color: #F7FBFF;
  box-sizing: border-box;
  border: 1px solid #DAE1E5;
  & .margin-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.6rem;
  }
  

`;
export const MarginContainerLeft = styled.div`
    width: 70%;
`;
export const MarginContainerRight = styled.div`
    width: 30%;
`;


export const MarginItem = styled.div`
    font-size: 1.5rem;
    color: #333333;
    & .margin-item-name {
      font-family: PingFangSC-Semibold;
    }
    & .margin-item-info {
      font-family: PingFangSC-Regular;
    }
`;

export const SeeMore = styled.div`
  width: 24rem;
  height: 5.6rem;
  border-radius: 0.8rem;
  color: #333333;
  font-family: SourceHanSansSC-Normal;
  font-size: 2rem;
  opacity: 0.96;
  border: 1px solid blue;
  margin: 3.8rem auto;
  box-sizing: border-box;
  & .see-more {
    width: 10.1rem;
    height: 2.9rem;
    margin: 1.35rem auto;
    line-height: 2.9rem;  
    box-sizing: border-box;
  }
  & span {
    vertical-align: top;
  }
  & .see-more-icon {
    width: 1.3rem;
    height: 0.8rem;
    margin: 1.05rem 0 0 0.8rem;
    box-sizing: border-box;
    vertical-align: top; 
  }
`;