"use client";
import { Logo } from "@/components/Logo";
import { useState } from "react";

export default function LoginPage() {
  return (
    <>

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col justify-center items-center">
             <Logo/>
        
            <h2 className="block mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
                Inicia sesión con tu cuenta
            </h2>
        </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <label
                        className="block text-sm/6 font-medium text-gray-900"
                        >
                        Usuario
                    </label>
                    <div className="mt-2">
                        <input
                            id="username"
                            type="username"
                            name="username"
                            required
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
                        />
                    </div>
                </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Contraseña
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
                            />
                        </div>
                    </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover: focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                        >
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
  );
}
