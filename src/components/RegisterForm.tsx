import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mappedGenders, userSchema } from "@/validations/userSchema";

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

  const onSubmit = (data: registerData) => {
    localStorage.setItem("registerData", JSON.stringify(data));
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center items-start w-full mt-8">
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
    </div>
  );
}
