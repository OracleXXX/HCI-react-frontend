import styled from "styled-components";

export const PopupWrapper = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.50);
  display: flex;
  justify-content: center;
  align-items: center; 
  
`;

export const PopupItem = styled.div`
  width: fit-content;
  height: fit-content;
  box-shadow: 0 0 5px 0 rgba(175,175,175,0.19);
  border-radius: 0.8rem;

`;
