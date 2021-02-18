import styled from "styled-components";

export const NewsFeedDetailWrapper = styled.div`
  width: calc(192rem - 17px);
  height: fit-content;
  background-color: #F6F8F9;
  padding-top: 8rem;
  letter-spacing: 0;
  


`;
export const NewsFeedDetailContainer = styled.div`
  width: 120rem;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TitlePath = styled.div`
  width: 100%;
  height: 48px;
  margin: 0 auto 1.6rem;
  box-sizing: border-box;
  background-color: #FFFFFF;
  padding: 14px 2.4rem;
  font-family: SourceHanSansSC-Normal;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  border-radius: 4px;
  
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

export const ArticleContainer = styled.div`
  width: 71.6%;
  height: fit-content;
  box-sizing: border-box;
  background-color: #FFFFFF;
  margin-bottom: 1.6rem;
  border-radius: 4px;
  padding: 4rem
`;
export const ArticleTitle = styled.div`
  width: 100%;
  height: fit-content;
  font-family: SourceHanSansSC-Medium;
  font-size: 2.4rem;
  color: #333333;
  text-align: justify;
  margin-bottom: 1.6rem;
`;


export const ArticleDescription = styled.div`
  width: 100%;
  height: 1.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  
  font-size: 1.3rem;
  line-height: 1.9rem;
  font-family: PingFangSC-Regular;
  opacity: 0.85;
  color: #A1A1A1;
  & .desc-left {
    width: fit-content;
    height: inherit;
    display: flex;
    flex-direction: row;
    & .date {
      margin-right: 3.8rem;
      display: flex;
      align-items: center;
    }
    & .date img{
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.6rem;
    }
    & .views {
      display: flex;
      align-items: center;
    }
    & .views img {
      width: 1.936rem;
      height: 1.251rem;
      margin-right: 0.6rem;
    }
  }
  & .desc-right {
  }
`;
export const DivLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #D8D8D8;
  margin: 0 auto;
`;

export const ArticleImage = styled.div`
  margin: 1.6rem auto 2rem;
  & img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 32rem;
  }
`;

export const ArticleContent = styled.div`
  & .article-content{
    width: 100%;
    height: fit-content;
    line-height: 2.4rem;
    font-size: 1.5rem;
    font-family: SourceHanSansSC-Normal;
    color: #333333;
    white-space: pre-wrap;
  }
`;

export const ReferContainer = styled.div`
  width: 26.6%;
  height: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
`;
export const PopularArticles = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #FFFFFF;
  margin-bottom: 2rem;
  border-radius: 4px;
  padding: 1.35rem 1.8rem;
  box-sizing: border-box;
`;
export const PopularArticleTitle = styled.div`
  width: fit-content;
  height: 2rem;
  margin-bottom: 1.3rem;
  & img {
    width: 1.4rem;
    height: 1.9rem;
    margin-right: 0.75rem;
  }
  span {
    width: fit-content;
    height: 2rem;
    line-height: 2rem;
    font-family: SourceHanSansSC-Medium;
    font-size: 1.6rem;
    color: #333333;
  }
  
`;

export const QRContainer = styled.div`
  width: 100%;
  height: 31.3rem;
  background-color: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #333333;
  letter-spacing: 0;
  white-space: nowrap;
  & .qr-title {
    width: fit-content;
    height: 2rem;
    font-family: SourceHanSansSC-Medium;
    font-size: 1.6rem;
    
    line-height: 2rem;
  }
  & img {
    width: 16rem;
    height: 16rem;
    border-radius: 4px;
    margin: 1.6rem auto;
  }
  & .qr-detail {
    width: fit-content;
    height: 2.1rem;
    font-family: PingFangSC-Regular;
    font-size: 1.5rem;
  }
`;




export const TitleItem = styled.div`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  font-size: 1.2rem;
  color: #A1A1A1;
  line-height: 2rem;
  & .refer-title {
    width: fit-content;
    height: fit-content;
    font-size: 1.4rem;
    margin-top: 1.3rem;
    color: #333333;
    font-family: SourceHanSansSC-Medium;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  };
  & .refer-description {
    margin-top: 0.85rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  & .refer-date {
    width: fit-content;
    height: 2.5rem;
    font-family: SourceHanSansSC-Normal;
  
  };
  & .refer-views {
    width: fit-content;
    height: 2.5rem;
    font-family: PingFangSC-Regular;
    display: flex;
    align-items: center;
    margin-bottom: 1.3rem;
    
    & img {
      width: 1.696rem;
      height: 1.161rem;
      margin-right: 0.66rem;
    }
  }
`;
export const TopItem = styled.div`
  width: 100%;
  height: 14.2rem;
  position: relative;
  border-radius: 0.4rem;
  overflow: hidden;
  margin: 1.3rem auto;
  
  & img {
    z-index: -1;
    width: inherit;
    height: inherit;
    border-radius: 0.4rem;
  }
  & .top-item-bottom {
    z-index: 999;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4.9rem;
    opacity: 0.85;
    padding: 1.45rem;
    box-sizing: border-box;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.02) 7%, rgba(0,0,0,0.70) 53%, #000000 100%);
  }
  & span {
    font-family: SourceHanSansSC-Medium;
    width: 100%;
    height: 2rem;
    overflow: hidden;
    color: #FFFFFF;
    font-size: 1.4rem;
    line-height: 2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;    
    -webkit-box-orient: vertical;
  }
`;

export const Dot = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: #A1A1A1;
  border-radius: 0.4rem;
  margin-right: 0.6rem;
`;

