"use client";
import { FaqItem } from "@/app/_components/FaqItem";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    title: "Apa itu Ealpix?",
    description:
      "Ealpix adalah aplikasi yang memungkinkan Anda memantau aktivitas anak secara real-time melalui perangkat smartphone. Dengan Ealpix, Anda dapat mengawasi lokasi anak, mendengarkan suara di sekitar anak, dan melihat tampilan layar perangkat anak.Ealpix adalah aplikasi yang memungkinkan Anda memantau aktivitas anak secara real-time melalui perangkat smartphone. Dengan Ealpix, Anda dapat mengawasi lokasi anak, mendengarkan suara di sekitar anak, dan melihat tampilan layar perangkat anak.",
  },
  {
    id: 2,
    title: "Apa itu Ealpix?",
    description:
      "Ealpix adalah aplikasi yang memungkinkan Anda memantau aktivitas anak secara real-time melalui perangkat smartphone. Dengan Ealpix, Anda dapat mengawasi lokasi anak, mendengarkan suara di sekitar anak, dan melihat tampilan layar perangkat anak.",
  },
  {
    id: 3,
    title: "Apa itu Ealpix?",
    description:
      "Ealpix adalah aplikasi yang memungkinkan Anda memantau aktivitas anak secara real-time melalui perangkat smartphone. Dengan Ealpix, Anda dapat mengawasi lokasi anak, mendengarkan suara di sekitar anak, dan melihat tampilan layar perangkat anak.",
  },
  {
    id: 4,
    title: "Apa itu Ealpix?",
    description:
      "Ealpix adalah aplikasi yang memungkinkan Anda memantau aktivitas anak secara real-time melalui perangkat smartphone. Dengan Ealpix, Anda dapat mengawasi lokasi anak, mendengarkan suara di sekitar anak, dan melihat tampilan layar perangkat anak.",
  },
];

export const Faq = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <div className="my-5 lg:my-10" id="faq">
      <div className="flex flex-col items-center">
        <h3 className="text-primary-color text-2xl lg:text-3xl font-semibold">
          Pusat bantuan & pertanyaan
        </h3>
        <p className="mt-6 text-secondary-text-color text-sm lg:text-base text-center sm:px-16 font-medium">
          JIka ada pertanyaan lebih lanjut silahkan{" "}
          <a href="#" className="text-primary-color">
            hubungi kami disini
          </a>
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 max-w-4xl sm:px-6 mx-auto">
        {faqData.map((faq) => (
          <FaqItem
            key={faq.id}
            title={faq.title}
            content={faq.description}
            isExpanded={expandedId === faq.id}
            onToggle={() => toggleExpand(faq.id)}
          />
        ))}
      </div>
    </div>
  );
};
