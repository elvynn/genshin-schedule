import React, { useState } from 'react';
import { useForm } from "react-hook-form";
//https://react-hook-form.com/api/useform/register
//Custom hooks
import { useToggle } from '../../hooks/use-toggle';


const Login = () => {
    const [isLogin, setIsLogin] = useToggle(true);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div> 
            Login screen!

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="email" 
                    aria-invalid={errors.firstName ? "true" : "false"}
                    {...register("email", { required: true })} 
                />
                {errors.firstName && (
                    <span role="alert">
                    This field is required
                    </span>
                )}

                <button>{isLogin ? 'Acceder' : 'Registrarme'}</button>
                <button onClick={setIsLogin} >{isLogin ? 'Crear cuenta nueva' : 'Acceder con cuenta ya existente'}</button>
                <button>Acceso anonimo</button>
            </form>
        </div>
    );
};

export default Login;