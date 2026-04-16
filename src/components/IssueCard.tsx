import React from 'react';
import Link from 'next/link';
import { archives } from '@/lib/data';

type Issue = typeof archives[0]['volumes'][0];

export default function IssueCard({ issue }: { issue: Issue }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-4 hover:bg-gray-50 transition-colors">
      <div>
        <h3 className="text-lg font-medium text-gray-900">
          Volume {issue.volume}, Issue {issue.issue}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Published: {issue.date} &bull; {issue.totalArticles} Articles
        </p>
      </div>
      <Link 
        href="/current-issue" 
        className="mt-3 sm:mt-0 px-4 py-2 bg-white border border-[#003366] text-[#003366] text-sm font-medium rounded hover:bg-[#003366] hover:text-white transition-colors whitespace-nowrap"
      >
        View Contents
      </Link>
    </div>
  );
}
