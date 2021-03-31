import styled from "styled-components";
import background from '../../statics/imgs/PlatformLoan/loan-bg.png'
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
  
  width: 100%;
  height: fit-content;
  margin: 12.1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${background});
  background-size: 100%;
  border: 1px solid red;
  padding: 14rem 0;
  
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
export const AdditionInfoContainer = styled.div`
  width: 99.7rem;
  height: 6.8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;


export const Steps = styled.div`
  width: 120rem;
  height: fit-content;
  margin: 0 auto 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  & .step {
    width: 128px;
    height: 128px;
    cursor: pointer;
  }  

  & .arrow {
    width: 30px;
    height: 30px;
  }
`;
export const Info = styled.div`
  width: 120rem;
  height: 40rem;
  padding: 34px 40px;
  color: #333333;
  box-sizing: border-box;
  background-color: #FFFFFF;
  z-index: 10;
  border-radius: 8px;
  & .info-title {
    width: fit-content;
    height: fit-content;
    font-family: SourceHanSansSC-Bold;
    font-size: 22px;
    
    text-align: center;
    white-space: nowrap;
    margin: 0 auto 33px; 
  };
  & .info-content {
    font-family: SourceHanSansSC-Regular;
    font-size: 15px;
    line-height: 28px;
    
  }
`;

