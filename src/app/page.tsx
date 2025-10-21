// HomePage
'use client'
import { useState } from "react";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import LinkButton from "@/components/LinkButton";
import { LoginForm } from "@/components/LoginForm"
import { useIsTabletOrBigger } from "./hooks/isTabletOrBigger";



export default function Home() {

  const isTabletOrBigger = useIsTabletOrBigger();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const handleClick = (mode: "login" | "register") => {
    if (isTabletOrBigger) {
      setAuthMode(mode);
      setIsModalOpen(true);
    }
    // Si no es tablet, el LinkButton navegará normalmente
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg--skyblue pt-3 ">
      <Logo />
      <Title />
      <LinkButton label="Login" href="/login" variant="primary" onClick={() => {}} />
      <LinkButton label="Registro" href="/register"  variant="secondary" onClick={() => {}} />

        {isModalOpen && isTabletOrBigger && (
        <AuthModal
          mode={authMode}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
}
