import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white dark:bg-zinc-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-2">Agroecology InfoHub</h2>
          <p className="text-sm">
            Empowering Africa with knowledge, products, and practices rooted in agroecology and sustainability.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/map" className="hover:underline">Map</Link></li>
            <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">
            Email: <a href="mailto:info@agrohub.africa" className="hover:underline">info@agrohub.africa</a>
          </p>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Agroecology InfoHub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
