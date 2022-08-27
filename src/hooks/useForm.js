import { useMemo, useState } from "react";

export const useForm = (initialForm = {}) => {

    const [ formState, setFormState ] = useState( initialForm );

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.files ? target.files[0] : target.value
        });
    }
    

    const isFormValid = useMemo( () => {
        for (const key in formState) {
            if ( !formState[key] ) {
                return false;
            }
        }
        return true;

    }, [ formState ] );

    const resetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        isFormValid,
        handleInputChange,
        resetForm
    }

}
