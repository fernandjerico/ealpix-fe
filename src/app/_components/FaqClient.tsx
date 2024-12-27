"use client";

import { useState, useEffect } from "react";
import { FaqItem } from "./FaqItem";
import { FAQ } from "../types/faq";

export const FaqClient = ({
  iconChevronRight,
}: {
  iconChevronRight: string;
}) => {
  const [faqData, setFaqData] = useState<FAQ[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFaqData = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/faq");
      const result = await res.json();

      if (result.success && result.data) {
        const mappedData = result.data.map(
          (item: { id: string; question: string; answer: string }) => ({
            id: item.id,
            question: item.question,
            answer: item.answer,
          })
        );
        setFaqData(mappedData);
      }
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="mt-10 flex flex-col items-center justify-center gap-4 max-w-4xl sm:px-6 mx-auto">
        <p className="text-primary-text-color text-base">Loading FAQs...</p>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 max-w-4xl sm:px-6 mx-auto">
      {faqData.map((faq) => (
        <FaqItem
          key={faq.id}
          title={faq.question}
          content={faq.answer}
          icon={iconChevronRight}
          isExpanded={expandedId === faq.id}
          onToggle={() => toggleExpand(faq.id)}
        />
      ))}
    </div>
  );
};
