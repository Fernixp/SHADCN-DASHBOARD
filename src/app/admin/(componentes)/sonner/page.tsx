"use client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function SonnerDemo() {
  const fecha = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
      <Button
          variant="default"
          onClick={() =>
            toast.info("Event has been created", {
                position: "top-left",
              duration: 1000,
              description: `${fecha}`,
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          top (Left)
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast.error("Event has been created", {
              duration: 1000,
              position: 'bottom-right',
              description: `${fecha}`,
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          bottom(right)
        </Button>
        <Button
          variant="success"
          onClick={() =>
            toast.success("Event has been created", {
              duration: 1000,
              position: "top-right",
              description: `${fecha}`,
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Top (Right)
        </Button>
      </div>
    </>
  );
}
