// app/components/SectionTwo/styles.ts
import styled from "styled-components";

// Componentes estilizados
export const SectionTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTwoBanners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(50,50,50,0.3);
  border-radius: 10px;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 8px 8px rgba(255, 255, 255, 0.5);
  }

  h4 {
    font-size: 18px;
    color: #f00;
    margin-top: 1rem;
  }
`;

export const SectionTwoBannersContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  padding: 15px;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
  }
`;



