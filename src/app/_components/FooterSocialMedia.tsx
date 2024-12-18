import Image from "next/image";
import React from "react";

export const FooterSocialMedia = ({
  href,
  iconPath,
  alt,
}: {
  href: string;
  iconPath: string;
  alt: string;
}) => {
  return (
    <a href={href}>
      <Image src={iconPath} alt={alt} height={28} />
    </a>
  );
};
