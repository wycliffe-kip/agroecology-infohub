// src/components/LanguageSwitcher.tsx
"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="space-x-2">
      <button onClick={() => i18n.changeLanguage("en")} className="hover:underline">
        EN
      </button>
      <button onClick={() => i18n.changeLanguage("fr")} className="hover:underline">
        FR
      </button>
    </div>
  );
}
