import Image from "next/image";

export const FaqItem = ({
  title,
  content,
  icon,
  isExpanded,
  onToggle,
}: {
  title: string;
  content: string;
  icon: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={`rounded lg:rounded-xl overflow-hidden transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] ${
        isExpanded ? "max-h-96 bg-primary-1-color" : "max-h-14 bg-white"
      }`}>
      <div
        className="flex justify-between items-center px-6 lg:px-14 pt-3.5 cursor-pointer"
        onClick={onToggle}>
        <div className="text-sm lg:text-lg font-medium text-primary-text-color">
          {title}
        </div>
        <Image
          src={icon}
          alt="Chevron"
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
        <div className="text-xs lg:text-base font-normal text-primary-text-color text-justify">
          {content}
        </div>
      </div>
    </div>
  );
};
