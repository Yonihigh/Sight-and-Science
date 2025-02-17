import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold text-gray-900">Sight and Science </Link>
        <div>
          <Link href="/news" className="text-gray-700 hover:text-blue-500 mx-4">News</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-500 mx-4">Blog</Link> {/* ✅ Blog Link */}
          <Link href="/contact" className="text-gray-700 hover:text-blue-500 mx-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
