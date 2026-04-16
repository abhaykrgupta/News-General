import React from "react";
import Link from "next/link";
import { articles } from "@/lib/data";

type Article = typeof articles[0];

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded shadow-sm hover:shadow-md transition-shadow mb-6">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-[#003366] bg-[#eef2f6] px-2 py-1 rounded uppercase tracking-wide">
          Research Article
        </span>
        <span className="text-sm text-gray-500">
          Published: {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
      
      <Link href="#" className="block group">
        <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#003366] transition-colors leading-snug mb-3">
          {article.title}
        </h3>
      </Link>
      
      <div className="text-sm text-gray-700 italic mb-4">
        {article.authors.join(", ")}
      </div>
      
      <div className="text-sm text-gray-600 mb-5 line-clamp-3 leading-relaxed">
        <strong>Abstract: </strong>
        {article.abstract}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-100 gap-4">
        <div className="text-sm flex flex-col gap-1 text-gray-600">
          <a shrink-0 href={article.doi} className="text-[#003366] hover:underline" target="_blank" rel="noopener noreferrer">
            DOI: {article.doi.replace('https://doi.org/', '')}
          </a>
          <span className="text-xs">Vol. {article.volume}, Issue {article.issue} ({article.year})</span>
        </div>
        
        <a 
          href={article.pdfUrl}
          className="inline-flex items-center justify-center px-4 py-2 border border-[#003366] text-sm font-medium rounded text-[#003366] bg-transparent hover:bg-[#003366] hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  );
}
