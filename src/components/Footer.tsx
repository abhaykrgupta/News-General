import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-12 pb-8 border-t-4 border-[#003366]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-serif font-bold mb-4">GAJ</h2>
          <p className="text-sm text-gray-400 mb-4 pr-8 leading-relaxed">
            General Academic Journal is a double-blind peer-reviewed, open-access international journal dedicated to promoting scholarly exchange across various disciplines.
          </p>
          <div className="font-semibold text-gray-300">
            ISSN: 2456-7890 (Online)
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-serif font-semibold mb-4 text-gray-200 border-b border-gray-700 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About the Journal</Link></li>
            <li><Link href="/editorial-board" className="hover:text-white transition-colors">Editorial Board</Link></li>
            <li><Link href="/submit" className="hover:text-white transition-colors">Submit Manuscript</Link></li>
            <li><Link href="/archives" className="hover:text-white transition-colors">Past Issues</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Ethics Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-serif font-semibold mb-4 text-gray-200 border-b border-gray-700 pb-2">Contact Us</h3>
          <address className="not-italic text-sm text-gray-400 space-y-2">
            <p>Editorial Office</p>
            <p>123 University Avenue</p>
            <p>Academic City, ST 12345</p>
            <p className="mt-4 break-all">Email: editor@ijaar-journal.org</p>
            <p>Phone: +1 (555) 123-4567</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} General Academic Journal. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Open Access under CC BY 4.0 License</p>
      </div>
    </footer>
  );
}
