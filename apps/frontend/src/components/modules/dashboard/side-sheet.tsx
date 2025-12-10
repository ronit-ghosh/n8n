import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { AVAILABLE_NODES, Node, NodeType } from "./dashboard";
import { cn } from "@/lib/utils";

interface SideSheetProps {
  onSelect: (id: string, type: Node, nodeType: NodeType, label: string) => void;
  hasTrigger: boolean;
}

export function SideSheet(props: SideSheetProps) {
  const { onSelect, hasTrigger } = props;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="absolute top-4 right-4 z-20 cursor-default"
          size="icon-lg"
        >
          <IconPlus className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <SheetTitle className="text-xl">Select Nodes</SheetTitle>
          <SheetDescription>
            Select your desired nodes here. Click Add to Workflow.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 px-4">
          <div>
            <Label htmlFor="trigger" className="text-lg">
              Select Trigger / Actions
            </Label>
            {AVAILABLE_NODES.map((node, i) => {
              const TRIGGER = node.nodeType === "trigger";
              const ACTION = node.nodeType === "action";
              const label = node.data.label.toLowerCase().endsWith("node")
                ? node.data.label.slice(0, -4)
                : node.data.label;
              return (
                <div key={i}>
                  {TRIGGER && !hasTrigger && (
                    <button
                      onClick={() =>
                        onSelect(node.id, node.type, node.nodeType, node.data.label)
                      }
                      className={cn(
                        "bg-secondary hover:bg-secondary/80 mt-2 flex",
                        "w-full items-center gap-3 rounded-lg p-3",
                      )}
                    >
                      <Image
                        src={node.data.img}
                        alt={node.data.label}
                        width={1000}
                        height={1000}
                        className="size-12"
                      />
                      <div className="text-left">
                        <p className="text-sm">{label}</p>
                        <p className="text-primary/60 text-xs font-light">
                          {node.data.desc}
                        </p>
                      </div>
                    </button>
                  )}
                  {ACTION && (
                    <button
                      onClick={() =>
                        onSelect(node.id, node.type, node.nodeType, node.data.label)
                      }
                      className={cn(
                        "bg-secondary hover:bg-secondary/80 mt-2 flex",
                        "w-full items-center gap-3 rounded-lg p-3",
                      )}
                    >
                      <Image
                        src={node.data.img}
                        alt={node.data.label}
                        width={1000}
                        height={1000}
                        className="size-12"
                      />
                      <div className="text-left">
                        <p className="text-sm">{label}</p>
                        <p className="text-primary/60 text-xs font-light">
                          {node.data.desc}
                        </p>
                      </div>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <SheetFooter className="border-t">
          <Button type="submit">Add to Workflow</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
