import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Input } from '../../components'
import { useForm } from '../../hooks/useForm'
import { useSubmit } from '../../hooks/useSubmit'

const initialValues = {
    name: '',
    email: '',
    password: '',

}

export const Register = () => {

    const { onSubmit, loading, error } = useSubmit();
    const navigate = useNavigate();
    
    const {
        name,
        email,
        password,
        isFormValid,
        handleInputChange,
        resetForm } = useForm(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) return;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        onSubmit("/auth/signup", {
            method: 'POST',
            body: formData
        });
        resetForm();

        navigate('/auth/login');


    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-96 shadow-xl p-3">
                {
                    error && (
                        <Alert
                            message={error}
                        />
                    )
                }
                <Input
                    name="name"
                    type="text"
                    value={name}
                    onInputChange={handleInputChange}
                />
                <Input
                    name="email"
                    type="email"
                    value={email}
                    onInputChange={handleInputChange}
                />
                <Input
                    name="password"
                    type="password"
                    value={password}
                    onInputChange={handleInputChange}
                />
                <footer className="space-x-2 flex justify-between items-center">
                    <button
                        type="submit"
                        className={`px-4 py-1 rounded transition-color text-white ${(isFormValid && !loading) ? " bg-violet-800 hover:bg-violet-900" : " bg-slate-300  cursor-not-allowed"}`}
                    >
                        Register
                    </button>
                    <Link
                        className='text-center text-gray-500 p-2 hover:text-violet-900 cursor-pointer'
                        to='/auth/login'>Already registered? Login</Link>
                </footer>
            </form>

        </>
    )
}
