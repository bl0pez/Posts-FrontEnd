import { useMemo, useRef, useState } from "react";

export const useForm = (initialForm = {}) => {

    const [ formState, setFormState ] = useState( initialForm );
    const loadImgRef = useRef(null);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.files ? target.files[0] : target.value
        });

        if( target.files ) {
            const reader = new FileReader();
            reader.onload = file => {
                loadImgRef.current.src = file.target.result;
            }
            reader.readAsDataURL(target.files[0]);
        }
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
        loadImgRef,
        handleInputChange,
        resetForm
    }

}
