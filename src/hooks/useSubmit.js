import { useMemo, useState } from "react";
import { request } from "../helpers/request";

export const useSubmit = () => {
  
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    const onSubmit = (url, options) => {
        setLoading(true);

        request(url, options)
            .then(res => {
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    
    }

    // Remove error message
    useMemo(() => {
        setTimeout(() => {
            setError(null);
        }, 4000);
    }, [error]);


    return {
        onSubmit,
        loading,
        error
    }


}
