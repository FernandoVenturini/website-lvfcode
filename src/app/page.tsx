// app/pages/Home/page.tsx
"use client";

import Header from "./components/Header/Header";
import SectionOne from './components/SectionOne/SectionOne';
import SectionDescription from "./components/SectionDescription/SectionDescription";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Footer from "./components/Footer/Footer";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";

export default function Home() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionDescription />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
}