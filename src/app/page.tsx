'use client'
import { Title } from "@/components/Title";
import { Logo } from "@/components/Logo";
import LinkButton from "@/components/LinkButton";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-full pt-3 ">
      <Logo />
      <Title />
      <LinkButton label="Login" href="/login" variant="primary" onClick={() => { }} />
      <LinkButton label="Registro" href="/register" variant="secondary" onClick={() => { }} />
    </main>
  );
}

