import styled from "styled-components";

export const NewProjectDetailWrapper = styled.div`
  width: calc(192rem - 17px);
  height: 211.4rem;
  margin: 0 auto;
  box-sizing: border-box;
  letter-spacing: 0;
  & .button:hover {
    border: 0.1rem solid #2D84FF;
    box-shadow: 0 0 0 0.2rem  rgba(45, 132, 255, 0.5);
    -moz-outline-radius: 0.8rem;
  }
  & .button:active{ -moz-transform: translate(0.1rem,0.1rem); -webkit-transform: translate(0.1rem,0.1rem); -o-transform: translate(0.1rem,0.1rem); }  
`;

export const NewProjectDetailContainer = styled.div`
  width: 108rem;
  height: inherit;
  margin: 0 auto;
  box-sizing: border-box;
`;
/* TitlePath */
export const TitlePath = styled.div`
  width: fit-content;
  height: 20px;
  white-space: nowrap;
  margin: 3.2rem auto 3.2rem 0;
  font-family: SourceHanSansSC-Normal;
  font-size: 14px;
  line-height: 20px;
  
  letter-spacing: 0;
  & .title-path {
    color: #666666;

  };  
  & .title-path-curr {
    color: #2D84FF;

  };
  & .title-path:hover {
    color: #2D84FF;
  };
`;

/*Slider*/
export const SliderWrapper = styled.div`
  width: inherit;
  height: 70rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
export const SliderTop = styled.div`
  position: relative;
  width: inherit;
  height: 52rem;
  overflow: hidden;
  border-radius: 0.8rem;
`;
export const SliderItemTop = styled.div`
  width: inherit;
  height: 52rem;
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: #D8D8D8;
  & img {
    width: inherit;
    height: inherit;
    margin: 0 auto;


  }
`;
export const SliderBottom = styled.div`
  width: 110rem;
  height: 16rem;
  margin: 0 auto;
`;

export const SliderItemBottom = styled.div`
  width: auto;
  height: inherit;
  border-radius: 0.8rem;
  overflow: hidden;

  & img {
    width: 20rem;
    height: 16rem;
    border-radius: 0.8rem;
    
  }
`;

export const PrevArrow = styled.div`
  z-index: 100;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4.8rem;
  height: 10.4rem;
  cursor: pointer;
  border: 1px solid transparent;
  box-sizing: border-box;
  margin: auto;
  border-top-right-radius: 5.2rem;
  border-bottom-right-radius: 5.2rem;
  & img {
    width: 4.8rem;
    height: 10.4rem;
    border-top-right-radius: 5.2rem;
    border-bottom-right-radius: 5.2rem;
  };
`;

export const NextArrow = styled.div`
  z-index: 100;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4.8rem;
  height: 10.4rem;
  cursor: pointer;
  border: 1px solid transparent;
  box-sizing: border-box;
  margin: auto;
  border-top-left-radius: 5.2rem;
  border-bottom-left-radius: 5.2rem;
  & img {
    width: 4.8rem;
    height: 10.4rem;
    border-top-left-radius: 5.2rem;
    border-bottom-left-radius: 5.2rem;
  };  
`;


/*DataDescription*/
export const DataDescription = styled.div`
  width: 51.9%;
  height: 5.67%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem auto 2rem 0;
`;

export const DataContainer = styled.div`
  width: 32.3rem;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .prices {
    width: inherit;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;

  }
  
`;

export const Prices = styled.span`
  width: fit-content;
  height: 3.6rem;
  line-height: 3.6rem;
  font-family: SourceHanSansSC-Medium;
  font-size: 2.4rem;
  color: #DE2F2F;
  white-space: nowrap;
  
`;
export const LoanPayment = styled.span`
  width: fit-content;
  height: 2rem;
  line-height: 2rem;
  font-family: SourceHanSansSC-Regular;
  font-size: 1.4rem;
  color: #333333;
  white-space: nowrap;
  
`;

export const Calculator = styled.span`
  white-space: nowrap;
`;
export const Size = styled.span`
  
`;


export const Status = styled.span``;
export const Location = styled.span`
  
`;

export const EmbeddedMap = styled.div`
  
`;


