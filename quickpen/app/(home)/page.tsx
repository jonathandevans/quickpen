"use client";

import { DocumentsTable } from "@/components/dashboard/documents-table";
import { Navbar } from "@/components/dashboard/navbar";
import { TemplateGallery } from "@/components/dashboard/template-gallery";
import { api } from "@/convex/_generated/api";
import { useSearchParam } from "@/lib/use-search-param";
import { usePaginatedQuery } from "convex/react";

export default function HomeRoute() {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>

      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </main>
  );
}
