import styled from "styled-components";
export const ActivityWrapper = styled.div`
  width: calc(192rem - 17px);
  min-width: 1300px;

`;
export const ActivityTitle = styled.div`
  width: 72rem;
  height: auto;
  margin: 5.7rem auto 0;
 
  & .title {
    width: 12.8rem;
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
  justify-content: space-between;
  width: 128rem;
  height: 172.4rem;
  margin: 6.6rem auto;
  
 
`;
export const ActivityItem = styled.div`
  width: 119.9rem;
  height: 28rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

export const DivLine = styled.div`
  width: 120rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  background-color: #E6E6E6;
  margin: 0 auto;
`;

export const ItemLeft = styled.div`
  width: 58.4rem;
  height: 28rem;
  overflow: hidden;


  & .item-left-img {
    width: 58.4rem;
    height: 28rem;
    

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
  & .activity-title {
    height: 3.3rem;
    font-family: SourceHanSansSC-Bold;
    font-size: 2.2rem;
  };
  & .activity-content {
    font-family: SourceHanSansSC-Medium;
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
