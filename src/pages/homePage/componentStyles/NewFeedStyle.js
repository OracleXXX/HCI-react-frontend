import styled from "styled-components";



// 最近动态 news feed
export const NewsFeedWrapper = styled.div`
  width: 100%;
  height: 1088px;
  padding: 86px;
  box-sizing: border-box;
  background-color: #F6F8F9
  
 
`;

export const NewsFeedTitle = styled.div`
  width: 129px;
  height: 66px;
  margin: 0 auto;
  & .title {
    width: 128px;
    height: 47px;
    font-family: SourceHanSansSC-Bold;
    font-size: 32px;
    color: #333333;
    text-align: center;
    line-height: 47px;
  }
  & .rec {
    width: 50px;
    height: 3px;
    background-color: #2D84FF;
    vertical-align: bottom;
    border-radius: 1.5px;
    margin: 16px auto 0;
  }
`;

export const NewsFeedArticle = styled.div`
  width: 1266px;
  height: 795px;
  
  margin: 57px auto;
//  border: 1px solid red;
  
  
`;

export const FixedTopArticle = styled.div`
  width: 1266px;
  height: 360px;
  margin-bottom: 15px;
  box-sizing: border-box;
//  border: 1px solid red;
  
  overflow: hidden;
`;

export const LeftPart = styled.div`
  display: inline-block;
  width: 680px;
  height: 360px;
  box-sizing: border-box;
  margin: 0 16px 0 32px;
  border-radius: 8px;
//  border: 1px solid red;
  overflow: hidden;
  & .LeftPartImg {
    width: 680px;
    height: 360px;
    max-width: 680px;
    max-height: 360px;
    
  }
`;
export const RightPart = styled.div`
  position: relative;
  display: inline-block;
  width: 488px;
  height: 250px;
  margin: 0 32px 0 16px;
  box-sizing: border-box;
//  border: 1px solid red;
  vertical-align: top;
`;
    
    


export const RestArticles = styled.div`
  width: 1266px;
  height: 405px;
  text-align: center;
  


  
`;
export const RestArticle = styled.div`

  display: inline-block;
  width: 380px;
  height: 405px;

  margin: 0 15px;
  border-radius: 8px;
  vertical-align: top;
//  border: 1px dashed black;

`;
export const TopPart = styled.div`
  width: 380px;
  height: 208px;
  border-radius: 8px;
//  border: 1px dashed black;
  overflow: hidden;
  & .TopPartImg {
    vertical-align: top;
    width: 380px;
    height: 208px;
    max-width: 380px;
    max-height: 208px;
    border-radius: 8px;
    
  }
  
`;
export const ArticleTitle = styled.div`
  height: 40px;
  font-family: SourceHanSansSC-Medium;
  font-size: 22px;
  line-height: 40px;
  color: #333333; 
`;
export const BottomPart = styled.div`
  position: relative;
  width: 360px;
  height: 181px;
  margin: 16px auto;
//  border: 1px dashed black;
  text-align: left;

  & .articleTitle {
    height: 36px;
    line-height: 36px;
    font-size: 20px;
  }
  & .divLine {
    width: 360px;
    height: 1px;
    border-radius: 115.5px;
    margin: 16px auto 13px;
    background-image: linear-gradient(270deg, #D1C2FF 0%, #B7E0FF 100%);
  }
`;


export const Tag = styled.div`
  font-family: SourceHanSansSC-Normal;
  font-size:12px;
  color:#888888;
  margin-top: 6px;
  margin-bottom: 12px;
  & .tag{
    height: 22px;
    padding: 0 6px;
    line-height: 22px;
    display: inline-block;
    background-color: #F4F4F4;
    border-radius: 13px;
    margin-right: 20px;
    
  }
`;
export const ArticleContent = styled.div`
  font-family:SourceHanSansSC-Normal;
  font-size:15px;
  color:#666666;
  line-height:26px;
  

`;
export const ReadMore = styled.div`
  
  position: absolute;
  bottom: 0;
  left: 0;
  width: 88px;
  font-size: 14px;
  cursor: pointer;
  & .readMore {
    display: inline-block;
    margin-right: 5px;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

`;
export const Arrow = styled.div`
  display: inline-block;
  position: relative;
  width: 27px;
  height: 7px;
  overflow: hidden;
  
  
  & .arrowStart {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 26.77px;
    height: 0.97px;
    border-radius: 0.5px;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  }
  & .arrowEnd {
    position: absolute;
    right: -2px;
    bottom: 0;
    width: 1.85px;
    height: 10.12px;
    border-radius: 0.5px;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    transform: rotate(-60deg);
    transform-origin: right bottom;
  }
`;
