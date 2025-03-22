// app/components/SectionDescription/styles.ts
import styled from "styled-components";

export const SectionDescription = styled.div`
  margin: 4rem auto;
  width: 75%;
  height: 20vh;
  color: #ccc;

  h4 {
    font-size: 32px;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 90%;

    h4 {
      font-size: 24px;
    }
  }
`;