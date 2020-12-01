import styled from "styled-components";

export const ActivityWrapper = styled.div`
  width: calc(192rem - 17px);
  min-width: 1300px;
  & .button:hover {
    border: 0.1rem solid #2D84FF;
    box-shadow: 0 0 0 0.2rem  rgba(45, 132, 255, 0.5);
    -moz-outline-radius: 0.8rem;
  }
  & .button:active { -moz-transform: translate(0.1rem,0.1rem); -webkit-transform: translate(0.1rem,0.1rem); -o-transform: translate(0.1rem,0.1rem); }
  

`;
export const ActivityTitle = styled.div`
  width: 72rem;
  height: auto;
  margin: 5.7rem auto 0;
 
  & .title {
    width: fit-content;
    height: 4.7rem;
    line-height: 4.7rem;
    margin: 0 auto;
    font-family:SourceHanSansSC-Bold;
    font-size:3.2rem;
    color:#333333;
    text-align:center;
  }
  & .rec {
    width: 5rem;
    height: 0.3rem;
    margin: 1.6rem auto 0;
    border-radius: 0.15rem;
    background-color: #2D84FF;
  }
`;


export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 128rem;

  margin: 6.6rem auto 2.5rem;
  
 
`;
export const ActivityItem = styled.div`
  width: 119.9rem;
  height: 28rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivLine = styled.div`
  width: 120rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  background-color: #E6E6E6;
  margin: 4rem auto;
`;

export const ItemLeft = styled.div`
  width: 58.4rem;
  height: 28rem;
  overflow: hidden;
  border-radius: 0.8rem;


  & .item-left-img {
    width: 58.4rem;
    height: 28rem;
    border-radius: 0.8rem;
    

  }
`;
export const ItemRight = styled.div`
  width: 58.5rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ItemRightTop = styled.div`
  width: 58.5rem;
  height: 9.3rem;
  color: #333333;
  & .activity-title {
    height: 3.3rem;
    font-family: SourceHanSansSC-Medium;
    font-size: 2.2rem;
  };
  & .activity-content {
    font-family: SourceHanSansSC-Normal;
    font-size: 1.5rem;
    line-height: 2.6rem;
  }
`;


export const ItemRightBottom = styled.div`
  width: 58.5rem;
  height: 12.8rem;
  font-family: SourceHanSansSC-Light;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #666666;
  
  & .activity-location {
    height: 2rem;
    margin-bottom: 0.8rem;
  };
  & .activity-time {
    height: 2rem;
    margin-bottom: 0.8rem;
  };
  & .activity-deadline {
    height: 2rem;
    margin-bottom: 1.2rem;
  }
  & .apply:hover {
    border: 0.1rem solid dodgerblue;
  }
`;

export const Apply = styled.div`
  width: 12rem;
  height: 4rem;
  background-image: linear-gradient(-45deg, #7F55FF 0%, #5DBBFF 100%);
  border-radius: 0.4rem;
  font-family: PingFangSC-Regular;
  font-size: 1.4rem;
  color:#FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 4rem;
  cursor: pointer;
  border: 0.1rem solid transparent;
`;


export const Pagination = styled.div`
  width: fit-content;
  height: 2rem; 
  margin: 0 auto 6.6rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  line-height: 2rem;
  
  font-family: SourceHanSansSC-Regular;
    font-size: 1.4rem;
    color: #333333;
  & .prev-next {
    width: 4.2rem;
    height: 2rem;
    margin: auto 1rem;
    cursor: pointer;
    white-space:nowrap;
    ;   
  }
  & .page-number {
    width: 0.8rem;
    height: 2rem;  
    margin: auto 1rem;
    cursor: pointer;    
    }
    & .active {
      color: #2D84FF
    }
    & .disabled {
      cursor: not-allowed;
      opacity:0.5;//设置蒙版效果
    }
  & .page-number:hover {
    font-weight: bold;
  }
  & .prev-next:hover {
    font-weight: bolder;
  }
`;

export const Register = styled.div`
  width: 64rem;
  height: 52rem;
  border-radius: 0.8rem;
  background-color: #FFFFFF;
  position: relative;
  
`;


export const RegisterTitle = styled.div`
  width: inherit;
  height: 4.8rem;
  background-image: linear-gradient(-45deg, #7F55FF 0%, #5DBBFF 100%);
  border-radius: 0.8rem 0.8rem 0 0;
  font-family: SourceHanSansSC-Medium;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const RegisterContent = styled.div`
  width: inherit;
  height: 24.5rem;
  padding:2.8rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .register-content-title {
    position: relative;
    width: 8rem;
    height: 2.1rem;
    text-align: justify;
    font-family: SourceHanSansSC-Medium;
    font-size: 1.6rem;
    color: #333333;
    line-height: 1.5rem;
    white-space: nowrap;
    & .over{
      position: absolute;
      z-index: 999999999;
    }   
  }
  & .register-content-title-bg {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0 auto;
      width: 7.9rem;
      height: 1rem;
      border-radius: 0.2rem;
      background-image: linear-gradient(270deg, rgba(127,85,255, 0.06) 0%, #5DBBFF 100%);
    }
    & .register-content {
      width: 70%;
      height: 3.2rem;
      line-height: 3.2rem;
      font-family: SourceHanSansSC-Light;
      font-size: 1.5rem;
      white-space: nowrap;
    }
`;
export const DivLinePopup = styled.div`
  width: 58rem;
  height: 0.1rem;
  background-color: #EEEEEE;
  border-radius: 0.8rem;
  margin: 0 auto;
`;


export const RegisterQRCode = styled.div`
  width: inherit;
  height: 22.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1.8rem 0 4.7rem;
  & .register-qr-title {
    width: 10.5rem;
    height: 3.2rem;
    white-space: nowrap;
    font-family: SourceHanSansSC-Light;
    line-height: 3.2rem;
    font-size: 1.5rem;
    
  };
  & .qr-code {
    width: 12.1rem;
    height: 12.1rem;
  };
`;

export const ExitButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8.8rem;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  box-sizing: border-box;
  cursor: pointer;
  & .exit-button {
    box-sizing: border-box;
    width: 5.6rem;
    height: 8.8rem;
  }
`;
