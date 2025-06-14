"use client";

import { useState } from "react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-lg font-medium flex justify-between items-center text-gray-800 dark:text-gray-100"
      >
        <span>{question}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
