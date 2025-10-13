// guardar los valores de todos los campos del formulario.
"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    // los campos inicialmente estan vacios
    fullName: "",
    birthDate: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // funcion para actualizar los valores del formulario
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => 
  {
    const { name, value } = e.target; // es el input que disparó el evento (onChange).
    setFormData({ ...formData, [name]: value }); // asegura que el resto de los campos no se pierda al actualizar uno solo.

    // Validaciones por campo...
    setErrors((prev) => {
      const newErrors = { ...prev };

      if (name === "fullName") {
        newErrors.fullName =
          value.trim() === "" ? "Este campo es obligatorio" : "";
      }

      if (name === "birthDate") {
        if (value === "") {
          newErrors.birthDate = "Este campo es obligatorio";
        } 
        else 
        {
          const today = new Date();
          const birth = new Date(value);
          let age = today.getFullYear() - birth.getFullYear();
          const monthDiff = today.getMonth() - birth.getMonth();
          const dayDiff = today.getDate() - birth.getDate();
         
          if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
          }

          newErrors.birthDate = age < 16 ? "Debes tener al menos 16 años" : "";
        }
      }

      if (name === "gender") {
        newErrors.gender = 
        value === "" ? "El campo es obligatorio" : "";
      }

      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email =
          value === "" || !emailRegex.test(value)
            ? "El email es obligatorio": "";
      }

      if (name === "username") {
        newErrors.username =
          value.trim() === "" ? "Este campo es obligatorio" : "";
      }
        value.length < 6 ? "El usuario debe tener al menos seis (6) caracteres."
        : "";

      if (name === "password")
        newErrors.password =
          value.length < 6 ? "La clave debe tener al menos seis (6) caracteres."
            : "";
            
      // validamos confirmPassword en caso de que ya tenga valor
      if (formData.confirmPassword) {
        newErrors.confirmPassword =
          value !== formData.confirmPassword ? "Las claves no coinciden" : "";
      }

      if (name === "confirmPassword") {
        newErrors.confirmPassword =
          value !== formData.password ? "Las claves no coinciden" : "";
      }
      
      return newErrors;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita que el formulario haga un reload de la página al enviar.
    console.log("Datos del formulario: ", formData); // Falta agregar validaciones y enviar los datos al backend.
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label className="block mb-2 mt-10 text-md font-medium text-black">
          Nombre completo:
        </label>
        <input
          className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-offset-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          type="text"
          name="fullName"
          value={formData.fullName} // input siempre refleja el valor actual del estado.
          onChange={handleInputs} // se actualiza cada vez que el user escribe
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-md font-medium text-black">
          Fecha de nacimiento:
        </label>
        <input
          className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleInputs}
        />
        {errors.birthDate && (
          <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-md font-medium text-black">
          Genero:
        </label>
        <select
          className=""
          name="gender"
          value={formData.gender}
          onChange={handleInputs}
        >
          <option value="">Seleccione</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-md font-medium text-black">
          Email:
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputs}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-md font-medium text-black">
          Usuario:
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputs}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-md font-medium text-black">
          Contraseña:
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputs}
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-md font-medium text-black">
          Repita la contraseña:
        </label>
        <input
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputs}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Registrarse
      </button>
    </form>
  );
}
