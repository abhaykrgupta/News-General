import React from 'react';
import { editors } from '@/lib/data';

type Editor = typeof editors[0];

export default function EditorCard({ editor }: { editor: Editor }) {
  return (
    <div className="bg-white border border-gray-200 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded">
      <div className="flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={editor.image} 
          alt={`Photo of ${editor.name}`}
          className="w-24 h-24 rounded-full border border-gray-300 object-cover shadow-sm"
        />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-serif font-bold text-[#003366]">{editor.name}</h3>
        <p className="text-md font-semibold text-gray-800 mt-1">{editor.designation}</p>
        <p className="text-sm text-gray-600 mt-2">{editor.university}</p>
        <a href="#" className="inline-block mt-3 text-sm text-[#003366] hover:underline font-medium">
          View Profile / Focus Area
        </a>
      </div>
    </div>
  );
}
