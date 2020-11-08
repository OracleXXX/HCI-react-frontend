import styled from "styled-components";

//项目投资流程图 project investment flow chart
export const InvestmtFlowChartWrapper = styled.div`
  width: 875px;
  height: 1370px;
  /*border: 1px solid black;*/
  margin: 86px auto;
`;
export const FlowChartTitle = styled.div`
  width: 193px;
  height: 66px;
  margin: 0 auto;
  & .title {
    margin: 0 auto;
    width: 192px;
    height: 47px;  
    font-family: SourceHanSansSC-Bold;
    font-size: 32px;
    color: #333333;
    text-align: center;
    line-height: 47px;
  }
  & .rec {
    width: 50px;
    height: 3px;
    background-color: #2D84FF;
    border-radius: 1.5px;
    margin: 16px auto 0;
    vertical-align: bottom;
  
  }
`

export const FlowChart =styled.div`
  position: relative;
  left: -80px;
  width: 875px;
  height: 1240px;
  /*border: 1px solid red;*/
  margin: 57px auto;
  
  
  & img {
    max-height: 218px;
  }
`
export const OddWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 512px;
  height: 1240px;
  /*border: 1px dashed red;*/
  
`;
export const EvenWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 170px;
  width: 669px;
  height: 900px;
  /*border: 1px dashed blue;*/
`;
export const OddStepWrapper = styled.div`
  width: 498px;
  height: 220px;
  margin-bottom: 120px;
  padding-left: 14px;
  vertical-align:top;
`;
export const EvenStepWrapper = styled.div`
  width: 669px;
  height: 220px;
  margin-bottom: 120px;
  & .evenStep {
      float: right;
  }
  & .oddStep {
      float: right;
  }

`;



export const OddImgToIndex = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-left: 14px;
  width: 293px;
  height: 218px;
  & .oddDash {
    position: absolute;
    left: -7px;
    top: 0;
    bottom: 0;
    margin: auto; 
  }
  & .oddIndex {
    position: absolute;
    left: 130px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

export const OddIndexContent = styled.div`
    position: absolute;
    left: 180px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 54px;  
    & .oddContentTitle {
      font-family: SourceHanSansSC-Medium;
      font-size: 16px;
      color: #333333;
      line-height: 22px;
      margin-bottom: 8px;
    } 
    & .oddContent {
      width: 299px;
      font-family: SourceHanSansSC-Normal;
      font-size: 14px;
     
      margin-bottom: 8px;
    }
    & .oddMoreInfo {
      cursor: pointer;
      position: relative;
      
      width: 83px;
      height: 26px;
      color: #2D84FF;
      background-color: #E5F4FF;
      border: 1px solid transparent;
      border-radius: 13px;
      box-sizing: border-box;
      
      font-family: SourceHanSansSC-Normal;
      font-size: 14px;
      line-height: 26px;
      padding-left: 8px;   
    }
     & .oddMoreInfo:hover {
      border: 1px solid #2D84FF;
     }
    & .moreInfoIcon-blue {
        margin-left: 6px;
    }
`;
//--------------------------------------------
export const EvenImgToIndex = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-right: 14px;
    width: 450px;
    height: 218px;
  & .evenDash {
      position: absolute;
      right: -7px;
      top: 0;
      bottom: 0;
      margin: auto; 
  }
  & .evenIndex {
      position: absolute;
      right: 126px;
      top: 0;
      bottom: 0;
      margin: auto;
  }

`;

export const EvenIndexContent = styled.div`
    position: absolute;
    left: 180px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 95px;
    height: 54px;
    //偶数序号内容
    & .evenContentTitle {
      float: right;
      width: 299px;
      font-family: SourceHanSansSC-Medium;
      font-size: 16px;
      color: #333333;
      line-height: 22px;
      margin-bottom: 8px;
      text-align: right;
    }
    & .evenContent {
      float: right;
      width: 299px;
      font-family: SourceHanSansSC-Normal;
      font-size: 14px;
      text-align: right;
      margin-bottom: 8px;
    }
    //偶数了解详情字
    & .evenMoreInfo {
      cursor: pointer;
      float: right;
      
      
      width: 83px;
      height: 26px;
      color: #2D84FF;
      background-color: #E5F4FF;
      border-radius: 13px;
      border: 1px solid transparent;
      box-sizing: border-box;
      
      font-family: SourceHanSansSC-Normal;
      font-size: 14px;
      line-height: 26px;
      padding-left: 8px;   
    }
    & .evenMoreInfo:hover{
      border: 1px solid #2D84FF;
    }
    & .moreInfoIcon-blue {
        margin-left: 6px;
    }

`;