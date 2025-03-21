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
              src="https://coffee-shoppage.netlify.app/"
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
              src=""
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
              src=""
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
              src=""
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
              src=""
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
              src=""
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
