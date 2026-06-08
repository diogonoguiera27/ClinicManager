"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import SignUpForm from "./components/sign-up-form";

const registerSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome e obrigatorio" }).max(50),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email e obrigatorio" })
    .email({ message: "Email invalido" }),
  password: z.string().min(8, { message: " a senha deve ter no minimo 8 caracteres" }),
});

const AuthenticationPage = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Cria Conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                View your key metrics and recent project activity. Track
                progress across all your active projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              You have 12 active projects and 3 pending tasks.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <SignUpForm/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
