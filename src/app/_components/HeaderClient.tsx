"use client";
import { useState } from "react";
import Image from "next/image";
import { DownloadApp } from "./DownloadApp";
import { Maxwidthdiv } from "@/components/Maxwidthdiv";

export const HeaderClient = ({
  logoWithBg,
  iconMenu,
  iconDownload,
  iconPlaystore,
  iconWarning,
}: {
  logoWithBg: string;
  iconMenu: string;
  iconDownload: string;
  iconPlaystore: string;
  iconWarning: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className=" bg-primary-color py-4 xl:py-2 px-7 sm:px-2 lg:px-20 xl:px-10 w-full">
      <Maxwidthdiv className="flex justify-between w-full z-10 items-center">
        <div className="flex items-center gap-8">
          <Image src={logoWithBg} className="w-32 lg:w-36 xl:w-48" alt="Logo" />
        </div>
        <nav className="relative flex">
          <div className="lg:flex items-center gap-10 sm:hidden">
            <a
              href="#beranda"
              className="text-white text-sm xl:text-base relative group active">
              Beranda
            </a>
            <a
              href="#token"
              className="text-white text-sm xl:text-base relative group">
              Token
            </a>
            <a
              href="#faq"
              className="text-white text-sm xl:text-base relative group">
              Pusat Bantuan
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleModalToggle();
              }}
              className="flex items-center gap-2 border border-primary-linear-color rounded-3xl py-2 px-6 bg-primary-1-color">
              <span className="text-xs xl:text-base text-primary-color">
                Unduh
              </span>
              <Image
                src={iconDownload}
                alt="Download Icon"
                className="w-4 h-4 xl:w-6 xl:h-6"
              />
            </a>
          </div>
        </nav>

        <div className="sm:flex lg:hidden justify-between items-center z-10">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}>
            <Image src={iconMenu} alt="Menu" />
          </button>

          {isMenuOpen && (
            <div className="absolute top-16 right-0 w-full bg-primary-color py-4 flex flex-col items-center justify-center transform transition-all duration-300 ease-out opacity-100 translate-y-0">
              <a
                href="#beranda"
                className="block text-white text-sm py-2 px-4 hover:text-primary-color hover:bg-primary-1-color">
                Beranda
              </a>
              <a
                href="#token"
                className="block text-white text-sm py-2 px-4 hover:text-primary-color hover:bg-primary-1-color">
                Token
              </a>
              <a
                href="#faq"
                className="block text-white text-sm py-2 px-4 hover:text-primary-color hover:bg-primary-1-color">
                Pusat Bantuan
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleModalToggle();
                }}
                className="flex w-4/5 justify-center items-center gap-2 border border-primary-linear-color rounded-3xl py-2 px-6 bg-primary-1-color mt-2">
                <span className="text-xs text-primary-color">Unduh</span>
                <Image
                  src={iconDownload}
                  alt="Download Icon"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          )}
        </div>
        <DownloadApp
          isOpen={isModalOpen}
          onClose={handleModalToggle}
          iconPlaystore={iconPlaystore}
          iconWarning={iconWarning}
        />
      </Maxwidthdiv>
    </div>
  );
};
