// guardar los valores de todos los campos del formulario.
"use client";
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { mappedGenders, userSchema } from '@/validations/userSchema';
import  RegisterForm  from '@/components/RegisterForm';

interface LoginFormData {
  email: string;
  password: string;
}

export default function RegisterPage() {
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
    <RegisterForm/>
  )
}
