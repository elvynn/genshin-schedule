import React, { useContext, useEffect } from 'react';
import AuthContext from '../../store/auth-context';

import { useForm } from "react-hook-form";
import useAxios from 'axios-hooks';

//Custom hooks
import { useToggle } from '../../hooks/use-toggle';


const Login = () => {
    const [isLogin, setIsLogin] = useToggle(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const authCtx = useContext(AuthContext);
    
    //Register fetch (post) with axios hook
    const [{ 
            data: registerData, 
            loading: registerIsLoading, 
            error: registerIsError }
        , registerFetch
    ] = useAxios({
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnX5D5Xxfx6LR7MucwMYeKAqZDhmFR0ls',
            method: 'POST'
        },
        { manual: true }
      )

     //Login fetch (post) with axios hook
   
    

    const onSubmit = (data, e) => {
        //alert(JSON.stringify(data))
        if(isLogin){
            //Login 
        }else{
            //Register
            registerFetch({
                data: {
                    email: data.email,
                    password: data.password,
                    returnSecureToken: true
                  }
            });
        }
    };

    useEffect(() => {
        if(registerData){
            authCtx.login(registerData.idToken, registerData.idToken, registerData.localId);
        }
        if(registerIsError){
            alert("Error!");
            console.log("error: "+JSON.stringify(registerIsError));
        }
    }, [registerData, registerIsError]);
    

    return (
        <div> 
            <p>{ registerIsLoading ? "Loading..." : "Login screen!" }</p>

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
                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
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

                <button>{isLogin ? 'Login' : 'Register'}</button>
                <button>Guest mode</button>
            </form>
            <button onClick={setIsLogin} >{isLogin ? 'Create new account' : 'Login with an existing account'}</button>
        </div>
    );
};

export default Login;