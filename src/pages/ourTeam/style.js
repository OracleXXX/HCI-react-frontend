import styled from 'styled-components';

export const OurTeamWrapper = styled.div`
  width: calc(192rem - 17px);
`;


export const OurTeamContainer = styled.div`
/*  width: 89.2rem;
  height: 92rem;*/
  width: 93.2rem;
  height: 96rem;
  margin: 5.7rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #FFFFFF;
`;


export const ContainerItem = styled.div`
  width: 27.6rem;
  height: 44rem;
  box-shadow: 0 10px 20px 0 rgba(227, 227, 227, 0.50);
  border-radius: 0.8rem;
  text-align: center;
  display: flex;
  align-items: center;
  
`;
export const ItemWrapper = styled.div`
  width: inherit;
  height: 36.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;


export const Avatar = styled.div`
  width: 13.2rem;
  height: 13.2rem;
  border-radius: 6.65rem;
  box-sizing: border-box;
  border: 0.1rem solid transparent;
  background-image: linear-gradient(150deg, #5DBBFF 0%, #7F55FF 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  & .avatar {
    width: 13.2rem;
    height: 13.2rem;
    border-radius: 6.6rem;
    box-sizing: border-box;
    background-color: #FFFFFF;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 12rem;
      height: 12rem;
      box-sizing: border-box;
      border-radius: 6rem;
    }    
  }
  
  

`;
export const Name = styled.div`
  width: fit-content;
  height: 2.9rem;
  white-space: nowrap;
  font-family: SourceHanSansSC-Bold;
  font-size: 2rem;
  line-height: 2.9rem;
  color: #333333;
`;


export const Position = styled.div`
  width: fit-content;
  height: 2.2rem;
  white-space: nowrap;
  font-family: SourceHanSansSC-Regular;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #999999;
`;


export const Introduction = styled.div`
  height: 15.6rem;
  font-family: PingFangSC-Regular;
  font-size: 1.4rem;
  line-height: 2.6rem;
  margin: 0 2rem;
  color: #666666;
  
`;

