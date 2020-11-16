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

  & .article-item-left {
    float: left;
    display: inline-block;
    width: 76rem;  
    height: 48rem; 
  };
  & .article-item-right {
    float: right;
    display: inline-block;
    vertical-align: top;
    width: 41rem;
    height: 22.5rem;
    margin-bottom: 3rem;
  };  

`;
export const PopularArticleItem = styled.div`
  position: relative;
  border-radius: 0.8rem;
  box-sizing: border-box;
  
  overflow: hidden;
  color: #FFFFFF;
  ;  
  font-family: SourceHanSansSC-Medium; 
  & .popular-img{
    width: inherit;
    height: inherit;
    border-radius: 0.8rem;
  }
  & .popular-article-title-left {
    height: 8rem;   
    font-size: 2.4rem;
    padding: 2rem;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 4rem
  }  

  & .popular-article-title-right {
    height: 6rem;
    font-size: 2rem;
    padding: 1rem 0 1rem 2rem;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 4rem
  }
  

`;
export const ArticleItemBottom = styled.div`
  z-index: 200;
  position: absolute;
  bottom: 0;
  width: inherit;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.80) 98%);
`;

export const RestArticleContainer = styled.div`
  width: 120rem;

  box-sizing: border-box;
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
    position: relative;
    width: 38rem;
    height: 20.8rem;
    overflow: hidden;
    border-radius: 0.8rem;

  & .item-left-img {
    width: inherit;
    height: inherit;
    border-radius: 0.8rem;

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
  & .article-title {
    height: 3.6rem;
    font-family: SourceHanSansSC-Medium;
    font-size: 2rem;
    line-height: 3.6rem;
    color: #333333;  
    cursor: pointer;
  }
  & .article-content {
    height: fit-content;
    font-family: SourceHanSansSC-Normal;
    font-size: 1.5rem;
    line-height: 2.6rem;
    color: #666666;  
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;    
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  
`;

export const ArticleItemRightBottom = styled.div`
  width: inherit;
  height: 2rem;
  & .right-bottom-read-more {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  }
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

/*添加至列表 end*/
