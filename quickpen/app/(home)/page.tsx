"use client";

import { Navbar } from "@/components/navbar";
import { TemplateGallery } from "@/components/template-gallery";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function HomeRoute() {
  const documents = useQuery(api.documents.get);
  if (documents === undefined) return <p>Loading...</p>;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>

      <div className="mt-16">
        <TemplateGallery />
        {documents?.map((doc) => <span key={doc._id}>{doc.title}</span>)}
      </div>
    </main>
  );
}
