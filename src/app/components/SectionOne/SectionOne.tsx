// app/components/SectionOne/SectionOne.tsx
import Image from "next/image";
import { SectionOne, SectionOneContent } from "./styles";

export default function SectionOneComponent() {
  return (
    <SectionOne>
      <SectionOneContent>
        <h1>We are <span>&lt;LVF_Code&gt;</span></h1>
        <h3>Your Software Factory</h3>
        <p>Our team of experts provides top-notch services that increase the <br />quality of your software and your productivity.</p>
      </SectionOneContent>
      <Image
        className="img_banner"
        src="/images/robo_programando"
        alt="Logo"
        width={550}
        height={450}
      />
    </SectionOne>
  );
}