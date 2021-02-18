import styled from "styled-components";
// 最近动态 news feed
export const NewsFeedWrapper = styled.div`
  width: calc(192rem - 17px);
  height: 106.1rem;
  padding: 8.6rem 0 0;
  box-sizing: border-box;
  background-color: #F6F8F9;
  & .button:hover {
    font-weight: bolder;
  }
  & .button:active{ -moz-transform: translate(0.1rem,0.1rem); -webkit-transform: translate(0.1rem,0.1rem); -o-transform: translate(0.1rem,0.1rem); }
`;

export const NewsFeedTitle = styled.div`
  width: 12.9rem;
  height: 6.6rem;
  margin: 0 auto;
  & .title {
    width: 12.8rem;
    height: 4.7rem;
    font-family: SourceHanSansSC-Bold;
    font-size: 3.2rem;
    color: #333333;
    text-align: center;
    line-height: 4.7rem;
    white-space: nowrap;
  }
  & .rec {
    width: 5rem;
    height: 0.3rem;
    background-color: #2D84FF;
    vertical-align: bottom;
    border-radius: 0.15rem;
    margin: 1.6rem auto 0;
  }
`;

export const NewsFeedArticle = styled.div`
  width: 126.6rem;
  height: 79.5rem;
  
  margin: 5.7rem auto;
//  border: 1px solid red;
`;

export const FixedTopArticle = styled.div`
  width: 126.6rem;
  height: 36rem;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
//  border: 1px solid red;
  
  overflow: hidden;
`;

export const LeftPart = styled.div`
  position: relative;
  display: inline-block;
  width: 68rem;
  height: 36rem;
  box-sizing: border-box;
  margin: 0 1.6rem 0 3.2rem;
  border-radius: 0.8rem;
//  border: 1px solid red;
  overflow: hidden;
  & .LeftPartImg {
    width: 68rem;
    height: 36rem;
    max-width: 68rem;
    max-height: 36rem;
    
  }
`;
export const RightPart = styled.div`
  position: relative;
  display: inline-block;
  width: 48.8rem;
  height: 25rem;
  margin: 0 3.2rem 0 1.6rem;
  box-sizing: border-box;
//  border: 1px solid red;
  vertical-align: top;
  & .articleContent{
    height: 13rem;
    -webkit-line-clamp: 5;
  }
`;
    
    


export const RestArticles = styled.div`
  width: 126.6rem;
  height: 40.5rem;
  text-align: center;
  


  
`;
export const RestArticle = styled.div`

  display: inline-block;
  width: 38rem;
  height: 40.5rem;

  margin: 0 1.5rem;
  border-radius: 0.8rem;
  vertical-align: top;
//  border: 1px dashed black;

`;
export const TopPart = styled.div`
  position: relative;
  width: 38rem;
  height: 20.8rem;
  border-radius: 0.8rem;
//  border: 1px dashed black;
  overflow: hidden;
  & .TopPartImg {
    vertical-align: top;
    width: 38rem;
    height: 20.8rem;
    max-width: 38rem;
    max-height: 20.8rem;
    border-radius: 0.8rem;
    
  }
  
`;
export const ArticleTitle = styled.div`
  height: 4rem;
  font-family: SourceHanSansSC-Medium;
  font-size: 2.2rem;
  line-height: 4rem;
  color: #333333; 
`;
export const BottomPart = styled.div`
  position: relative;
  width: 36rem;
  height: 18.1rem;
  margin: 1.6rem auto;
//  border: 1px dashed black;
  text-align: left;

  & .articleTitle {
    height: 3.6rem;
    line-height: 3.6rem;
    font-size: 2rem;
  }
  & .articleContent{
    height: 5.2rem;
    -webkit-line-clamp: 2;

  }
  & .divLine {
    width: 36rem;
    height: 1px;
    border-radius: 11.55rem;
    margin: 1.6rem auto 1.3rem;
    background-image: linear-gradient(270deg, #D1C2FF 0%, #B7E0FF 100%);
  }
`;


export const Tag = styled.div`
  font-family: SourceHanSansSC-Normal;
  font-size:1.2rem;
  color:#888888;
  margin-top: 0.6rem;
  margin-bottom: 1.2rem;
  & .tag{
    height: 2.2rem;
    padding: 0 0.6rem;
    line-height: 2.2rem;
    display: inline-block;
    background-color: #F4F4F4;
    border-radius: 1.3rem;
    margin-right: 2rem;
    
  }
`;
export const ArticleContent = styled.div`
  font-family:SourceHanSansSC-Normal;
  font-size:1.5rem;
  height: 5.2rem;
  color:#666666;
  line-height:2.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;    
  -webkit-box-orient: vertical;


`;
export const ReadMore = styled.div`
  margin-top: 2rem;
  width: inherit;
  font-size: 1.4rem;
  cursor: pointer;
  & .readMore {
    width: fit-content;
    display: inline-block;
    margin-right: 0.5rem;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    -webkit-background-clip: text;
    white-space:nowrap;
    color: transparent;
  }
`;
export const Arrow = styled.div`
  display: inline-block;
  position: relative;
  width: 2.7rem;
  height: 0.7rem;
  overflow: hidden;
  
  
  & .arrowStart {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 2.677rem;
    height: 0.097rem;
    box-sizing: border-box;
    border: none;
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

export const Data = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 6.7rem;
  height: 6.4rem;
  border-radius: 0.8rem 0;
  background-color: red;
  color: #FFFFFF;
  font-family: Helvetica;
  text-align: center;
  opacity: 0.7;
  background-image: linear-gradient(180deg, #7F55FF 0%, #5DBBFF 100%);
  
  & .data-day {
    font-size: 2.8rem;
  }
  & .data-year-month {
    font-size: 1.4rem;
  }
  
`;