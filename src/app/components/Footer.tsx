'use client';

import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="relative footer-pattern bg-green-700 text-white dark:bg-zinc-900 dark:text-gray-100">
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="font-bold text-lg mb-2">{t("title")}</h2>
                    <p className="text-sm">
                        {t("footer.description")}
                    </p>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-semibold mb-2">{t("footer.quick_links")}</h3>
                    <ul className="flex flex-wrap gap-4 text-sm">
                        <li><Link href="/" className="hover:underline">{t("home")}</Link></li>
                        <li><Link href="/products" className="hover:underline">{t("products")}</Link></li>
                        <li><Link href="/blog" className="hover:underline">{t("blog")}</Link></li>
                        <li><Link href="/map" className="hover:underline">{t("map")}</Link></li>
                        <li><Link href="/faqs" className="hover:underline">{t("faqs")}</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">{t("footer.contact")}</h3>
                    <p className="text-sm">
                        {t("footer.email")}: <a href="mailto:info@agrohub.africa" className="hover:underline">info@agrohub.africa</a>
                    </p>
                    <p className="text-sm mt-1">© {new Date().getFullYear()} {t("title")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
