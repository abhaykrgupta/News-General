import React from "react";
import { editors } from "@/lib/data";
import EditorCard from "@/components/EditorCard";

export const metadata = {
  title: "Editorial Board | GAJ",
};

export default function EditorialBoardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4 border-b-2 border-[#003366] pb-2 inline-block">
          Editorial Board
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Our esteemed editorial board comprises renowned scholars from leading institutions globally. 
          They are committed to upholding the rigorous academic standards of the journal through diligent review and curation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {editors.map(editor => (
          <EditorCard key={editor.id} editor={editor} />
        ))}
      </div>
    </div>
  );
}
