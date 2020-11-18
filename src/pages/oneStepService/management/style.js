import styled from "styled-components";

export const ManagementWrapper = styled.div`
  width: calc(192rem - 17px);
`;

export const ManagementFlowChart = styled.div`
  width: 104rem;
  height: 17.7rem;
  margin: 7.5rem auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  
`;
export const FlowChartItem = styled.div`
  width: 12.8rem;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & .flow-chart-img {
    width: 12.8rem;
    height: 12.8rem;
  } 
  & .flow-chart-arrow {
    position: relative;
    top: 4.9rem;
    width: 3rem;
    height: 3rem;
    line-height: 12.8;
  }
  & .flow-chart-content {
    width: fit-content;
    height: 2.4rem;
    line-height: 2.4rem;
    font-family: SourceHanSansSC-Regular;
    font-size: 1.6rem;
    white-space: nowrap;
    
  }
`;
