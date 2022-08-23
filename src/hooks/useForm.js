import { useReducer } from "react";
import { formReducer, INITIAL_STATE } from "../reducer/formReducer";

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);


    const handleInputChange = ({ target }) => {
        const { name, value, files } = target;

        dispatch({
            type: 'CHANGE_INPUT',
            payload: {
                name,
                value,
                files
            }
        });

        const validateForm = () => {
            
        }

    }

    return {
        ...state,
        handleInputChange
    }

}
