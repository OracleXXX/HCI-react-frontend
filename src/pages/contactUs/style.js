import styled from "styled-components";

export const ContactUsWrapper = styled.div`
  width: calc(192rem - 17px);
`;
export const ContactUsContainer = styled.div`
  width: 120rem;
  height: 26.4em;
  background-color: #FFFFFF;
  box-shadow: 0 10px 20px 0 rgba(227, 227, 227, 0.50);
  border-radius: 0.8rem;
  margin: 4rem auto 5.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  
`;
export const LocationItem = styled.div`
    width: 59.5rem;
    height: inherit;
    box-sizing: border-box;
`;

export const LocationContent = styled.div`
  width: fit-content;
  height: 10.9rem;
  margin: 4.3rem auto;
`;

export const City = styled.div`
    width: fit-content;
    height: 2.9rem;
    font-family: SourceHanSansSC-Bold;
    font-size: 2rem;
    line-height: 2.9rem;
    color: #333333;   
`;
export const Addr = styled.div`
    width: fit-content;
    height: 2.4rem;
    font-family: SourceHanSansSC-Regular;
    line-height: 2.4rem;
    font-size: 1.6rem;
    margin: 2rem 0 1.2rem;
`;
export const Email = styled.div`
    width: fit-content;
    height: 2.4rem;
    font-family: SourceHanSansSC-Regular;
    line-height: 2.4rem;
    font-size: 1.6rem;
`;
export const DivLine = styled.div`
  width: 0.1rem;
  height: 10.4rem;
  background: #D8D8D8;
`;
export const QRCodeItem = styled.div`
  width: 59.5rem;
  height: inherit;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4.3rem 0 5.1rem;
  & .img-border {
    width: 12.8rem;
    height: 12.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .4rem;
    background: #EEEEEE;
  }
  & img {
    width: 12rem;
    height: 12rem;
  }
  & .qr-name {
    height: 2.2rem;
    white-space: nowrap;
    font-family: SourceHanSansSC-Regular;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`;
export const FormContainer = styled.div`
  position: relative;
  width: 120rem;
  height: 104.7rem;
  box-sizing: border-box;
  border: 1px solid red;
  margin: 14.1rem auto 9.1rem;
  & .top-right-img {
    position: absolute;
    right: 0;
    top: 2.9rem;
    width: 46.4rem;
    height: 35.4rem;
  }
`;
