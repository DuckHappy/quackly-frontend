import { date, email, object, string, z } from "zod";

const genders = ["empty", "masculino", "femenino", "otro"] as const;

export type Genders = (typeof genders)[number];

export const mappedGenders: { [key in Genders]: string } = {
  empty: "",
  masculino: "Masculino",
  femenino: "Femenino",
  otro: "Otro",
};

export const userSchema = z
  .object({
    fullname: z
      .string()
      .nonempty({
        message: "El campo es requerido.",
      })
      .min(6, {
        message: "El nombre completo debe contener al menos 6 caracteres.",
      })
      .max(60, {
        message: "El nombre acepta hasta 60 caracteres.",
      }),

    birthDate: z.coerce
      .date()
      .refine(
        // z.coerce.date() convierte el string del input en un Date.
        (date) => !isNaN(date.getTime()),
        { message: "El campo fecha de nacimiento es obligatorio." }
      )
      .refine(
        // .refine() valida la edad mínima de 16 años.
        (date) => {
          const today = new Date();
          const age = today.getFullYear() - date.getFullYear();
          return age >= 16;
        },
        { message: "La edad mínima para registrarse es de 16 años." }
      ),

    gender: z.enum(genders).refine((val) => val !== "empty", {
      message: "Debe seleccionar un genero.",
    }),

    email: z
      .string()
      .nonempty({ message: "El mail no puede quedar vacio." })
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: "El email no tiene un formato válido.",
      }),

    username: z
      .string()
      .nonempty({ message: "El usuario no puede quedar vacio" })
      .min(5, {
        message: "El usuario debe contener al menos 5 (cinco) caracteres.",
      }),

    password: z
      .string()
      .nonempty({ message: "La contraseña es obligatoria." })
      .min(8, {
        message: "La contraseña debe contener al menos 8 (ocho) caracteres.",
      }),
    confirmPassword: z.string().nonempty({
      message: "Vuelva a escribir la contraseña",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  });
