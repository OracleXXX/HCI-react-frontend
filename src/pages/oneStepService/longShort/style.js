import styled from "styled-components";

export const LongShortWrapper = styled.div`
  width: calc(192rem - 17px);
`;

export const LongShortFlowChart = styled.div`
  width: 120.1rem;
  height: 24.4rem;
  margin: 5.7rem auto;
  display: flex;
  justify-content: space-between;

`;
export const FlowChartItem = styled.div`
  position: relative;
  width: 17.6rem;
  height: 22.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;   
  align-items: center; 
  background: #FFFFFF;
  box-shadow: 0 6px 21px 0 #F0F1F2;
  border-radius: 0.8rem;
  
  & .long-short-img {
    width: inherit;
    height: 14.4rem;
  };
  & .long-short-content {
    width: inherit;
    height: 8rem;
    font-family: SourceHanSansSC-Medium;
    font-size: 1.6rem;
    line-height: 2.4rem;
    
    & .content{
      
      width: inherit;
      height: 2.4rem;  
      text-align: center;
      margin: 1.8rem auto;
    }
  };
  & .long-short-index {
    position: absolute;
    bottom: -2rem;
    width: 4rem;
    height: 4rem;
  };
    
`;
