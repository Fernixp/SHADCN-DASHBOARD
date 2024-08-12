"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="default" disabled>
        default
      </Button>
      <Button variant="success">Success</Button>

      <Button variant="destructive" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button variant={"default"} >
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Enviar
      </Button>
      <Button disabled={loading} onClick={()=> setLoading(!loading)}>
        {loading ? (
          <>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Cargando :3
          </>
        ) : (
          "Loading,Click me!"
        )}
      </Button>
      <Button asChild>
        <Link href="/dashboard/button">Login</Link>
      </Button>
    </div>
  );
}
