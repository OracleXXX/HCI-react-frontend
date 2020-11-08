import styled from "styled-components";



// 最近动态 news feed
export const NewsFeedWrapper = styled.div`
  width: 100%;
  height: 900px;
  padding: 86px;
  box-sizing: border-box;
  background-color: #F6F8F9;
 
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
  
  display: inline-block;
  width: 488px;
  height: 250px;
  margin: 0 32px 0 16px;
  box-sizing: border-box;
  border: 1px solid red;
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
  line-height: 405px;
  margin: 0 15px;
  border-radius: 8px;
//  border: 1px dashed black;

`;
export const TopPart = styled.div`
  width: 380px;
  height: 181px;
  border-radius: 8px;
//  border: 1px dashed black;
  overflow: hidden;
  & .LeftPartImg {
    vertical-align: top;
    width: 380px;
    height: 181px;
    max-width: 380px;
    max-height: 181px;
    border-radius: 8px;
    
  }
  
`;
export const BottomPart = styled.div`
  width: 360px;
  height: 208px;
  margin: 0 auto;
  border: 1px dashed black;
`;


