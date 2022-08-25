import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.files ? target.files[0] : target.value
        });

        if(target.value.length > 5 && !!target.files){
            setFormSubmitted(true);
        }


    }

    const resetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        formSubmitted,
        handleInputChange,
        resetForm
    }

}
