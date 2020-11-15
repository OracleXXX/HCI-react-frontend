import styled from "styled-components";

export const NewsFeedWrapper = styled.div`
  width: calc(192rem - 17px);
  height: fit-content;
  margin: 5.7rem auto;
  box-sizing: border-box;
  
`;
export const NewsFeedContainer = styled.div`
  width: 120rem;
  height: fit-content;
  margin: 6.6rem auto;
  box-sizing: border-box;
  
  
`;
export const PopularArticleContainer = styled.div`
  width: 120rem;
  height: 48rem;
  box-sizing: border-box;
  border: 1px dashed red;

`;

export const RestArticleContainer = styled.div`
  width: 120rem;
  height: 136.4rem;
  box-sizing: border-box;
  border: 1px dashed black;
  margin-top: 4rem;

`;
/*添加至列表 start*/
export const ArticleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120rem;
  height: 20.8rem;

  
`;

export const ArticleItemLeft = styled.div`
    width: 38rem;
    height: 20.8rem;

  & .item-left-img {
    width: 38rem;
    height: 20.8rem;

  }
  
`;

export const ArticleItemRight = styled.div`
  width: 80rem;
  height: 20.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

export const ArticleItemRightTop = styled.div`
  width: inherit;
  height: 13.6rem;
`;

export const ArticleItemRightBottom = styled.div`
  width: inherit;
  height: 2rem;
`;
export const ReadMore = styled.div`
  width: inherit;
  height: 2rem;
  font-family: SourceHanSansSC-Normal;
  font-size: 1.4rem;
  line-height: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  
  & .readMore {
    width: fit-content;
    display: inline-block;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    -webkit-background-clip: text;
    white-space:nowrap;
    color: transparent;
  }
  
`;
export const Arrow = styled.div`
  position: relative;
  bottom: 0.3rem;
  width: 2.7rem;
  height: 2rem;
  overflow: hidden;
  vertical-align: bottom;
  
  
  & .arrowStart {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 2.677rem;
    height: 0.097rem;
    border-radius: 0.05rem;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  }
  & .arrowEnd {
    position: absolute;
    right: -0.2rem;
    bottom: 0;
    width: 0.185rem;
    height: 1.012rem;
    border-radius: 0.05rem;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    transform: rotate(-60deg);
    transform-origin: right bottom;
  }
`;

export const ArticleItemBottom = styled.div``;
/*添加至列表 end*/
