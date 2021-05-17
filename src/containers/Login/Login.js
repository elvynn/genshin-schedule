import React, { useContext, useEffect } from 'react';
import AuthContext from '../../store/auth-context';

import { useForm } from "react-hook-form";
import useAxios from 'axios-hooks';

//Custom hooks
import { useToggle } from '../../hooks/use-toggle';

import styles from "./Login.module.css";


const Login = () => {
    const [isLogin, setIsLogin] = useToggle(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const authCtx = useContext(AuthContext);
    
    //Register axios hook
    const [{ data: registerData, loading: registerIsLoading, error: registerIsError }, registerFetch ] = useAxios({
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnX5D5Xxfx6LR7MucwMYeKAqZDhmFR0ls',
            method: 'POST'
        },
        { manual: true }
    );
    //Login axios hook
    const [{ data: loginData, loading: loginIsLoading,  error: loginIsError },
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
        <React.Fragment>
        <div className={styles.LoginFormContainer}> 
            <p>{ registerIsLoading || loginIsLoading ? "Loading..." : "Welcome message here" }</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.FieldGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="text" 
                        aria-invalid={errors.email ? "true" : "false"}
                        name="email"
                        placeholder="name@example.com"
                        {...register("email", {
                            required: "The field cannot be empty",
                            pattern: {
                                value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                                message: "Please insert a valid email"
                            }
                        })}
                    />
                    {errors.email && (
                        <p role="alert"  className={styles.FieldError}>
                        {errors.email.message}
                        </p>
                    )}
                </div>

                <div className={styles.FieldGroup}>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        aria-invalid={errors.password ? "true" : "false"}
                        name="password"
                        {...register("password", {
                            required: "The field cannot be empty",
                            minLength: {
                                value: 6,
                                message: 'The password must have at least 6 characters'
                            }
                        })}
                    />
                    {errors.password && (
                        <p role="alert" className={styles.FieldError}>
                        {errors.password.message}
                        </p>
                    )}
                </div>

                <button className={styles.LoginButton}>{isLogin ? 'Log in' : 'Sign up'}</button>
                { /*<button>Guest mode</button> */ }
            </form>
        </div>
        <button onClick={setIsLogin} className={styles.Toggle}>{isLogin ? 'Create new account' : 'Login with an existing account'}</button>
        </React.Fragment>
    );
};

export default Login;