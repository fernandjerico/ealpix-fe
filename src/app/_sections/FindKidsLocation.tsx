import maps from "@/assets/images/maps.svg";
import { Maxwidthdiv } from "@/components/Maxwidthdiv";
import Image from "next/image";

export const FindKidsLocation = () => {
  return (
    <div className="p-12 sm:py-20 lg:p-20">
      <Maxwidthdiv>
        <div className="flex flex-col justify-center">
          <h3 className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-primary-text-color font-bold">
            Temukan lokasi anak
          </h3>
          <h5 className="text-center lg:text-2xl md:text-lg sm:text-base text-primary-color font-normal mt-3">
            kapan saja & dimana saja
          </h5>
        </div>
        <div className="lg:mt-10 sm:mt-6 lg:w-full flex lg:flex-row sm:flex-col lg:gap-10 sm:gap-6">
          <div className="lg:w-4/6 md:w-full sm:w-full flex justify-center">
            <Image
              src={maps}
              alt="maps"
              className="lg:w-full md:w-3/4 sm:w-full"
            />
          </div>
          <div className="lg:w-5/6 sm:w-full">
            <p className="lg:text-xl md:text-base sm:text-sm text-justify font-normal text-primary-text-color">
              Melacak anak-anak Anda di mana saja dan kapan saja. Lacak anak
              Anda secara real-time dan ketahui keberadaan mereka. Ealpix
              meningkatkan teknologi pelacakan lokasi sehingga orang tua dapat
              dengan cepat mengonfirmasi lokasi anak mereka. Temukan mereka jika
              berada dalam bahaya, atau intervensi jika mereka memasuki tempat
              asing atau berbahaya. Gunakan Ealpix untuk mengeksplorasi fitur
              Pelacak Lokasi lebih lanjut.
            </p>
          </div>
        </div>
      </Maxwidthdiv>
    </div>
  );
};
