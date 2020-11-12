import styled from "styled-components";


export const HeaderWrapper = styled.div`
    z-index: 100;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    height: 6rem;
    width: 100%;

    
`;


export const Logo = styled.img`
    float: left;
    display:inline-block;
    width: auto;
    height:5.6rem;

`;

export const Nav = styled.div`
    width: 120rem;
    height: 100%;

    box-sizing: border-box;
    margin: 0 auto;
  
`;

export const NavItem = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    cursor: pointer;
    line-height: 5.6rem;
    padding: 0 2.7rem;
    
    font-family: SourceHanSansSC-Regular;
    font-size: 1.6rem;
    letter-spacing: 0;
    color: #FFFFFF;
    border: 1px solid transparent;
      &.CompName {
        display: inline-block;
        font-family: 'Lobster', cursive;
        font-size: 2rem;   
      }
      &.CompName:hover {
         border: 1px solid #FFFFFF;
         font-weight: bold;
      }
      &.left{
         display: inline-block;

      }
      &.left:hover{
        border: 1px solid #FFFFFF;
        border-radius: 0.2rem;
        font-weight: bold;
      }
/*      &.right {
        float: right;
        color: #969696;
      }*/
/*      &.active {
        color: #ea6f5a;
      } */
`;

export const DropDownServices = styled.div`
  z-index: 100;
  position: absolute;
  left: 0;
  top: 5.65rem;
  height: 17.4rem;
  width: 100%;

  background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  font-size: 13px;
  & .dropDownItem{
    text-align: center;
    border: 1px solid transparent;
    color: #FFFFFF;
  }& .dropDownItem:hover{
    border: 1px solid #FFFFFF;
    border-radius: 0.2rem;
    font-weight: bold;
  
  }
`;

export const BannerWrapper = styled.div`
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
    position: relative;
    width:100%;
  & .banner {
    width:100%;
    height:auto;
    max-width:100%;
    min-width: 50rem;
    max-height:100%;
    min-height: 37rem;
    
  }
`
export const DemoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;  
`

export const DemoTitle = styled.div`
  position: absolute;
  top: 32%;
  left: 0;
  right: 0;
  width: 95.2rem;
  height: 17.6rem;
  margin: 0 auto;
  font-family: SourceHanSansSC-Regular;
  font-size:5.6rem;

  color:#ffffff;
  letter-spacing:0;
  text-align:center;
  line-height:8.8rem;

  
`
export const DemoContent = styled.div`
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
  position: relative;
 
  border-radius: 8rem;
  width: 79rem;
  & input{
  width: 72.6rem;
  height: 5.6rem;
  opacity: 0.9;
  padding: 0;
  border: 0;
  border-bottom-left-radius: 0.8rem;
  border-top-left-radius: 0.8rem;
  font-family: PingFangSC-Regular,serif;
  font-size: 2rem;
  color: #666666;
  letter-spacing: 0;
    &::placeholder {
      padding-left: 2rem;
  }
  }
`

export const SearchButton = styled.div`
  position: relative;
  float: right;
  width: 6.4rem;
  height: 5.6rem;

  border-bottom-right-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  & img {
    position: absolute;
    left: 1.7rem;
    top: 1.3rem;  
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }
  
`