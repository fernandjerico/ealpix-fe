"use client";
import { useState } from "react";
import Image from "next/image";
import logoWithBg from "@/assets/images/logo-with-background.png";
import searchIcon from "@/assets/icons/search-icon.svg";
import iconDownload from "@/assets/icons/icon-download.svg";
import iconHamburger from "@/assets/icons/icon-hamburger.svg";
import { DownloadApp } from "@/app/_components/DownloadApp";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-between w-full z-10 bg-primary-color py-4 px-7 lg:px-20">
      <div className="flex items-center gap-8">
        <Image src={logoWithBg} width={120} height={42} alt="Logo" />
        <div className="flex items-center justify-center lg:block sm:hidden">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
              <Image src={searchIcon} alt="Search Icon" />
            </div>
            <input
              type="text"
              placeholder="Pencarian"
              className="border border-white rounded-3xl py-1 pl-10 pr-4 w-60 focus:outline-none bg-transparent text-white placeholder-white text-xs"
            />
          </div>
        </div>
      </div>
      <nav className="relative flex">
        <div className="lg:flex items-center gap-10 sm:hidden">
          <a
            href="#beranda"
            className="text-white text-sm relative group active">
            Beranda
          </a>
          <a href="#token" className="text-white text-sm relative group">
            Token
          </a>
          <a href="#faq" className="text-white text-sm relative group">
            Pusat Bantuan
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleModalToggle();
            }}
            className="flex items-center gap-2 border border-primary-linear-color rounded-3xl py-2 px-6 bg-primary-1-color">
            <span className="text-xs text-primary-color">Unduh</span>
            <Image
              src={iconDownload}
              alt="Download Icon"
              width={16}
              height={16}
            />
          </a>
        </div>
      </nav>

      <div className="sm:flex lg:hidden justify-between items-center z-10">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}>
          <Image src={iconHamburger} alt="Hamburger Icon" />
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
      <DownloadApp isOpen={isModalOpen} onClose={handleModalToggle} />
    </div>
  );
};
