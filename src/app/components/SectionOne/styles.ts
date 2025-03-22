// app/components/SectionOne/styles.ts
import styled from "styled-components";

export const SectionOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 6rem;

  .img_banner {
    border-radius: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const SectionOneContent = styled.div`
  width: 50%;
  height: 40vh;
  margin: 0 auto;

  h1 {
    color: #fff;
    opacity: 0.7;
    font-size: 48px;
    text-transform: uppercase;
  }

  span {
    color: #f00;
    font-size: 54px;
  }

  h3 {
    font-size: 32px;
    color: #f00;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    margin-top: 2rem;
    line-height: 24px;
    color: #ccc;
    letter-spacing: 0.1em;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
    text-align: center;
    padding: 1rem;

    h1 {
      font-size: 28px;
    }

    span {
      font-size: 32px;
    }

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;