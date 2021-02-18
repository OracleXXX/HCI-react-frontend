import styled from "styled-components";


export const HeaderWrapper = styled.div`
    z-index: 10000;
    height: 6rem;
    background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
    width: calc(192rem - 17px);
    box-sizing: border-box;   
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 0.8rem 0 #666666;
`;
export const Logo = styled.img`
    display:inline-block;
    width: 5.2rem;
    height:4.9rem;
`;
export const Nav = styled.div`
    z-index: 1000;
    width: 104rem;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;
export const NavItem = styled.div`
    width: fit-content;
    height: 6rem;
    position: relative;
    white-space: nowrap;

    cursor: pointer;
    line-height: 2.4rem;
    font-family: SourceHanSansSC-Regular;
    font-size: 1.6rem;
    letter-spacing: 0;
    color: #FFFFFF;
    border: 1px solid transparent;
    display: flex; 
    align-items: center;
    box-sizing: border-box;
      &.CompName {
        height: 3rem;
        font-family: 'Fugaz One', cursive;  
        font-size: 3rem;    
      }
      &.CompName:hover .float-bar {
        display: block;
        }
      & .nav-name {
        height: fit-content;
        width: fit-content;
        box-sizing: border-box;
      }
      & .left {
      -webkit-transition:-webkit-transform 2s;
      }
      & .nav-name:hover {
          -webkit-font-smoothing: antialiased;
          font-weight: bolder;
      }
      &.left:hover .float-bar {
        display: block;
        
        }
      &.left:hover .triangle {
        transform: rotate(180deg);
        transition: ease-in-out 0.2s;
        }
      & .drop-down-active {
          visibility: visible;
          transition: ease-in-out 0.2s;
          opacity: 1;          
         
      }
        
`;
export const DropDownServices = styled.div`
  z-index: 50;
  visibility: hidden;
  box-sizing: border-box;
  position: absolute;
  left: -1.0rem;
  top: 5.99rem;
  height: 17.4rem;
  width: fit-content;
  background-image: linear-gradient(270deg, #7F55FF 0%, #5DBBFF 100%);
  font-size: 1.4rem;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  opacity: 0;
  box-shadow: 0 0 0.8rem 0 #666666;
  & .dropDownItem{
    height: 5.8rem;
    width: 100%;
    line-height: 5.8rem;
    text-align: center;
    border: 1px solid transparent;
    color: #FFFFFF;
    padding-right: 2rem;
    padding-left: 1rem;
    box-sizing: border-box;
  }& .dropDownItem:hover{
    border: 1px solid #FFFFFF;
    border-radius: 0.2rem;
    -webkit-font-smoothing: antialiased;
    font-weight: bolder;
  
  }
`;
export const DemoWrapper = styled.div`

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

export const FloatBar = styled.div`
  display: none;
  position: absolute;
  bottom: 0.1rem;
  left: 0;
  right: 0;
  width: 6.2rem;
  height: 0.2rem;
  background: #FFFFFF;
  margin: 0 auto;
`;
