import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";

import axios from 'axios'

//Custom hooks
import { useToggle } from '../../hooks/use-toggle';


const Login = () => {
    const [isLogin, setIsLogin] = useToggle(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

    const onSubmit = (data, e) => {
        //alert(JSON.stringify(data))
        if(isLogin){
            //Login
        }else{
            //Register
            setIsLoading(true);
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnX5D5Xxfx6LR7MucwMYeKAqZDhmFR0ls', {
                email: data.email,
                password: data.password,
                returnSecureToken: true
              })
              .then(function (response) {
                setIsLoading(false);
                setIsError(false);
                //console.log(response);
              })
              .catch(function (error) {
                  setIsLoading(false);
                  setIsError(true);
                  if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    alert(error.response.data.error.message);
                  } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                  }
              });
        }
    };
    //const onError = (errors, e) => console.log(errors, e);
    

    return (
        <div> 
            <p>{ isLoading ? "Cargando..." : "Login screen!" }</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="text" 
                    aria-invalid={errors.email ? "true" : "false"}
                    name="email"
                    placeholder="ej: nombre@email.com"
                    {...register("email", {
                        required: "Campo obligatorio",
                        pattern: {
                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                            message: "Introduzca un email valido"
                        }
                    })}
                />
                {errors.email && (
                    <p role="alert">
                     {errors.email.message}
                    </p>
                )}


                <input 
                    id="password" 
                    type="password" 
                    aria-invalid={errors.email ? "true" : "false"}
                    name="password"
                    {...register("password", {
                        required: "Campo obligatorio",
                        minLength: {
                            value: 6,
                            message: 'La contrasena debe contener almenos 6 caracteres' // JS only: <p>error message</p> TS only support string
                          }
                    })}
                />
                {errors.password && (
                    <p role="alert">
                     {errors.password.message}
                    </p>
                )}

                <button>{isLogin ? 'Acceder' : 'Registrarme'}</button>
                <button>Acceso anonimo</button>
            </form>
            <button onClick={setIsLogin} >{isLogin ? 'Crear cuenta nueva' : 'Acceder con cuenta ya existente'}</button>
        </div>
    );
};

export default Login;