import { useState } from "react";
import { request } from "../helpers";

export const useAuth = () => {

    const [status, setStatus] = useState("checking"); //'authenticated','not-authenticated',
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    //check if user is authenticated
    const checkAuthToken = () => {
        const token = localStorage.getItem("token");
        if (!token) return setStatus("not-authenticated");

        request("/auth/renew", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(data => {
                setStatus("authenticated");
                setUser(data);
            })
            .catch(err => {
                setStatus("not-authenticated");
            });
    }

    const startLogin = (body) => {
        request("/auth/login", {
            method: 'POST',
            body
        })
            .then(data => {
                localStorage.setItem("token", data.token);
                setStatus("authenticated");
                setUser(data);
            })
            .catch(err => {
                setErrorMessage(err.message);
                setStatus("not-authenticated");
            });
    }

    //loagout
    const startoagout = () => {
        localStorage.removeItem("token");
        setStatus("not-authenticated");
        setUser(null);
    }

    //Remove error message
    setTimeout(() => {
        setErrorMessage(null);
    }, 4000);

    return {
        status,
        user,
        errorMessage,
        checkAuthToken,
        startLogin,
        startoagout,
    }

}
