import styled from "styled-components";


export const HeaderWrapper = styled.div`
    z-index: 100;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    height: 6rem;
    width: calc(192rem - 17px);
    min-width: 1300px;

    box-sizing: border-box;   
`;
export const Logo = styled.img`
    float: left;
    display:inline-block;
    width: 5.2rem;
    height:4.9rem;
`;
export const Nav = styled.div`
    width: 120rem;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
`;
export const NavItem = styled.div`
    position: relative;
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
  font-weight: normal;
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
    width: calc(192rem - 17px);
    min-width: 1300px;

  & .banner {
    width:calc(192rem - 17px);
    height:auto;
    max-width:192rem;
    min-width: 1300px;


    
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
  box-sizing: border-box;
  border-radius: 8rem;
  width: 79rem;
  & input{
  width: 79rem;
  height: 5.6rem;
  box-sizing: border-box;
  opacity: 0.9;
  padding-left: 2rem;
  border: 0;
  border-radius: 0.8rem;
  font-family: PingFangSC-Regular,serif;
  font-size: 2rem;
  color: #666666;
  letter-spacing: 0;
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