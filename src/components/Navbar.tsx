import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end py-6">
          <div className="flex-1">
            <Link href="/" className="block">
              <h1 className="text-3xl font-serif font-bold text-[#003366] leading-tight">
                International Journal of Advanced Academic Research
              </h1>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                An Open Access Peer-Reviewed Journal
              </p>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <div className="px-3 py-1 border border-gray-300 text-xs font-semibold text-gray-600 rounded">
              Indexed in Scopus
            </div>
            <div className="px-3 py-1 border border-gray-300 text-xs font-semibold text-gray-600 rounded">
              Google Scholar
            </div>
            <Link href="/login" className="px-4 py-1.5 bg-[#f4f5f7] text-[#003366] text-sm font-medium border border-[#e2e8f0] rounded hover:bg-gray-100 transition-colors ml-4">
              Login
            </Link>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-8 text-sm font-medium text-gray-700 py-3 overflow-x-auto">
            <li><Link href="/" className="hover:text-[#003366] transition-colors whitespace-nowrap">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#003366] transition-colors whitespace-nowrap">About Journal</Link></li>
            <li><Link href="/editorial-board" className="hover:text-[#003366] transition-colors whitespace-nowrap">Editorial Board</Link></li>
            <li><Link href="/current-issue" className="hover:text-[#003366] transition-colors whitespace-nowrap">Current Issue</Link></li>
            <li><Link href="/archives" className="hover:text-[#003366] transition-colors whitespace-nowrap">Archives</Link></li>
            <li><Link href="/submit" className="hover:text-[#003366] transition-colors whitespace-nowrap font-bold">Submit Paper</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
