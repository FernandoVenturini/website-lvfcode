// app/components/Header/Header.tsx
import Image from "next/image";
import { Header, ImageLogo, ItemsHeader } from "./styles";
import ItemHeader from "./ItemHeader ";

export default function HeaderComponent() {
  return (
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
        <ItemHeader>HOME</ItemHeader>
        <ItemHeader>ABOUT US</ItemHeader>
        <ItemHeader>CONTACT</ItemHeader>
      </ItemsHeader>
    </Header>
  );
}