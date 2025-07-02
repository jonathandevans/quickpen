import { DocumentEditor } from "@/components/document-editor";
import { DocumentToolbar } from "@/components/document-toolbar";

export default async function DocumentIdRoute({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <DocumentToolbar />
      <DocumentEditor />
    </div>
  );
}
