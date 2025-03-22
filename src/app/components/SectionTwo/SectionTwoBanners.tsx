// app/components/SectionTwo/SectionTwoBanners.tsx
import Image from "next/image";
import { SectionTwoBanners, SectionTwoBannersContent } from "./styles";

const banners = [
  { src: "/images/img_01.webp", alt: "Websites", title: "WEBSITES" },
  { src: "/images/img_02.webp", alt: "Portfolio", title: "PERSONAL PORTFOLIO TEMPLATE" },
  { src: "/images/img_03.webp", alt: "Dashboards", title: "DASHBOARDS" },
  { src: "/images/img_04.webp", alt: "Veterinary", title: "VETERINARY CLINIC SYSTEM" },
  { src: "/images/img_05.webp", alt: "Arts", title: "WEBSITES FOR ARTS" },
  { src: "/images/img_06.webp", alt: "Confectionery", title: "CONFECTIONERY" },
];

export default function SectionTwoBannersComponent() {
  return (
    <>
      {banners.map((banner, index) => (
        <SectionTwoBanners key={index}>          
          <SectionTwoBannersContent>
            <Image
              className="img_banner"
              src={banner.src}
              alt={banner.alt}
              width={300}
              height={300}
            />
          </SectionTwoBannersContent>
          <h4>{banner.title}</h4>
        </SectionTwoBanners>
      ))}
    </>
  );
}