// HomePage
"use client";
import { useState } from "react";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import LinkButton from "@/components/LinkButton";
import { LoginForm } from "@/components/LoginForm";
import { useIsTabletOrBigger } from "./hooks/isTabletOrBigger";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const isTabletOrBigger = useIsTabletOrBigger();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");


  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    mode: "login" | "register"
  ) => {
    if (isTabletOrBigger) {
      e.preventDefault(); // evita la navegación
      setAuthMode(mode);
      setIsModalOpen(true);
    }
  };

  // Si no es tablet, el LinkButton navegará normalmente

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg--skyblue pt-3 ">
      <Logo />
      <Title />
      <LinkButton
        label="Login"
        href="/login"
        variant="primary"
        onClick={(e) => handleClick(e, "login")}
      />
      <LinkButton
        label="Registro"
        href="/register"
        variant="secondary"
        onClick={(e) => handleClick(e, "register")}
      />

      {isModalOpen && isTabletOrBigger && (
        <AuthModal mode={authMode} onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}

