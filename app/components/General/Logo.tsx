import Image from "next/image";

import LogoImage from "@/app/exam/assets/logo/logo.png";

export const Logo = () => {
  return (
    <div className="flex-1 center-logo text-center">
      <Image src={LogoImage} alt="logo-imagen" className="logo"></Image>
    </div>
  );
};
