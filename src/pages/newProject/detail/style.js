import styled from "styled-components";

export const NewProjectDetailWrapper = styled.div`
  width: calc(192rem - 17px);
  height: 211.4rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const NewProjectDetailContainer = styled.div`
  width: 108rem;
  height: inherit;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const TitlePath = styled.div`
  width: fit-content;
  height: 2rem;
  white-space: nowrap;
  margin: 3.2rem auto 3.2rem 0;
  & .title-path {
     font-family: SourceHanSansSC-Normal;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #666666;
    letter-spacing: 0;
  };
  & .title-path:hover {
    color: #2D84FF;
  };
`;

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

export class NextArrow {
}

export class PrevArrow {
}