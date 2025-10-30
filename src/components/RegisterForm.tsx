import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mappedGenders, userSchema } from "@/validations/userSchema";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from 'styled-components';


interface registerData {
  fullname: string;
  birthDate: Date;
  gender: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const genderOptions = Object.entries(mappedGenders).map(([key, value]) => (
    <option value={key} key={key}>
      {" "}
      {value}{" "}
    </option>
  ));

  const onSubmit = async (data: registerData) => {
    setError(null);
    try {
      const response = await fetch ("https://quackly.onrender.com/users/register" , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })

      if(!response.ok) {
        const errBody = await response.json().catch(() => ({}))
        const message =
        (errBody && (errBody.message || errBody.error)) || 
        "Datos ingresados invalidos para el registro."
        setError(message)
        console.error("Register failed", response.status, errBody)
      
      }if(response.ok) {
        const { password, confirmPassword, ...safeData } = data;
        localStorage.setItem("registerData", JSON.stringify(safeData))
        reset()
        router.push("/login")
      }

    }catch(error) {
        console.error(error)
        setError("Ocurrió un error inesperado. Intenta nuevamente")
    }
  }

    
  return (
    <div className="flex justify-center items-start w-full mt-8 overflow-auto">
      <form
        className="w-full max-w-xl bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-2xl text-center text-bold">Crea tu cuenta</span>
        <label
          className="block mb-2 mt-1 text-md font-medium text-black"
          htmlFor="fullname"
        >
          Nombre completo
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2"
          type="text"
          id="fullname"
          {...register("fullname")}
        />
        {errors.fullname?.message && (
          <p className="text-red-600 mt-1">{errors.fullname.message}</p>
        )}

        <label
          className="block mb-2 mt-4 text-md font-medium text-black"
          htmlFor="birthDate"
        >
          Fecha de nacimiento
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2"
          type="date"
          id="birthDate"
          {...register("birthDate")}
        />
        {errors.birthDate?.message && (
          <p className="text-red-600 mt-1">{errors.birthDate.message}</p>
        )}

        <label
          className="block mb-2 mt-4 text-md font-medium text-black"
          htmlFor="gender"
        >
          Género
        </label>
        <select
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-4"
          id="gender"
          {...register("gender")}
        >
          {genderOptions}
        </select>
        {errors.gender?.message && (
          <p className="text-red-600 mt-1">{errors.gender.message}</p>
        )}

        <label
          className="block mb-2 mt-4 text-md font-medium text-black"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          type="email"
          id="email"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-red-600 mt-1">{errors.email.message}</p>
        )}

        <label
          className="block mb-2 mt-4 text-md font-medium text-black"
          htmlFor="username"
        >
          Usuario
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          type="text"
          id="username"
          {...register("username")}
        />
        {errors.username?.message && (
          <p className="text-red-600 mt-1">{errors.username.message}</p>
        )}

        <label
          className="block mb-2 mt-4 text-md font-medium text-black"
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          type="password"
          id="password"
          {...register("password")}
        />
        {errors.password?.message && (
          <p className="text-red-600 mt-1">{errors.password.message}</p>
        )}

        <label
          className="block mb-2 mt-4 text-md font-medium text-black"
          htmlFor="confirmPassword"
        >
          Confirme contraseña
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p className="text-red-600 mt-1">{errors.confirmPassword.message}</p>
        )}

        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="w-1/2 sm:w-1/3 text-black font-semibold bg-amber-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2"
          >
            Registrarse
          </button>
        </div>
      </form>
    
    {/* error personalizado */}
    {error && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center w-80 relative animate-scaleIn">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">⚠️ Error al registrarse</h3>
          <p className="text-gray-700 mb-4">{error}</p>
          <div className="button-wrapper">
            <button
              onClick={() => setError(null)}
              className="bg-amber-300 hover:bg-blue-400 text-black font-semibold px-5 py-2 rounded-full transition"
            >
              OK
            </button>
          </div>
          {/* Icono de cerrar */}
        </div>
      </div>
    )}
    </div>
  );
}

const StyledWrapper = styled.div`
  
.popup {
    width: 280px;
    height: fit-content;
    background-color: rgb(255, 250, 250);
    border-radius: 10px;
    border: 1px solid rgb(206, 206, 206);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    gap: 15px;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.066);
  }

  .popup-heading {
    color: rgb(34, 34, 34);
    font-weight: 800;
  }
  .popup-error {
    font-size: 11px;
    font-weight: 400;
    color: rgb(51, 51, 51);
  }

  .button-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .svgIconCross {
    height: 10px;
  }`;