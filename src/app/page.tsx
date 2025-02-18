"use client";
import Image from "next/image";
import {
  Header,
  ItemHeader,
  ImageLogo,
  SectionOne,
  SectionOneContent,
  SectionDescription,
  SectionTwo,
  ItemsHeader,
  SectionTwoBanners,
  SectionTwoBannersContent,
  Footer
} from "./StyledComponents";

export default function Home() {
  return (
    <>
      <Header>
        <ImageLogo>
          <Image
            className="img_logo"
            src="/images/LVF_Code.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </ImageLogo>

        <ItemsHeader>
          <ItemHeader>
            <>HOME</>
          </ItemHeader>
          <ItemHeader>
            <>ABOUT US</>
          </ItemHeader>
          <ItemHeader>
            <>CONTACT</>
          </ItemHeader>
        </ItemsHeader>
      </Header>

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

      <SectionDescription>
        <h4>As software developers we strive to deliver not just well-written code, but code that delivers real value to every customer.</h4>
      </SectionDescription>

      <SectionTwo>
        <SectionTwoBanners>
          <SectionTwoBannersContent>
            <Image
              className="img_banner"
              src="/images/img_01.webp"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionTwoBannersContent>
          <h4>JEWELRY</h4>
        </SectionTwoBanners>

        <SectionTwoBanners>
          <SectionTwoBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/13eddf87-e45c-4127-9790-8e4cd68c1e10?w=710&cf_fit=scale-down&q=85&format=auto&s=57b2ed5787ddbb79fb462bfa23c8fb8aed82ca96480dd42b4d206b9bf6e74576"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionTwoBannersContent>
          <h4>PERSONAL PORTFOLIO TEMPLATE</h4>
        </SectionTwoBanners>

        <SectionTwoBanners>
          <SectionTwoBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/0f4e235d-4870-4806-b5fe-0454cbedaca1?w=710&cf_fit=scale-down&q=85&format=auto&s=1934049c8eefad2094f7aaa2cceb19b494483772a8f501a2cc42ba9e0bfbf17e"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionTwoBannersContent>
          <h4>FOOD AND RESTAURANT</h4>
        </SectionTwoBanners>

        <SectionTwoBanners>
          <SectionTwoBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/fad1180c-0746-4330-b74e-9f82fc311206?w=710&cf_fit=scale-down&q=85&format=auto&s=bab8bc9067da670368bd4aae6e4bc13c26a756e79c5f5c354faa5010c6a323d5"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionTwoBannersContent>
          <h4>CAR DEALERSHIPCAR</h4>
        </SectionTwoBanners>

        <SectionTwoBanners>
          <SectionTwoBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/92c466b1-4885-4368-b49c-6ee4884310b4?w=710&cf_fit=scale-down&q=85&format=auto&s=8095778987455f58319aaee36a9fb487d77a0a4ee15f0a4e246dda8f5283d5b6"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionTwoBannersContent>
          <h4>TRAVELLING</h4>
        </SectionTwoBanners>

        <SectionTwoBanners>
          <SectionTwoBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/611bcc23-f289-499d-baf8-5ef631388492?w=710&cf_fit=scale-down&q=85&format=auto&s=12ffb72c3916bc45ead87bea7d3e5c00eba82bd4cae23d847ce171bf07567f71"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionTwoBannersContent>
          <h4>BUSINESS</h4>
        </SectionTwoBanners>
      </SectionTwo>

      <Footer>
        <p>© 2025 LVF_Code. All Rights Reserved.</p>
      </Footer>
    </>
  );
}
