"use client";
import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "El correo electronico es requerido." })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "El email no tiene un formato válido.",
    }),
  password: z
    .string()
    .nonempty({ message: "La contraseña es requerida." })
    .min(8, {
      message: "La contraseña debe contener al menos 8 (ocho) caracteres.",
    }),
});

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
    
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);
      localStorage.setItem("loginData", JSON.stringify(data));
      const urlQuack = "https://quackly.onrender.com/users/login";

      const res = await fetch(urlQuack, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        const message =
          (errBody && (errBody.message || errBody.error)) ||
          "Email o contraseña incorrectos.";
        setError(message);
        console.error("Login failed:", res.status, errBody);
        return;
      }

      const body = await res.json();
      localStorage.setItem("userToken", body.access_token);
      router.push("/home");
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error inesperado. Intenta nuevamente.");
    }
  };

  return (
    <div className="flex min-h-full w-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="flex flex-col justify-center items-center">
        <Logo />

        <h2 className="block mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
          Ingresa con tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-md/6 font-medium text-gray-900">
              Correo electronico
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
                type="text"
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 ml-2">
                  {" "}
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-md/6 font-medium text-gray-900">
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
                type="password"
                id="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2 ml-2">
                  {" "}
                  {errors.password.message}{" "}
                </p>
              )}
            </div>
          </div>

          {/* muestra el mensaje de error del servidor */}
          {error && (
            <div>
              <p className="text-red-600 text-sm mt-2 ml-2">{error}</p>
            </div>
          )}

          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="flex justify-center rounded-md mt-2 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs bg-amber-300 hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}