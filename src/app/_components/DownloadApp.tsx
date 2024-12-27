"use client";
import Image from "next/image";
import { useState } from "react";

export const DownloadApp = ({
  isOpen,
  onClose,
  iconWarning,
  iconPlaystore,
}: {
  isOpen: boolean;
  onClose: () => void;
  iconWarning: string;
  iconPlaystore: string;
}) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const ParentContent = () => {
    return (
      <div className="py-2 px-4 flex flex-col items-center">
        <div className="bg-primary-1-color rounded-lg p-3 w-full">
          <div className="flex flex-row gap-2">
            <Image src={iconWarning} alt="Warning" />
            <p className="text-primary-text-color text-base font-medium">
              Aplikasi untuk orang tua
            </p>
          </div>
          <p className="mt-3 text-secondary-text-color text-sm font-normal">
            Unduh aplikasi ini pada perangkat atau smartphone yang digunakan
            orangtua
          </p>
        </div>
        <a
          href="#"
          className="mt-6 flex gap-2 rounded px-6 py-2 bg-primary-color w-fit text-white">
          <Image src={iconPlaystore} alt="Download" />
          Unduh Aplikasi
        </a>
      </div>
    );
  };

  const KidsContent = () => {
    return (
      <div className="py-2 px-4 flex flex-col items-center">
        <div className="bg-primary-1-color rounded-lg p-3 w-full">
          <div className="flex flex-row gap-2">
            <Image src={iconWarning} alt="Warning" />
            <p className="text-primary-text-color text-base font-medium">
              Aplikasi untuk anak
            </p>
          </div>
          <p className="mt-3 text-secondary-text-color text-sm font-normal">
            Unduh aplikasi ini pada perangkat atau smartphone anak
          </p>
        </div>
        <a
          href="#"
          className="mt-6 flex gap-2 rounded px-6 py-2 bg-primary-color w-fit text-white">
          Unduh Aplikasi
        </a>
      </div>
    );
  };

  const tabsContent = [
    {
      title: "Orang Tua",
      content: <ParentContent />,
    },
    {
      title: "Anak",
      content: <KidsContent />,
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={onClose}>
      <div
        className="bg-white rounded-xl p-6 w-5/6 lg:w-1/3 xl:w-1/4 relative"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex">
          {tabsContent.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer px-4 py-2 text-center text-base font-medium w-full ${
                activeTab === index
                  ? "text-primary-color border-b-2 border-primary-color"
                  : "text-secondary-text-color hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(index)}>
              {tab.title}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="text-gray-700 text-sm">
            {tabsContent[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
};
