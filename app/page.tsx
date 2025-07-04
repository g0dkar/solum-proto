"use client"

import Pagina from "@/components/solum/pagina";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeadsetIcon, LogOutIcon } from "lucide-react";
import { useState } from "react";
import fazendeiro from "./fazendeiro.png";

export default function Home() {
  const [logado, setLogado] = useState(false)

  return <div className="flex flex-col min-h-screen">
    <header className="sticky top-0">
      <div className="flex flex-row gap-6 items-center justify-items-center p-6 bg-primary/50 backdrop-blur-sm rounded-b-xl shadow-lg">
        {logado ? <>
          <div className="grow-1">
            <h1 className="font-bold text-xl">Fazenda</h1>
            <h2>Princesa do Sul</h2>
            <h3 className="text-xs">Serra do Quilombo - Bom Jesus/PI</h3>
          </div>
          <div>
            <Avatar className="bg-black/[.4] dark:bg-white/[.4]">
              <AvatarImage src={fazendeiro.src} />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
          </div>
        </> : <h1>Solum Cloud</h1>}
      </div>
    </header>

    {logado ? <Pagina /> :
      <main className="grow-1">
        <Card className="max-w-sm mx-auto my-6">
          <CardHeader>
            <CardTitle className="text-lg">Acesse Sua Conta</CardTitle>
            <CardDescription>
              Digite qualquer informação abaixo para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form autoComplete="off">
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="usuario">Usuário</Label>
                  <Input
                    id="usuario"
                    type="text"
                    placeholder="apenas-exemplo"
                    autoComplete="off"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                  </div>
                  <Input id="password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="button" className="w-full" onClick={(evt) => { evt.preventDefault(); setLogado(true); }}>
              Entrar
            </Button>
          </CardFooter>
        </Card>
      </main>
    }

    <footer className="flex flex-row items-center justify-items-center">
      {logado ? <>
        <a href="#" className="m-6">
          <span className="flex flex-col items-center rounded-lg bg-secondary w-18 p-3 shadow-lg">
            <HeadsetIcon />
            <span className="text-xs">Ajuda</span>
          </span>
        </a>
        <span className="grow-1"></span>
        <a href="#" className="m-6" onClick={(evt) => { evt.preventDefault(); setLogado(false); }}>
          <span className="flex flex-col items-center rounded-lg bg-secondary w-18 p-3 shadow-lg">
            <LogOutIcon />
            <span className="text-xs">Sair</span>
          </span>
        </a>
      </> : <></>}
    </footer>
  </div>
}
