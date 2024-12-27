import { FaqClient } from "@/app/_components/FaqClient";
import iconChevronRight from "@/assets/icons/icon-chevron-right-1.svg";

export const Faq = () => {
  return (
    <div className="my-5 lg:my-10" id="faq">
      <div className="flex flex-col items-center">
        <h3 className="text-primary-color text-2xl lg:text-3xl font-semibold">
          Pusat bantuan & pertanyaan
        </h3>
        <p className="mt-6 text-secondary-text-color text-sm lg:text-base text-center sm:px-16 font-medium">
          Jika ada pertanyaan lebih lanjut silahkan{" "}
          <a href="#" className="text-primary-color">
            hubungi kami disini
          </a>
        </p>
      </div>
      <FaqClient iconChevronRight={iconChevronRight} />
    </div>
  );
};
