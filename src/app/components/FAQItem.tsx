// src/app/components/FAQItem.tsx
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
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-lg font-medium flex justify-between items-center"
      >
        <span>{question}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;
