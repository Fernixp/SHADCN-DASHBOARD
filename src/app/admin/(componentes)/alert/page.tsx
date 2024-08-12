import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon, CheckCircledIcon } from "@radix-ui/react-icons";

export default function page() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>¡Atención!</AlertTitle>
        <AlertDescription>
          Puedes agregar componentes a tu aplicación usando la CLI.
        </AlertDescription>
      </Alert>

      <Alert variant={"destructive"}>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>¡Atención importante!</AlertTitle>
        <AlertDescription>
          Puedes agregar componentes a tu aplicación usando la CLI.
        </AlertDescription>
      </Alert>

      <Alert variant={"success"}>
        <CheckCircledIcon className="h-4 w-4" />
        <AlertTitle>¡Éxito!</AlertTitle>
        <AlertDescription>
          Puedes agregar componentes a tu aplicación usando la CLI.
        </AlertDescription>
      </Alert>
    </div>
  );
}
