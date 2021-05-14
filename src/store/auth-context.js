import { createContext, useState } from 'react';

const AuthContext = createContext({
    isLogin: 0,
    token: "",
    expiration: "",
    uid: "",
    login: (token, expiration, uid) => {},
    logout: () => {}
});

export function AuthContextProvider(props) {
    const [userToken, setUserToken] = useState("");
    const [uid, setUid] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const isLogin = userToken ? 1 : 0;
    
    const context = {
        isLogin: isLogin,
        token: userToken,
        expiration: expirationDate,
        uid: uid,
        login: loginHandler,
        logout: logoutHandler
    }

    function loginHandler(token, expiration, uid){
        setUserToken(token);
        setUid(uid);
        handleExpiration(expiration);
    }
    function logoutHandler(){
        setUserToken("");
        setExpirationDate("");
    }

    function handleExpiration(expiration){
        const expirationDate = new Date;

        setExpirationDate(expirationDate);
    }


    return <AuthContext.Provider value={context}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;