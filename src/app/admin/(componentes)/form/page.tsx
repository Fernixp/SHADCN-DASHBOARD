"use client";
import { zod as z } from "@/config/es-zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
//Para formulario
import { Button } from "@/components/ui/button";
/* Para date picker */
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";

const userSchema = z.object({
  username: z.string().min(1, { message: "El campo es requerido" }).max(20),
  email: z.string().min(1, { message: "El email es requerido" }).email(),
  type: z.enum(["todos", "menciones", "ninguno"], {
    required_error: "Necesitas seleccionar un tipo de notificación.",
  }),
  date: z.date({
    required_error: "Se requiere una fecha de nacimiento.",
  }),
  marketingEmails: z.boolean({required_error: 'Este campo es requerido'})
})
.refine((data) => data.marketingEmails === true, {
    message: "Este campo es requerido",
    path: ["marketingEmails"],
  });
;

export default function Page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof userSchema>) {
    // Do something with the form values.

    console.log("✅ This will be type-safe and validated.");
    console.log(values);
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Radio group */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Notificame sobre...</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="todos" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Todos los nuevos mensajes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="menciones" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Mensajes directos y menciones
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="ninguno" />
                      </FormControl>
                      <FormLabel className="font-normal">Ninguno</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Date picker */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Marketing Emails - Switch */}
          <FormField
            control={form.control}
            name="marketingEmails"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm col-span-1 sm:col-span-2 ">
                <div className="space-y-0.5">
                  <FormLabel>Marketing emails</FormLabel>
                  <FormDescription>
                    Receive emails about your account.
                  </FormDescription>
                  <FormMessage />
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
