"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { zod as z } from "@/config/es-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/custom/input-password";
import { Card } from "@/components/ui/card";
import { authSchema } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { login } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [datos, setDatos] = useState();
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: login,
    onMutate: () => {
      setIsLoading(true);
    },
    onError: (error) => {
      toast.error(error.message, {
        duration: 2000,
        position: "top-right",
      });
      setIsLoading(false);
    },
    onSuccess: (data) => {
      setDatos(data)
      router.push('/admin')
      setIsLoading(false);
    },
  });

  function onSubmit(data: z.infer<typeof authSchema>) {
    // Do something with the form values.
    mutate(data);
    console.log("✅ This will be type-safe and validated.");
  }
  useEffect(()=>{
    console.log('=============BIENVENIDO=============');
    console.log(datos);
    console.log('====================================');
  },[datos])
  return (
    <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <div className="mb-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <h1 className="text-3xl font-medium">Administración</h1>
        </div>
        <Card className="p-6">
          <div className="flex flex-col space-y-2 text-left">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Iniciar Sesión
            </h1>
            <p className="text-center text-md text-muted-foreground">
              Introduce tu correo electrónico y contraseña a continuación
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="mt-5">Login</Button>
              </div>
            </form>
          </Form>
          <div className="flex justify-between items-center mt-5">
            <Link
              href={"#"}
              className="text-sm font-medium text-muted-foreground hover:opacity-75"
            >
              Registrarme
            </Link>
            <Link
              href={"#"}
              className="text-sm font-medium text-muted-foreground hover:opacity-75"
            >
              Olvidé mi contraseña
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
