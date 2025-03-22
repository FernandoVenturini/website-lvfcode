// app/components/Header/styles.ts
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    height: 150px;
    margin: 0 auto;
  }
`;

export const ImageLogo = styled.div`
  margin-left: 3rem;

  .img_logo {
    border-radius: 50%;
    border: 1px solid #999;
  }

  @media (max-width: 600px) {
    width: 85px;
    margin-left: 1rem;
  }
`;

export const ItemsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding: 15px;
  margin-right: 6rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #f00;
  cursor: pointer;
  width: 25%;

  &:hover {
    border-radius: 10px;
    color: white;
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;