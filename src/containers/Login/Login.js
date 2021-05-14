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
    
    //Register axios hook
    const [{ data: registerData,   loading: registerIsLoading,  error: registerIsError },
        registerFetch
    ] = useAxios({
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnX5D5Xxfx6LR7MucwMYeKAqZDhmFR0ls',
            method: 'POST'
        },
        { manual: true }
    );
    //Login axios hook
    const [{ data: loginData,   loading: loginIsLoading,  error: loginIsError },
        loginFetch
    ] = useAxios({
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnX5D5Xxfx6LR7MucwMYeKAqZDhmFR0ls',
            method: 'POST'
        },
        { manual: true }
    );

    const onSubmit = (data, e) => {
        //alert(JSON.stringify(data))
        const formData = {
            data: {
                email: data.email,
                password: data.password,
                returnSecureToken: true
              }
        };
        if(isLogin){
            //Login 
            loginFetch(formData);
        }else{
            //Register
            registerFetch(formData);
        }
    };

    useEffect(() => {
        if(registerData)  authCtx.login(registerData.idToken, registerData.expiresIn, registerData.localId); 
        if(loginData)  authCtx.login(loginData.idToken, loginData.expiresIn, loginData.localId); 

        if(registerIsError)  {
            alert("error!");
            console.log("error register: "+JSON.stringify(registerIsError));
        };
        if(loginIsError){
            alert("Authentication failed!");
            console.log("error login: "+JSON.stringify(loginIsError));
        }  
    }, [registerData, registerIsError, loginData, loginIsError]);
    

    return (
        <div> 
            <p>{ registerIsLoading || loginIsLoading ? "Loading..." : "Login screen!" }</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="text" 
                    aria-invalid={errors.email ? "true" : "false"}
                    name="email"
                    placeholder="ej: nombre@email.com"
                    {...register("email", {
                        required: "You must insert an email",
                        pattern: {
                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                            message: "Please insert a valid email"
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
                        required: "You must insert a password",
                        minLength: {
                            value: 6,
                            message: 'The password must have at least 6 characters' // JS only: <p>error message</p> TS only support string
                          }
                    })}
                />
                {errors.password && (
                    <p role="alert">
                     {errors.password.message}
                    </p>
                )}

                <button>{isLogin ? 'Login' : 'Register'}</button>
                { /*<button>Guest mode</button> */ }
            </form>
            <button onClick={setIsLogin} >{isLogin ? 'Create new account' : 'Login with an existing account'}</button>
        </div>
    );
};

export default Login;