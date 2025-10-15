import { date, email, object, string, z } from "zod";

const genders = ["Masculino", "Femenino", "Otro"] as const;

export const userSchema = z
  .object({
    fullname: z
      .string()
      .min(3, {
        message: "El nombre debe contener al menos 3 caracteres.",
      })
      .max(60, {
        message: "El nombre acepta hasta 80 caracteres.",
      }),

    birthDate: z.coerce
      .date()
      .refine(
        // z.coerce.date() convierte el string del input en un Date.
        (date) => !isNaN(date.getTime()),
        { message: "El campo fecha de nacimiento es obligatorio" }
      )
      .refine(
        // .refine() valida la edad mínima de 16 años.
        (date) => {
          const today = new Date();
          const age = today.getFullYear() - date.getFullYear();
          return age >= 16;
        },
        { message: "La edad mínima para registrarse es de 16 años" }
      ),

    gender: z.enum(genders, {
      message: "Debe seleccionar un genero",
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

    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
