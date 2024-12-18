import Image from "next/image";
import logoEalpix from "@/assets/images/logo-ealpix-app.png";
import iconFacebook from "@/assets/icons/icon-facebook.svg";
import iconInstagram from "@/assets/icons/icon-instagram.svg";
import iconLinkedin from "@/assets/icons/icon-linkedin.svg";
import iconYoutube from "@/assets/icons/icon-youtube.svg";
import { FooterItem } from "@/app/_components/FooterItem";
import { FooterItemHeader } from "@/app/_components/FooterItemHeader";
import { FooterSocialMedia } from "@/app/_components/FooterSocialMedia";

export const Footer = () => {
  return (
    <div className="px-20 py-6 bg-white flex-col gap-6 inline-flex w-full">
      <div className="sm:flex-col lg:flex-row flex justify-between items-center lg:items-start sm:gap-6">
        <div className="lg:w-1/4 w-full flex-col justify-start items-center lg:items-start gap-4 inline-flex">
          <Image
            src={logoEalpix}
            alt="Logo"
            height={40}
            className="sm:h-[46px] sm:w-[173px]"
          />
          <p className="self-stretch text-secondary-text-color text-base font-medium leading-normal tracking-tight lg:text-start sm:text-center">
            Experience personalized medical care from the comfort of your home.
          </p>
        </div>
        <div className="flex-col justify-start sm:items-center gap-4 inline-flex lg:text-start sm:text-center">
          <FooterItemHeader text="Support" />
          <FooterItem href="#" text="Getting Started" />
          <FooterItem href="#" text="FAQS" />
          <FooterItem href="#" text="Help Articles" />
          <FooterItem href="#" text="Report an issue" />
          <FooterItem href="#" text="Contact Help Desk" />
        </div>
        <div className="flex-col justify-start sm:items-center gap-4 inline-flex lg:text-start sm:text-center">
          <FooterItemHeader text="Services" />
          <FooterItem href="#" text="Booking appointments" />
          <FooterItem href="#" text="Online consultations" />
          <FooterItem href="#" text="Prescriptions" />
          <FooterItem href="#" text="Medicine Refills" />
          <FooterItem href="#" text="Medical Notes" />
        </div>
        <div className="flex-col justify-start sm:items-center gap-4 inline-flex lg:text-start sm:text-center">
          <FooterItemHeader text="Legal" />
          <FooterItem href="#" text="Terms & Conditions" />
          <FooterItem href="#" text="Privacy Policy" />
          <FooterItem href="#" text="Cookie Notice" />
          <FooterItem href="#" text="Cookie Preferences" />
          <FooterItem href="#" text="Trust Center" />
        </div>
      </div>
      <div className="w-full border border-primary-linear-color"></div>
      <div className="self-stretch py-2 lg:flex-row sm:flex-col justify-between items-center inline-flex sm:gap-6">
        <div className="justify-start items-start gap-10 flex">
          <FooterSocialMedia href="#" iconPath={iconFacebook} alt="Facebook" />
          <FooterSocialMedia
            href="#"
            iconPath={iconInstagram}
            alt="Instagram"
          />
          <FooterSocialMedia href="#" iconPath={iconLinkedin} alt="Linkedin" />
          <FooterSocialMedia href="#" iconPath={iconYoutube} alt="Youtube" />
        </div>
        <div className="text-right text-secondary-text-color text-sm font-medium leading-normal tracking-wide sm:text-center">
          Ealpix 2024 © All Rights Reserved
        </div>
      </div>
    </div>
  );
};
