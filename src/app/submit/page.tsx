"use client";

import React, { useState } from "react";

export default function SubmitPaperPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real app would upload PDF and send data
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-6 border-b-2 border-[#003366] pb-2 inline-block">
        Submit Manuscript
      </h1>

      <div className="bg-blue-50 border-l-4 border-[#003366] p-4 mb-8 text-sm text-blue-900">
        <p><strong>Note:</strong> Please ensure your manuscript follows our author guidelines and formatting rules before submission. All submissions are final.</p>
      </div>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded text-center">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-serif font-bold mb-2">Submission Successful!</h2>
          <p>Thank you for submitting your research. Your manuscript has been received and will undergo initial screening.</p>
          <button 
            type="button" 
            onClick={() => setIsSubmitted(false)}
            className="mt-6 px-6 py-2 bg-[#003366] text-white rounded hover:bg-[#002244] transition-colors"
          >
            Submit Another Paper
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-6 sm:p-8 rounded shadow-sm space-y-6">
          
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              Manuscript Title <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="title" 
              required
              placeholder="Enter the full title of your paper"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label htmlFor="authors" className="block text-sm font-semibold text-gray-700 mb-2">
              Author(s) <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="authors" 
              required
              placeholder="e.g., John Doe, Jane Smith (comma separated)"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Corresponding Author Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              required
              placeholder="academic@university.edu"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label htmlFor="abstract" className="block text-sm font-semibold text-gray-700 mb-2">
              Abstract <span className="text-red-500">*</span>
            </label>
            <textarea 
              id="abstract" 
              rows={6}
              required
              placeholder="Paste your abstract here (max 250 words)..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none resize-y"
            ></textarea>
          </div>

          <div>
            <label htmlFor="pdf" className="block text-sm font-semibold text-gray-700 mb-2">
              Upload PDF <span className="text-red-500">*</span>
            </label>
            <input 
              type="file" 
              id="pdf" 
              accept=".pdf"
              required
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#003366] hover:file:bg-blue-100"
            />
            <p className="text-xs text-gray-500 mt-2">Maximum file size: 10MB. Format: PDF only.</p>
          </div>

          <div className="pt-4 border-t border-gray-200 flex justify-end">
            <button 
              type="submit" 
              className="px-8 py-3 bg-[#003366] text-white font-medium rounded hover:bg-[#002244] shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#003366] outline-none"
            >
              Submit Manuscript
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
