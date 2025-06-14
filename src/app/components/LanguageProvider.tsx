// src/app/components/LanguageProvider.tsx
'use client';

import '../../i18n'; // initializes i18n
import { useTranslation } from 'react-i18next';

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  useTranslation(); // ensures translation is ready
  return <>{children}</>;
}
