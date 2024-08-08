import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">

      <nav className="absolute right-2 top-2">
        <ModeToggle />
      </nav>

      <aside className="h-screen hidden lg:block">
        <Image src="/login.png" alt="login" width={554} height={832} />
      </aside>

      <section className="flex flex-col items-center gap-7 w-full">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48" />
        </svg>

        <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>

        <Tabs defaultValue="entrar" className="w-[400px]">

          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="entrar">entrar</TabsTrigger>
            <TabsTrigger value="registrar">registrar</TabsTrigger>
          </TabsList>

          <TabsContent value="entrar">
            <form action="" className="space-y-8 p-4">
              <div>
                <Label htmlFor="email">e-mail</Label>
                <Input id="email" placeholder="digite seu e-mail" />
              </div>
              <div>
                <Label htmlFor="senha">senha</Label>
                <Input type="password" id="senha" placeholder="digite sua senha" />
              </div>
              <div className="flex justify-center">
                <Button type="submit">Entrar</Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="registrar">
            <form action="" className="space-y-8 p-4">
              <div>
                <Label htmlFor="nome">nome</Label>
                <Input id="nome" placeholder="Digite seu nome" />
              </div>
              <div>
                <Label htmlFor="bio">bio</Label>
                <Input id="bio" placeholder="Digite sua bio" />
              </div>
              <div>
                <Label htmlFor="email">e-mail</Label>
                <Input id="email" placeholder="Digite seu e-mail" />
              </div>
              <div>
                <Label htmlFor="senha">senha</Label>
                <Input id="senha" type="password" placeholder="Digite sua senha" />
              </div>
              <div className="flex justify-center">
                <Button type="submit">Criar Conta</Button>
              </div>

            </form>
          </TabsContent>
        </Tabs>

      </section>


    </main>
  );
}