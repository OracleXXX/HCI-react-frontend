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
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LocationContent = styled.div`
  position: relative;
  top: -2rem;
  width: fit-content;
  height: 10.9rem;

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

  & img {
    width: 1.3rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;
export const Email = styled.div`
  width: fit-content;
  height: 2.4rem;
  font-family: SourceHanSansSC-Regular;
  line-height: 2.4rem;
  font-size: 1.6rem;
  & img {
    width: 1.26rem;
    height: 1.021rem;
    margin-right: 0.5rem;
  }
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
  height: 96.7rem;
  box-sizing: border-box;
  margin: 14.1rem auto 9.1rem;

  & .top-right-img {
    position: absolute;
    right: 0;
    top: 2.9rem;
    width: 46.4rem;
    height: 35.4rem;
  }

  & .container-form {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .form-group {
    width: 72rem;
    height: 13.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .form-group-comments {
    height: fit-content;

  }

  & .form-label {
    height: 2.2rem;
    font-family: SourceHanSansSC-Bold;
    font-size: 1.8rem;
    line-height: 2.2rem;
    letter-spacing: 0;
    border-radius: 0.4rem;
  }

  & .form-label {
    margin-bottom: 0.2rem;
  }

  & input {
    width: 72rem;
    height: 4rem;
    background: #FFFFFF;
    border: 0.1rem solid #D8D8D8;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    outline: none;
    box-sizing: border-box;
    padding-left: 10px;
  }

  & input:focus {
    border: 1px solid rgba(45, 132, 255);
    box-shadow: 0 0 0 0.3rem rgba(45, 132, 255, 0.2);

  }

  & .form-text {
    width: fit-content;
    height: 2.2rem;
    font-family: SourceHanSansSC-Normal;
    font-size: 1.3rem;
    line-height: 2.2rem;
    color: #666666;

  }

  & .comments {
    width: 96rem;
    padding-bottom: 7rem;
    font-size: 1.5rem;
    border: 0.1rem solid #D8D8D8;
    border-radius: 0.4rem;
    outline: none;
    margin: 2rem 0;
    padding-left: 10px;
  }

  & .comments:focus {
    border: 1px solid rgba(45, 132, 255);
    box-shadow: 0 0 0 0.3rem rgba(45, 132, 255, 0.2);
  }

  & .form-button {
    width: 16.8rem;
    height: 5.6rem;
    background-image: linear-gradient(-45deg, #7F55FF 0%, #5DBBFF 100%);
    border-radius: 0.4rem;
    font-family: HiraginoSans-W6;
    font-size: 1.8rem;
    color: #FFFFFF;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
  }

  & .form-button:hover {
    border: 1px solid #2D84FF;
    outline: 0.2rem solid rgba(45, 132, 255, 0.2);
    font-size: 2.2rem;
    transition: 0.2s;
  }

`;
