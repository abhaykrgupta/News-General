import React from "react";

export const metadata = {
  title: "About | IJAAR",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-b-2 border-[#003366] pb-2 inline-block">
        About the Journal
      </h1>

      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-8">
        
        <section>
          <h2 className="text-2xl font-serif font-bold text-[#003366] mb-4">Aim & Scope</h2>
          <p>
            The International Journal of Advanced Academic Research (IJAAR) aims to provide an intellectual platform for global scholars. 
            The journal publishes high-quality, peer-reviewed research across multidisciplinary fields including STEM, Humanities, and Social Sciences. 
            We strive to bridge the gap between academic research and practical applications by promoting free access to innovative knowledge.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-[#003366] mb-4">Publication Frequency</h2>
          <p>
            IJAAR is a <strong>Bi-annual</strong> publication, releasing issues in <strong>June</strong> and <strong>December</strong> each year. 
            Special issues dedicated to specific global challenges or conference proceedings may be published occasionally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-[#003366] mb-4">Peer-Review Process</h2>
          <p>
            All submitted manuscripts undergo a rigorous <strong>Double-Blind Peer Review</strong> process. 
            The identities of both the reviewers and the authors are kept strictly confidential from each other to ensure unbiased evaluation. 
            Our standard review timeline is 4-6 weeks from initial screening to final decision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-[#003366] mb-4">Open Access Policy</h2>
          <p>
            This journal provides immediate open access to its content on the principle that making research freely available to the public supports a greater global exchange of knowledge. 
            Users are allowed to read, download, copy, distribute, print, search, or link to the full texts of the articles in this journal without asking prior permission from the publisher or the author.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-[#003366] mb-4">Ethics & Plagiarism Policy</h2>
          <p>
            IJAAR adheres to strict ethical standards. All authors must state that their work is original and has not been published elsewhere.
            We use industry-standard plagiarism detection software (e.g., Turnitin) to verify the originality of submissions. Manuscripts with a similarity index above 15% will be returned or rejected outright.
          </p>
        </section>

      </div>
    </div>
  );
}
