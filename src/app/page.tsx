// HomePage
'use client'
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { AuthModal } from "@/components/AuthModal";
import Image from "next/image";
import { Logo } from "@/components/Logo";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-50 pt-3 ">
      <Logo />
      <Title />
      <Button label="Login" variant="primary" onClick={() => {}} />
      <Button label="Registro" variant="secondary" onClick={() => {}} />
    </main>
  );
}
