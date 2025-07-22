"use client";

import { Id } from "@/convex/_generated/dataModel";
import { FormEvent, ReactNode, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  children: ReactNode;
}

export function RenameDialog({
  documentId,
  initialTitle,
  children,
}: RenameDialogProps) {
  const rename = useMutation(api.documents.renameById);
  const [isRenaming, setIsRenaming] = useState(false);

  const [title, setTitle] = useState(initialTitle);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRenaming(true);

    rename({ id: documentId, title: title.trim() || "Untitled" })
      .catch(() => toast.error("Something went wrong"))
      .then(() => toast.success("Document deleted"))
      .finally(() => {
        setIsRenaming(false);
        setOpen(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Rename document</DialogTitle>
            <DialogDescription>
              Enter a new name for this document
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input
              disabled={isRenaming}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Untitled"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              disabled={isRenaming}
            >
              Cancel
            </Button>
            <Button disabled={isRenaming} onClick={(e) => e.stopPropagation()}>
              {isRenaming ? (
                <Loader2 className="animate-spin size-4" />
              ) : (
                "Save"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
