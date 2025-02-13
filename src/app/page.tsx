"use client";
import Image from "next/image";
import {
  Header,
  ItemHeader,
  ImageLogo,
  SectionOne,
  ItemsHeader,
  SectionOneBanners,
  SectionOneBannersContent
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
        <SectionOneBanners>
          <SectionOneBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/2e363c2c-e003-4872-8bdc-eef698b502dc?w=710&cf_fit=scale-down&q=85&format=auto&s=972593fdeea47c34e3d904daf72b4e9a84006ae8a818904e721907c58062e3a4"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionOneBannersContent>
          <h4>ADMIN PANEL TEMPLATE - DASHBOARD</h4>
        </SectionOneBanners>

        <SectionOneBanners>
          <SectionOneBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/13eddf87-e45c-4127-9790-8e4cd68c1e10?w=710&cf_fit=scale-down&q=85&format=auto&s=57b2ed5787ddbb79fb462bfa23c8fb8aed82ca96480dd42b4d206b9bf6e74576"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionOneBannersContent> 
          <h4>PERSONAL PORTFOLIO TEMPLATE</h4> 
        </SectionOneBanners>

        <SectionOneBanners>
          <SectionOneBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/0f4e235d-4870-4806-b5fe-0454cbedaca1?w=710&cf_fit=scale-down&q=85&format=auto&s=1934049c8eefad2094f7aaa2cceb19b494483772a8f501a2cc42ba9e0bfbf17e"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionOneBannersContent>
          <h4>FOOD AND RESTAURANT</h4>
        </SectionOneBanners>

        <SectionOneBanners>
          <SectionOneBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/fad1180c-0746-4330-b74e-9f82fc311206?w=710&cf_fit=scale-down&q=85&format=auto&s=bab8bc9067da670368bd4aae6e4bc13c26a756e79c5f5c354faa5010c6a323d5"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionOneBannersContent>
          <h4>CAR DEALERSHIPCAR</h4>
        </SectionOneBanners>

        <SectionOneBanners>
          <SectionOneBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/92c466b1-4885-4368-b49c-6ee4884310b4?w=710&cf_fit=scale-down&q=85&format=auto&s=8095778987455f58319aaee36a9fb487d77a0a4ee15f0a4e246dda8f5283d5b6"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionOneBannersContent>
          <h4>TRAVELLING</h4>
        </SectionOneBanners>

        <SectionOneBanners>
          <SectionOneBannersContent>
            <Image
              className="img_banner"
              src="https://elements-resized.envatousercontent.com/elements-cover-images/f52accff-d53a-45fa-af62-bbab77c49575?w=710&cf_fit=scale-down&q=85&format=auto&s=8d142a74440734abbd7acc03d057685be50e5d61d55850636b304ceeec7f3b1d"
              alt="Logo"
              width={300}
              height={300}
            />
          </SectionOneBannersContent>
          <h4>FASHION AND BEAUTY</h4>
        </SectionOneBanners>

        
      </SectionOne>
    </>
  );
}
