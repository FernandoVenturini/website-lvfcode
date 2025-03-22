// app/pages/Home/page.tsx
"use client";

import Header from "./components/Header/Header";
import SectionOne from './components/SectionOne/SectionOne';
import SectionDescription from "./components/SectionDescription/SectionDescription";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionDescription />
      <SectionTwo />
      <Footer />
    </>
  );
}