// src/app/faqs/page.tsx
import { faqs } from "@/data/faqs";
import FAQItem from "../components/FAQItem";

export default function FAQsPage() {
  return (
    <main className="pt-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-green-800">FAQs</h1>
      {faqs.map((faq, i) => (
        <FAQItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </main>
  );
}
