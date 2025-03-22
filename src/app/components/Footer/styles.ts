// app/components/Footer/styles.ts
import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #999;
  box-shadow: 0 0 8px #00000040, 0 50px 100px #32325d1a;

  p {
    text-align: center;
    color: #f00;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      font-size: 12px;
      text-align: center;
    }
  }
`;