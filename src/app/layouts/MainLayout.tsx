import React from 'react';
import { GlobalStyle } from '../styles/globals';
import Header from '../components/Header/Header';
import Footer from '../components/Header/Header';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );

}