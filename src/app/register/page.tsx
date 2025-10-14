// guardar los valores de todos los campos del formulario.
"use client";
import {useForm} from 'react-hook-form'
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/validations/userSchema';

type Inputs = {
  fullname: string;
  birthDate: Date;
  gender: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(userSchema),
  });
  
  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit(data => {console.log(data)})}>
      
      <label  className="block mb-2 mt-10 text-md font-medium text-black" htmlFor="fullname"> Nombre completo</label>
      <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
      type="text" id="fullname" {...register('fullname')} />
      { errors.fullname?.message && <p className='text-red-600'>{errors.fullname.message}</p>  }

      <label className="block mb-2 mt-10 text-md font-medium text-black" htmlFor="birthDate">Fecha de nacimiento</label>
      <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
      type="Date" id="birthDate" {...register('birthDate')}/>
        { errors.birthDate?.message && <p className='text-red-600'>{errors.birthDate.message}</p>  }

      <label  className="block mb-2 mt-10 text-md font-medium text-black" htmlFor="gender">Genero</label>
      <select id="gender" {...register('gender')}>
          <option value="">Seleccione</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
      </select>
        { errors.gender?.message && <p className='text-red-600'>{errors.gender.message}</p>  }

      <label className="block mb-2 mt-10 text-md font-medium text-black" htmlFor="email">Email</label>
      <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
      type="email" id="email" {...register('email')}/>
        { errors.email?.message && <p className='text-red-600'>{errors.email.message}</p>  }

      <label className="block mb-2 mt-10 text-md font-medium text-black" htmlFor="username">Usuario</label>
      <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
      type="text" id="username" {...register('username')}/>
        { errors.username?.message && <p className='text-red-600'>{errors.username.message}</p>  }

      <label className="block mb-2 mt-10 text-md font-medium text-black" htmlFor="password">Contraseña</label>
      <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
      type="password" id="password" {...register('password')}/>
        { errors.password?.message && <p className='text-red-600'>{errors.password.message}</p>  }

      <label className="block mb-2 mt-10 text-md font-medium text-black" htmlFor="confirmPassword"> Confirme contraseña</label>
      <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
      type="password" id="confirmPassword" {...register('confirmPassword')}/>
        { errors.confirmPassword?.message && <p className='text-red-600'>{errors.confirmPassword.message}</p>  }

      <button  type="submit"
        className="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      > Registrarse</button>
    </form>
  );
}
