import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { mappedGenders, userSchema } from '@/validations/userSchema';

interface LoginFormData {
  email: string;
  password: string;
}

export function RegisterForm () {
    
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: zodResolver(userSchema)
  });

  const genderOptions = Object.entries(mappedGenders).map(([key, value]) => (
    <option value={key} key={key}> {value} </option>
  ));

  const onSubmit = (data: LoginFormData) => {
        localStorage.setItem("loginData", JSON.stringify(data));
        console.log(data)
        reset()
    }
     
    return (
            <form className="max-w-md mx-auto" onSubmit = {handleSubmit(onSubmit)}>
        
            <label className="block mb-2 mt-5 text-md font-medium text-black" htmlFor="fullname"> Nombre completo </label>
            <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2 '
            type="text" id="fullname" {...register('fullname')} />
            { errors.fullname?.message && <p className='text-red-600'>{errors.fullname.message}</p>  }

            <label className="block mb-2 mt-2 text-md font-medium text-black" htmlFor="birthDate">Fecha de nacimiento</label>
            <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2'
            type="date" id="birthDate" {...register('birthDate')}/>
                { errors.birthDate?.message && <p className='text-md font-medium text-red-600'>{errors.birthDate.message}</p>  }

            <label  className="block mb-2 mt-2 text-md font-medium text-black" htmlFor="gender">Genero</label>
            <select className= "shadow-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" id="gender" {...register('gender')}>
                {genderOptions}
            </select>
                { errors.gender?.message && <p className='text-md font-medium text-red-600'>{errors.gender.message}</p>  }

            <label className="block mb-2 mt-4 text-md font-medium text-black" htmlFor="email">Email</label>
            <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
            type="email" id="email" {...register('email')}/>
                { errors.email?.message && <p className= 'text-md font-medium text-red-600'>{errors.email.message}</p>  }

            <label className="block mb-2 mt-2 text-md font-medium text-black" htmlFor="username">Usuario</label>
            <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
            type="text" id="username" {...register('username')}/>
                { errors.username?.message && <p className='text-md font-medium text-red-600'>{errors.username.message}</p>  }

            <label className="block mb-2 mt-2 text-md font-medium text-black" htmlFor="password">Contraseña</label>
            <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
            type="password" id="password" {...register('password')}/>
                { errors.password?.message && <p className='text-md font-medium text-red-600'>{errors.password.message}</p>  }

            <label className="block mb-2 mt-2 text-md font-medium text-black" htmlFor="confirmPassword"> Confirme contraseña</label>
            <input className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
            type="password" id="confirmPassword" {...register('confirmPassword')}/>
                { errors.confirmPassword?.message && <p className='text-md font-medium text-red-600'>{errors.confirmPassword.message}</p>  }
            <div className= 'flex flex-col justify-center items-center'>
                <button  type="submit"
                className= "block w-1/3 text-black font-semibold bg-amber-300 hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2 mt-6">Registrarse
                </button>
            </div>
           
        </form>
     );
}