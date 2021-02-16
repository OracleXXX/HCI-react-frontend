import styled from "styled-components";

export const NewsFeedDetailWrapper = styled.div`
  width: cacl(192rme - 17px);
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
  height: 1000px;
  box-sizing: border-box;
  background-color: #FFFFFF;
  margin-bottom: 1.6rem;
  border-radius: 4px;
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
  height: 100px;
  background-color: #FFFFFF;
  margin-bottom: 2rem;
  border-radius: 4px;
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


export const ArticleTitle = styled.div`
  
`;


export const ArticleDescription = styled.div`
  
`;


export const ArticleImage = styled.div`
  
`;


export const ArticleContent = styled.div`
  
`;

export const TitleItem = styled.div``;
