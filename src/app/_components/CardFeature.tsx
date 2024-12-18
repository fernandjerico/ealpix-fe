import Image from "next/image";
import divider from "@/assets/icons/divider.svg";

export const CardFeature = ({
  title,
  description,
  iconPath,
}: {
  title: string;
  description: string;
  iconPath: string;
}) => {
  return (
    <div className="w-full sm:w-full md:w-1/3 lg:w-1/3">
      <div className="flex flex-col items-center">
        <Image src={iconPath} alt="Icon" height={60} width={60} />
        <h3 className="mt-2 text-xl font-semibold text-center">{title}</h3>
        <Image src={divider} alt="Divider" className="mt-6" />
        <p className="mt-6 text-center sm:px-10 md:px-2 lg:px-10">
          {description}
        </p>
      </div>
    </div>
  );
};
