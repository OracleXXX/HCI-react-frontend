import styled from "styled-components";


export const HeaderWrapper = styled.div`
    z-index: 100;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    height: 60px;

    
`;


export const Logo = styled.img`
    float: left;
    display:inline-block;
    width: auto;
    height:56px;

`;

export const Nav = styled.ul`
    width: 1120px;
    height: 100%;

    box-sizing: border-box;
    margin: 0 auto;
  
`;

export const NavItem = styled.li`
    position: relative;
    cursor: pointer;
    line-height: 56px;
    padding: 0 27px;
    
    font-family: SourceHanSansSC-Regular;
    font-size: 16px;
    letter-spacing: 0;
    color: #FFFFFF;
    border: 1px solid transparent;
      &.CompName {
        float: left;
 
        font-family: 'Lobster', cursive;
        font-size: 20px;   
      }
      &.CompName:hover {
         border: 1px solid #FFFFFF;
         font-weight: bold;
      }
      &.left{
        float: left;

      }
      &.left:hover{
        border: 1px solid #FFFFFF;
        border-radius: 2px;
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
  top: 56.5px;
  height: 174px;
  width: 100%;

  background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  font-size: 13px;
  & .dropDownItem{
    text-align: center;
    border: 1px solid transparent;
    color: #FFFFFF;
  }& .dropDownItem:hover{
    border: 1px solid #FFFFFF;
    border-radius: 2px;
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
    min-width: 960px;
    max-height:100%;
    min-height: 370px;
    
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
  top: 50%;
  left: 50%;
  width: 952px;
  height: 176px;
  margin: -120px  0 0 -476px;
  font-family: SourceHanSansSC-Regular;
  font-size:2.4em;
  min-font-size: 1em;
  color:#ffffff;
  letter-spacing:0;
  text-align:center;
  line-height:88px;

  
`
export const DemoContent = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 790px;
  height: 56px;
  margin: 0 0 -125px -386px; 
  & .lefts {
    display: inline-block;
  }& .rights {
    display: inline-block;
  }
`

export const Input = styled.div`
  position: relative;
 
  border-radius: 8px;
  width: 790px;
  & input{
  width: 726px;
  height: 56px;
  opacity: 0.9;
  padding: 0;
  border: 0;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  font-family: PingFangSC-Regular,serif;
  font-size: 20px;
  color: #666666;
  letter-spacing: 0;
    &::placeholder {
      padding-left: 20px;
  }
  }
`

export const SearchButton = styled.div`
  position: relative;
  float: right;
  width: 64px;
  height: 56px;

  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  & img {
    position: absolute;
    left: 17px;
    top: 13px;  
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  
`