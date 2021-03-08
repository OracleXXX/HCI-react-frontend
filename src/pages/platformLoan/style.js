import styled from "styled-components";

export const PlatformLoanWrapper = styled.div`
  width: calc(192rem - 17px);
  margin-bottom: 12.1rem;
`;

export const Comment = styled.div`
  width: fit-content;
  height: 5.2rem;
  text-align: center;
  line-height: 2.6rem;
  font-family: SourceHanSansSC-Normal;
  font-size: 1.4rem;
  color: #333333;
  margin: 4rem auto 0;
  white-space: nowrap;
`;

export const LoanFlowChart = styled.div`
  
  width: 120rem;
  height: 45rem;
  margin: 12.1rem auto;
  display: flex;
  justify-content: space-between;
  
`;

export const FlowChartMain = styled.div`
  width: 53.9rem;
  height: 45rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FLowCharLeft = styled.div`
    width: 22.4rem;
    height: 45rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & .arrow-to-bot {
      width: 2.8rem;
      height: 7.8rem;
    }
`;

export const FlowChartMid = styled.div`
    width: 9.1rem;
    height: 38.234rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


`;
export const MidItem = styled.div`
  width: inherit;
  height: 16.734rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img {
    width: inherit;
    height: 7.036rem;

  }
`;

export const FlowChartRight = styled.div`
    width: 22.4rem;
    height: 29.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.4rem;
`;

export const FlowChartImg = styled.div`
  width: 55.3rem;
  height: 45rem;
  & img {
    width: inherit;
    height: inherit;
  }
`;
export const FlowChartItem = styled.div`
  width: 22.4rem;
  height: 8.8rem;
  background: #2D84FF;
  box-sizing: border-box;
  border-radius: 0.4rem;
  font-family: SourceHanSansSC-Medium;
  font-size: 1.8rem;
  text-align: center;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  & .flow-chart-content {
    width: 18rem;
    height: fit-content;
    line-height: 2.7rem;
    
  }
  
`;

export const AdditionInfo = styled.div`
  width: 120rem;
  height: 18rem;
  box-shadow: 0 10px 20px 0 rgba(227,227,227,0.50);
  font-family: SourceHanSansSC-Normal;
  font-size: 1.6rem;
  color: #333333;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  

`;


export const AdditionInfoContainer = styled.div`
  width: 99.7rem;
  height: 6.8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const AdditionInfoContainerItem = styled.div`
  width: fit-content;
  height: 6.8rem;
  
  font-family: SourceHanSansSC-Normal;
  font-size: 1.4rem;
  display: flex;
  color: #666666;
  flex-direction: column;
  justify-content: space-between;
  & .circle-content {
    display: flex;
    align-items: center;
    
  }
  & span {
    height: 1.4rem;
    line-height:1.4rem;
  }
  
`;
export const Circle = styled.div`
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  -moz-border-radius: 0.3rem;
  -webkit-border-radius: 0.3rem;
  border-radius: 0.3rem;
  border: 1px solid #2D84FF;
  margin-right: 1rem;
  box-sizing: border-box;
`;