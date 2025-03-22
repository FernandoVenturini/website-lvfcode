import React, { useState } from 'react';
import Link from 'next/link';
import { 
    HamburgerButton, 
    HamburgerIcon, 
    NavMenu, 
    MenuList, 
    MenuItem 
} from './styles';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon isOpen={isOpen} />
      </HamburgerButton>

      <NavMenu isOpen={isOpen}>
        <MenuList>
          <MenuItem>
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about" onClick={toggleMenu}>Sobre</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/contact" onClick={toggleMenu}>Contato</Link>
          </MenuItem>
        </MenuList>
      </NavMenu>
    </>
  );
}