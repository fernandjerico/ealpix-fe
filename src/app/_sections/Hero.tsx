import Image from "next/image";
import liquidHero from "@/assets/images/liquid-hero.svg";
import heroBackground from "@/assets/images/hero-background.svg";
import iconPlaystore from "@/assets/icons/icon-playstore.svg";
import heroImage from "@/assets/images/hero.png";

export const Hero = () => {
  return (
    <div id="beranda">
      <div className="relative w-full lg:h-full sm:h-32">
        <Image
          src={liquidHero}
          alt="Liquid Hero"
          className="object-cover sm:object-cover lg:object-fill w-full h-full"
        />
      </div>
      <div className="relative px-12">
        <div
          className="absolute lg:block sm:hidden top-1/2 left-1/2 w-11/12 h-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: `url(${heroBackground.src})`,
            marginTop: `32px`,
            backgroundSize: `contain`,
            backgroundRepeat: `no-repeat`,
          }}></div>

        <div className="relative z-1 flex flex-col items-center w-full h-full">
          <h1 className="font-serif text-primary-text-color text-lg sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center px-0 sm:px-2 md:px-24 lg:px-36">
            Kontrol & Awasi anak melalui{" "}
            <span className="text-primary-color">smartphone anda</span>
          </h1>
          <p className="font-sans mt-3 text-primary-text-color text-center sm:text-sm lg:text-base">
            Awasi anak anda dengan yang terpercaya dan efektif
          </p>
          <a
            href="#"
            className="mt-10 flex gap-2 rounded px-6 py-2 bg-primary-color">
            <Image src={iconPlaystore} alt="Download" />
            Unduh Aplikasi
          </a>
          <Image
            src={heroImage}
            alt="Hero"
            className="mt-16 mb-6 lg:h-[429px] lg:w-[590px]"
          />
        </div>
      </div>
    </div>
  );
};
