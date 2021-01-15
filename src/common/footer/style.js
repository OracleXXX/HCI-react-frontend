import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  width: calc(192rem - 17px);
  height: auto;
  overflow: hidden;
  & .footer-img {
    width: inherit;
    height: 76rem;
  }    
  & .pointer:hover{
    font-weight: bolder;
  }
`;
export const AboutUs = styled.div`

  position: absolute;
  left: 0;
  right: 0;
  top: 8%;
  margin: 0 auto;
  width: 53%;
  height: 16.7%;
  text-align: center;
  color: #FFFFFF;
  
  & .about-us-title {
    height: 37%;
    margin: 0 auto;
    font-family: SourceHanSansSC-Medium;
    font-size: 3.2rem;
    line-height: 146%;
  }
  & .about-us-content {
    width: 100%;
    height: 63%;
    font-family: SourceHanSansSC-Regular;
    font-size: 1.5em;
    line-height: 186%;
    margin: 0 auto;
    padding-top: 2.38%;
    padding-bottom: 1%;
    
    
  }
`;
export const FooterContent = styled.div`
  position: absolute;
  bottom: 0;
  width:100%;
  height: 37%;
  background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  font-family: SourceHanSansSC-Normal;
  font-size: 1.4rem;
  color: #FFFFFF;
  letter-spacing: 0;
  opacity: 0.96;

  
`;


export const FooterMain = styled.div`
  display: flex;
  width: 100%;
  height: 82.8%;

  

  & .vertical-div-line{
    width: 1px;
    height: 28%;
    background-color: #FFFFFF;
    opacity: 0.16;
    margin: auto;
  }
  & .nav-items-footer {
    width: 15.5%;
    height: 100%;
    margin: 0 auto;
    text-align: left;
    
    
  }   
  & .nav-title-footer {
    font-family: SourceHanSansSC-Regular;    
    margin: 30% auto;
    white-space:nowrap; 
    color: #FFFFFF;
    font-size: 1.5rem;
    cursor: pointer;
  }
  & .nav-item-footer {
    font-family: SourceHanSansSC-Normal;
    margin: 30% auto;
    opacity: 0.8;  
    white-space:nowrap;
    color: #FFFFFF; 
    cursor: pointer;
  }
`;
export const FooterNav = styled.div`
  width: 33%;
  height: 100%;
  margin: 0 auto;


`;


export const FooterContactUs = styled.div`
  width: 33%;
  height: 100%;
  margin: 0 auto;
`;


export const PopularCities = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
  margin: 0 auto;
  padding-left: 2rem;
  
  & .col-left {
    width: 50%;
    display: inline-block;
  }
  & .col-right {
    vertical-align: top;
    width: 50%;
    display: inline-block;
  }
  & .two-columns {
    width: 60%;
  }
  & .col {
    margin: 15.51% auto;
  }

`;



export const CopyRight = styled.div`
  position: absolute;
  bottom: 0;
  width: inherit;
  height: 18.2%;
  text-align: center;
  font-size: 1.3rem;
  & .horiz-div-line {
     width: 62.5%;
    height: 1px;
    margin: 0 auto;
    opacity: 0.12;
    background-color: #FFFFFF;
    border-radius: 16px;
  }
  & .copyright-content {
    height: 100%;
    line-height: 384%;
    font-family: Helvetica;
    opacity: 0.6;
  }
`;

