import styled from "styled-components";

export const NewProjectWrapper = styled.div`
  width: calc(192rem - 17px);
  height: fit-content;
  box-sizing: border-box;
  & .button:hover {
    border: 0.1rem solid #2D84FF;
    box-shadow: 0 0 0 0.2rem  rgba(45, 132, 255, 0.5);
    -moz-outline-radius: 0.8rem;
  }
  & .button:active{ -moz-transform: translate(0.1rem,0.1rem); -webkit-transform: translate(0.1rem,0.1rem); -o-transform: translate(0.1rem,0.1rem); }

`;

export const NewProjectContainer = styled.div`
  width: 123.6rem;
  height: fit-content;
  display: flex;
  flex-flow:row wrap;
  justify-content:center;
  align-items:center;
  margin: 3.4rem auto;
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
  justify-content: space-between;
  width: inherit ;
  height: 15.1rem;
  background-color: #F7FBFF;
  box-sizing: border-box;
  border: 1px solid #DAE1E5;
  white-space: nowrap;
  & .margin-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.6rem;
  }
  

`;
export const MarginContainerLeft = styled.div`
    width: fit-content;
`;
export const MarginContainerRight = styled.div`
    width: fit-content;
    
`;


export const MarginItem = styled.div`
    font-size: 1.5rem;
    color: #333333;
    display: flex;
    flex-direction: row;
    & .margin-item-name {
      font-family: SourceHanSansSC-Medium;
    }
    & .margin-item-info {
      font-family: SourceHanSansSC-Normal;
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
  cursor: pointer;
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