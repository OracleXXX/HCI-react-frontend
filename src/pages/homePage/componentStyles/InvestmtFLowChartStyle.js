import styled from "styled-components";

//项目投资流程图 project investment flow chart
export const InvestmtFlowChartWrapper = styled.div`
  width: 87.5rem;
  height: 137rem;
  margin: 8.6rem auto;
  & .button:hover {
    border: 0.1rem solid #2D84FF;
    box-shadow: 0 0 0 0.2rem  rgba(45, 132, 255, 0.5);
    -moz-outline-radius: 0.8rem;
  }
  & .button:active{ -moz-transform: translate(0.1rem,0.1rem); -webkit-transform: translate(0.1rem,0.1rem); -o-transform: translate(0.1rem,0.1rem); }
`;
export const FlowChartTitle = styled.div`
  width: 19.3rem;
  height: 6.6rem;
  margin: 0 auto;
  & .title {
    margin: 0 auto;
    width: 19.2rem;
    height: 4.7rem;  
    font-family: SourceHanSansSC-Bold;
    font-size: 3.2rem;
    color: #333333;
    text-align: center;
    line-height: 4.7rem;
  }
  & .rec {
    width: 5rem;
    height: 0.3rem;
    background-color: #2D84FF;
    border-radius: 0.15rem;
    margin: 1.6rem auto 0;
    vertical-align: bottom;
  
  }
`

export const FlowChart =styled.div`
  position: relative;
  left: -8rem;
  width: 87.5rem;
  height: 124rem;
  margin: 5.7rem auto;
  & img {
    max-width: 19rem;
    max-height: 21.8rem;
  }
`
export const OddWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 51.2rem;
  height: 124rem;
`;
export const EvenWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 17rem;
  width: 66.9rem;
  height: 90rem;
`;
export const OddStepWrapper = styled.div`
  width: 49.8rem;
  height: 22rem;
  margin-bottom: 12rem;
  padding-left: 1.4rem;
  vertical-align:top;

`;
export const EvenStepWrapper = styled.div`
  width: 66.9rem;
  height: 22rem;
  margin-bottom: 12rem;
  & .evenStep {
      float: right;
  };
  & .oddStep {
      float: right;
  };
`;
export const OddImgToIndex = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-left: 1.4rem;
  width: 29.3rem;
  height: 21.8rem;
    & .imgToIndex-odd {
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  };
  & .oddDash {
    position: absolute;
    left: -0.7rem;
    top: 0;
    bottom: 0;
    margin: auto; 
    width: 12.2rem;
    height: 1rem;
  };
  & .oddIndex {
    position: absolute;
    left: 11.5rem;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 3.2rem;
    height: 3.2rem;
  };
`;

export const OddIndexContent = styled.div`
    position: absolute;
    left: 16.5rem;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 5.4rem;  
    & .oddContentTitle {
      font-family: SourceHanSansSC-Medium;
      font-size: 1.6rem;
      color: #333333;
      line-height: 2.2rem;
      margin-bottom: 0.8rem;
    } 
    & .oddContent {
      width: 29.9rem;
      font-family: SourceHanSansSC-Normal;
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    };
`;
//--------------------------------------------
export const EvenImgToIndex = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-right: 1.4rem;
    width: 45rem;
    height: 21.8rem;
    box-sizing: border-box;
  & .imgToIndex-even {
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  };
  & .evenDash {
      position: absolute;
      right: -0.7rem;
      top: 0;
      bottom: 0;
      margin: auto; 
      width: 12.2rem;
      height: 1rem;
  };
  & .evenIndex {
      position: absolute;
      right: 11.5rem;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 3.2rem;
      height: 3.2rem;
  };
`;
export const EvenIndexContent = styled.div`
    position: absolute;
    left: 18.9rem;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 9.5rem;
    height: 5.4rem;
    //偶数序号内容
    & .evenContentTitle {
      float: right;
      width: 29.9rem;
      font-family: SourceHanSansSC-Medium;
      font-size: 1.6rem;
      color: #333333;
      line-height: 2.2rem;
      margin-bottom: 0.8rem;
      text-align: right;
    };
    & .evenContent {
      float: right;
      width: 29.9rem;
      font-family: SourceHanSansSC-Normal;
      font-size: 1.4rem;
      text-align: right;
      margin-bottom: 0.8rem;
    };   
`;
export const MoreInfo = styled.div`
  cursor: pointer;
  width: 8.3rem;
  height: 2.6rem;
  border: 0.1rem solid rgba(255,255,255,0.6);
  border-radius: 1.9rem;
  padding: 0 0.8rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-image: linear-gradient(-45deg, #7F55FF 0%, #5DBBFF 100%);
  font-family: SourceHanSansSC-Normal;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #FFFFFF;
  & img {
    width: 0.7rem;
    height: 1.2rem;
    margin-left: 0.6rem;
  };
`;