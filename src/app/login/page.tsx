"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LoginForm } from "@/components/LoginForm";

const loginSchema = z.object({
    email: z
    .string()
    .nonempty({ message: "El correo electronico es requerido." })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "El email no tiene un formato válido.",
    }),
      password: z.string().nonempty({ message: "La contraseña es requerida." })
      .min(8, { message: "La contraseña debe contener al menos 8 (ocho) caracteres."})
});

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
    const {register, handleSubmit, formState: {errors}, reset } = useForm({
             resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data: LoginFormData) => {
        localStorage.setItem("loginData", JSON.stringify(data));
        console.log(data)
        reset()
    }

  return (
    <LoginForm/>
  );
}
