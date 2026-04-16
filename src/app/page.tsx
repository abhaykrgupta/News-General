import Link from "next/link";
import { articles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  // Just show top 2 featured articles
  const featuredArticles = articles.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner / Call for Papers */}
      <section className="bg-gradient-to-r from-[#003366] to-[#002244] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-blue-800 text-blue-100 text-xs font-bold uppercase tracking-wider rounded mb-4">
              Call for Papers 2026
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Advancing Global Knowledge and Discovery
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Submit your original research, review articles, and systematic studies. 
              Submissions are now open for Volume 12, Issue 2. Fast-track peer review process available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/submit" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded text-[#003366] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#003366] focus:ring-white transition-colors"
              >
                Submit Manuscript
              </Link>
              <Link 
                href="/about" 
                className="inline-flex justify-center items-center px-6 py-3 border-2 border-white text-base font-medium rounded text-white bg-transparent hover:bg-white hover:text-[#003366] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#003366] focus:ring-white transition-colors"
              >
                Author Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col lg:flex-row gap-12">
        
        {/* Left Column - Articles */}
        <div className="lg:w-2/3">
          <div className="flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-2">
            <h3 className="text-2xl font-serif font-bold text-gray-900">Featured Articles</h3>
            <Link href="/current-issue" className="text-sm font-semibold text-[#003366] hover:underline mb-1">
              View Current Issue &rarr;
            </Link>
          </div>
          
          <div className="space-y-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          
          {/* Current Issue Box */}
          <div className="bg-white border border-[#003366] rounded overflow-hidden">
            <div className="bg-[#003366] text-white px-4 py-3">
              <h4 className="font-serif font-bold text-lg">Current Issue</h4>
            </div>
            <div className="p-5">
              <div className="text-4xl font-light text-gray-800 mb-2">Vol. 12</div>
              <div className="text-xl text-gray-600 mb-6">Issue 1 (2026)</div>
              <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                This issue explores cutting-edge themes in artificial intelligence, quantum computing, and sustainable implementations globally.
              </p>
              <Link href="/current-issue" className="block w-full text-center px-4 py-2 bg-[#f4f5f7] border border-gray-300 text-gray-800 font-medium rounded hover:bg-gray-100 transition-colors">
                Browse Issue
              </Link>
            </div>
          </div>

          {/* Indexing Box */}
          <div className="bg-gray-50 border border-gray-200 rounded p-5">
            <h4 className="font-serif font-bold text-lg border-b border-gray-200 pb-2 mb-4">Indexed In</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-sm font-semibold text-gray-500 shadow-sm">
                Google Scholar
              </div>
              <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-sm font-semibold text-gray-500 shadow-sm">
                Scopus
              </div>
              <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-sm font-semibold text-gray-500 shadow-sm">
                Crossref
              </div>
              <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-sm font-semibold text-gray-500 shadow-sm">
                DOAJ
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
