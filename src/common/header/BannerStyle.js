import styled from "styled-components";

export const BannerWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 74rem;
    margin: 0 auto;

`
export const DemoWrapper = styled.div`
  width: 100%;
  height: 100%;  
  box-sizing: border-box;
  & .banner {
    width: 100%;
    height:74rem;
    margin: 0;
  }
  & .slick-dots {
    bottom: 0;
  }
  
/*  & .slick-dots li button:before{
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    -webkit-background-clip: text;
    white-space:nowrap;
    color: transparent;
  }
  & .slick-dots li.slick-active button:before{
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    -webkit-background-clip: text;
    white-space:nowrap;
    color: transparent;
  } */

`
export const SliderItem = styled.div`
`;
export const SliderContent = styled.div`
  position: absolute;
  top: 32%;
  left: 0;
  right: 0;
  width: 120rem;
  height: 17.6rem;
  margin: 0 auto;
  font-family: SourceHanSansSC-Regular;
  font-size:5.6rem;
  color:#ffffff;
  letter-spacing:0;
  text-align:center;
  line-height:8.8rem;
  display: -webkit-box;    
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  
`
export const FixBannerSearch = styled.div`
  position: absolute;
  top: 59%;
  left: 0;
  right:0;
  width: 79rem;
  height: 5.6rem;
  margin: 0 auto;
  & .lefts {
    display: inline-block;
  }& .rights {
    display: inline-block;
  }
`

export const Input = styled.div`
  z-index: 100;
  position: relative;
  box-sizing: border-box;
  border-radius: 8rem;
  width: 79rem;
  & input{
  width: 79rem;
  height: 5.6rem;
  box-sizing: border-box;
  opacity: 0.9;
  padding-left: 2rem;
  border-radius: 0.8rem;
  font-family: PingFangSC-Regular,serif;
  font-size: 2rem;
  color: #666666;
  letter-spacing: 0;
  border: 0.1rem solid transparent;
  outline: none;
  }
  & input:focus {
    border: 0.1rem solid #2D84FF;
    box-shadow: 0 0 0 0.2rem  rgba(45, 132, 255, 0.5);
    -moz-outline-radius: 0.8rem;
  }
`
export const SearchButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 6.4rem;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  & img:hover{
    width: 3.5rem;
    height: 3.5rem;
  }
  & img {  
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }
  
`
export const SliderWrapper = styled.div`

`;
