import Image from "next/image";
import liquidFeatures from "@/assets/images/liquid-features.svg";
import circleShape from "@/assets/icons/circle-shape.svg";
import iconCamera from "@/assets/icons/icon-camera.svg";
import iconAudio from "@/assets/icons/icon-audio.svg";
import iconScreen from "@/assets/icons/icon-screen.svg";
import { CardFeature } from "@/app/_components/CardFeature";
import phoneLeft from "@/assets/images/phone-left.png";
import phoneRight from "@/assets/images/phone-right.png";
import googlePlay from "@/assets/icons/googleplay.svg";
import { Maxwidthdiv } from "@/components/Maxwidthdiv";

export const Features = () => {
  return (
    <div className="relative bg-primary-color pb-6">
      <div className="absolute top-0 right-4 z-0">
        <Image src={circleShape} alt="Shapes" />
      </div>
      <div className="relative z-1 w-full lg:h-full sm:h-32">
        <Image
          src={liquidFeatures}
          alt="Features"
          className="object-cover sm:object-cover lg:object-fill w-full h-full"
        />
      </div>
      <Maxwidthdiv>
        <div className="relative z-1">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            3 fitur unggulan untuk melindungi anak
          </h1>
          <div className="flex flex-wrap justify-center items-center lg:px-28 sm:gap-12 md:gap-8 lg:gap-0 mt-10">
            <CardFeature
              title="Kamera jarak jauh"
              description="Kamera jarak jauh memungkinkan Anda mengawasi area yang jauh secara real-time melalui smartphone anak. Fitur ini memberikan kemudahan memantau lokasi penting dari mana pun dengan rasa aman dan nyaman."
              iconPath={iconCamera}
            />
            <CardFeature
              title="Audio satu arah"
              description="Audio satu arah memungkinkan Anda mendengarkan suara di lokasi yang dipantau tanpa diketahui anak anda. Dengan fitur ini, Anda dapat mendengarkan aktivitas atau pembicaraan anak secara diam-diam dan leluasa."
              iconPath={iconAudio}
            />
            <CardFeature
              title="Pemantauan layar"
              description="Fitur pemantauan layar memungkinkan Anda melihat tampilan layar dari perangkat anak yang sedang dipantau secara langsung. Anda dapat memonitor aktivitas layar dengan jelas untuk memastikan keamanan dan mengawasi penggunaan perangkat."
              iconPath={iconScreen}
            />
          </div>
          <div className="mt-10 lg:mt-4 px-20 flex flex-row justify-center lg:justify-between items-center">
            <Image
              src={phoneLeft}
              alt="Mockup"
              width={335}
              height={179}
              className="lg:block sm:hidden"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-2xl xl:text-3xl font-bold text-center">
                Unduh sekarang juga
              </h3>
              <p className="text-center mt-4 text-base xl:text-lg">
                Jangan sampai terlambat untuk memantau anak anda
              </p>
              <a href="#">
                <Image
                  src={googlePlay}
                  alt="Google Play"
                  className="mt-4 sm:h-[36px]"
                />
              </a>
            </div>
            <Image
              src={phoneRight}
              alt="Mockup"
              width={274}
              height={207}
              className="lg:block sm:hidden"
            />
          </div>
        </div>
      </Maxwidthdiv>
    </div>
  );
};
