import React from "react";
import { archives } from "@/lib/data";
import Link from "next/link";
import IssueCard from "@/components/IssueCard";

export const metadata = {
  title: "Archives | GAJ",
};

export default function ArchivesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-b-2 border-[#003366] pb-2 inline-block">
        Journal Archives
      </h1>
      
      <p className="text-gray-600 mb-8">
        Browse past issues of the General Academic Journal. 
        All published articles remain publicly accessible under our open-access policy.
      </p>

      <div className="space-y-8">
        {archives.map(yearGroup => (
          <div key={yearGroup.year} className="bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-serif font-bold text-[#003366]">{yearGroup.year}</h2>
            </div>
            
            <div className="divide-y divide-gray-100 p-2">
              {yearGroup.volumes.map((vol, idx) => (
                <IssueCard key={idx} issue={vol} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
