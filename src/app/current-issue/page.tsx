import React from "react";
import { articles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Current Issue | IJAAR",
};

export default function CurrentIssuePage() {
  const currentVolume = "12";
  const currentIssue = "1";
  const currentYear = "2024";
  
  // Filter articles that belong to the current issue
  const currentArticles = articles.filter(a => a.volume === currentVolume && a.issue === currentIssue && a.year === currentYear);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="bg-[#f8fafc] border border-gray-200 p-8 rounded mb-10 text-center">
        <h1 className="text-3xl font-serif font-bold text-[#003366] mb-2">
          Current Issue
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          Volume {currentVolume}, Issue {currentIssue} ({currentYear})
        </p>
        <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto">
          The latest publications reflecting the forefront of global academic research.
        </p>
      </div>

      <div className="space-y-6">
        {currentArticles.length > 0 ? (
          currentArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-10">No articles found for the current issue.</p>
        )}
      </div>

    </div>
  );
}
