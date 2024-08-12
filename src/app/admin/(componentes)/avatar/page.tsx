import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function page() {
    const user ={
        nombres: 'Luis Fernando',
        primerApellido: 'Patiño',
        segundoApellido: 'Nina'
    }
    const iniciales = user.nombres.charAt(0) + user.primerApellido.charAt(0)

  return (
    <div className="h-[500px] flex justify-center items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{iniciales}</AvatarFallback>
      </Avatar>
      <p className="m-2">@Ferxxo</p>
    </div>
  );
}
