import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {"123456789".split("").map((item) => (
        <Card key={item}>
          <CardHeader>
            <CardTitle>Titulo Card</CardTitle>
            <CardDescription>La Descripción</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Contenido CArd</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant={"ghost"}>Info</Button>
            <Button>más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
