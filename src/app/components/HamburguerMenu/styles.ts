// app/components/HamburgerMenu/styles.ts
import styled from "styled-components";

export const MenuContainer = styled.div`
  position: relative;
`;

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HamburgerIcon = styled.span<{ isOpen: boolean }>`
  width: 25px;
  height: 3px;
  background-color: #333;
  position: relative;
  transition: transform 0.3s ease;

  &::before,
  &::after {
    content: '';
    width: 25px;
    height: 3px;
    background-color: #333;
    position: absolute;
    transition: transform 0.3s ease;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(45deg);
    &::before {
      transform: rotate(90deg) translateX(-8px);
    }
    &::after {
      transform: rotate(-90deg) translateX(8px);
    }
  `}
`;

export const NavMenu = styled.nav<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 200px;
  z-index: 1000;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;

  a {
    text-decoration: none;
    color: #333;
    font-size: 16px;

    &:hover {
      color: #0070f3;
    }
  }
`;