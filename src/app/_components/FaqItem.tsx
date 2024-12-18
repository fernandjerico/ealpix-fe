import React from "react";
import iconChevronRight from "@/assets/icons/icon-chevron-right.svg";
import Image from "next/image";

export const FaqItem = ({
  title,
  content,
  isExpanded,
  onToggle,
}: {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={`rounded lg:rounded-xl overflow-hidden transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] ${
        isExpanded ? "max-h-96 bg-primary-1-color" : "max-h-14 bg-white"
      }`}>
      <div
        className="flex justify-between items-center px-6 lg:px-14 pt-4 cursor-pointer"
        onClick={onToggle}>
        <div className="text-lg font-medium text-primary-text-color">
          {title}
        </div>
        <Image
          src={iconChevronRight}
          alt="Chevron Right"
          height={28}
          width={28}
          className={`transition-all duration-300 ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </div>

      <div
        className={`px-6 lg:px-14 pb-6 pt-4 overflow-hidden transition-all duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}>
        <div className="text-base font-normal text-primary-text-color text-justify">
          {content}
        </div>
      </div>
    </div>
  );
};
