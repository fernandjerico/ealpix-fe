import Image from "next/image";
import coin from "@/assets/icons/icon-coin.svg";
import heroBackground from "@/assets/images/hero-background.svg";
import treasure from "@/assets/images/treasure-pack.png";
import phoneFrame from "@/assets/images/phone-token.png";
import coinBig from "@/assets/images/coins.png";
import topupStep1 from "@/assets/images/topup-step-1.png";
import topupStep2 from "@/assets/images/topup-step-2.png";
import topupStep3 from "@/assets/images/topup-step-3.png";
import { Maxwidthdiv } from "@/components/Maxwidthdiv";

export const EalpixToken = () => {
  return (
    <div className="flex flex-col px-10 lg:px-20 pb-10" id="token">
      <Maxwidthdiv>
        <div className="flex flex-row gap-6 justify-center">
          <Image src={coin} alt="Ealpix Token" />
          <h3 className="text-2xl lg:text-4xl text-primary-text-color font-bold">
            Token Ealpix
          </h3>
        </div>
        <div className="relative mt-10 w-full rounded-2xl lg:rounded-3xl bg-gradient-to-b from-primary-color to-primary-linear-color">
          <div
            className="absolute z-1 lg:block top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundImage: `url(${heroBackground.src})`,
              backgroundSize: `cover`,
              backgroundPosition: `bottom`,
              backgroundRepeat: `no-repeat`,
            }}></div>
          <div className="relative flex flex-row lg:justify-between sm:justify-center items-end">
            <Image
              src={treasure}
              alt="Treasure"
              className="lg:w-1/3 lg:block sm:hidden"
            />
            <div className="flex flex-col items-center gap-2 lg:gap-6 sm:mt-4 lg:w-1/3 sm:w-full">
              <div className="bg-white rounded-[40px] py-2 px-6 w-fit">
                <p className="text-primary-13-color text-center text-base lg:text-2xl font-medium">
                  1 token = 1000 rupiah
                </p>
              </div>
              <Image
                src={phoneFrame}
                alt="Frame"
                className="px-4 md:px-32 lg:px-6"
              />
            </div>
            <Image
              src={coinBig}
              alt="Token"
              className="lg:w-1/3 p-16 lg:block sm:hidden"
            />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex flex-col">
            <h3 className="text-primary-text-color text-base lg:text-2xl font-semibold">
              Apa itu token Ealpix?
            </h3>
            <p className="mt-3 lg:mt-6 text-secondary-text-color text-sm lg:text-xl font-normal text-justify">
              Token Ealpix adalah token yang memungkinkan pengguna mengakses dan
              mengaktifkan tiga fitur unggulan: kamera jarak jauh, audio satu
              arah, dan pemantauan layar. Bayangkan seperti kartu akses istimewa
              yang membuka pintu menuju teknologi canggih, memastikan Anda bisa
              mengontrol dan menikmati fitur-fitur keren ini dengan mudah dan
              aman.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-primary-text-color text-base lg:text-2xl font-semibold">
              Bagaimana cara menggunakan token?
            </h3>
            <p className="mt-3 lg:mt-6 text-secondary-text-color text-sm lg:text-xl font-normal text-justify">
              Cara menggunakan token ealpix cukup mudah, Anda hanya perlu
              menggunakannya pada saat ingin mengaktifkan fitur-fitur unggulan
              yang ada pada aplikasi parent. Token ini bisa dibeli dengan harga
              yang terjangkau dan bisa digunakan untuk mengakses fitur-fitur
              canggih yang ada pada aplikasi.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-primary-text-color text-base lg:text-2xl font-semibold">
              Bagaimana cara kerja token?
            </h3>
            <p className="mt-3 lg:mt-6 text-secondary-text-color text-sm lg:text-xl font-normal text-justify">
              Cara kerjanya sederhana, dengan menggunakan token pada aplikasi
              parent maka anda bisa terhubung langsung dengan perangkat anak
              anda dan memberikan Anda izin penuh untuk menjelajahi kemampuan
              canggih tanpa ribet. Ini seperti memiliki remote kontrol eksklusif
              yang hanya Anda miliki, yang bisa membuat Anda merasa lebih
              terkendali dan aman.
            </p>
          </div>
        </div>
        <div className="relative mt-10 w-full rounded-2xl lg:rounded-3xl bg-gradient-to-b from-primary-color to-primary-linear-color">
          <div
            className="absolute z-1 sm:hidden lg:block top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundImage: `url(${heroBackground.src})`,
              backgroundSize: `contain`,
              backgroundPosition: `bottom`,
              backgroundRepeat: `no-repeat`,
            }}></div>
          <div className="mt-10 flex justify-center">
            <p className="relative mt-8 bg-white rounded-[40px] py-2 px-6 w-fit text-primary-13-color text-center text-base lg:text-2xl font-medium">
              Cara top-up token Ealpix
            </p>
          </div>
          <div className="relative flex flex-col lg:flex-row justify-center lg:justify-evenly lg:space-x-4 pt-8 pb-10 sm:px-20 sm:gap-10">
            <div className="flex flex-col w-full lg:w-1/4 lg:max-w-[200px] gap-6">
              <Image src={topupStep1} alt="Step 1" className="object-contain" />
              <p className="text-center text-white text-base lg:text-lg font-medium">
                1. Klik tombol Top-Up
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/4 lg:max-w-[200px] gap-6">
              <Image src={topupStep2} alt="Step 2" className="object-contain" />
              <p className="text-center text-white text-base lg:text-lg font-medium">
                2. Pilih jumlah coin & Klik tombol buy
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/4 lg:max-w-[200px] gap-6">
              <Image src={topupStep3} alt="Step 3" className="object-contain" />
              <p className="text-center text-white text-base lg:text-lg font-medium">
                3. Bukti pembelian akan muncul setelah bayar
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col">
            <h3 className="text-primary-text-color text-base lg:text-lg font-medium">
              1. Klik tombol Top-Up
            </h3>
            <p className="mt-3 text-secondary-text-color text-sm lg:text-xl font-normal text-justify">
              Buka aplikasi Ealpix dan klik tombol Top-Up pada halaman Home atau
              Profile untuk memulai proses top-up token Ealpix.
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <h3 className="text-primary-text-color text-base lg:text-lg font-medium">
              2. Pilih jumlah coin & Klik tombol buy
            </h3>
            <p className="mt-3 text-secondary-text-color text-sm lg:text-xl font-normal text-justify">
              Pilih jumlah coin yang ingin Anda beli dan klik tombol buy untuk
              melanjutkan ke proses pembayaran, anda akan diarahkan ke halaman
              pembayaran dan disini anda dapat memilih untuk membayar
              menggunakan bermacam-macam metode pembayaran.
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <h3 className="text-primary-text-color text-base lg:text-lg font-medium">
              3. Bukti pembelian akan muncul setelah bayar
            </h3>
            <p className="mt-3 text-secondary-text-color text-sm lg:text-xl font-normal text-justify">
              Setelah pembayaran berhasil, Anda akan kembali ke halaman Top Up
              dan bukti pembelian akan muncul pada layar Anda. Token Ealpix yang
              Anda beli akan langsung masuk ke akun Anda dan siap digunakan.
            </p>
          </div>
        </div>
      </Maxwidthdiv>
    </div>
  );
};
