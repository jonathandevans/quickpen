import { DocumentEditor } from "@/components/document/document-editor";
import { DocumentNavbar } from "@/components/document/document-navbar";
import { DocumentToolbar } from "@/components/document/document-toolbar";
import { Room } from "@/components/document/room";

export default async function DocumentIdRoute({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;

  return (
    <main className="min-h-screen bg-[#fafbfd]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        <DocumentNavbar />
        <DocumentToolbar />
      </div>

      <div className="pt-[114px] print:pt-0">
        <Room>
          <DocumentEditor />
        </Room>
      </div>
    </main>
  );
}
