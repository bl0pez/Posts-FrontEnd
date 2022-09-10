import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components'

export const Register = () => {
    return (
        <>
            <form className="w-96 shadow-xl p-3">
                <Input
                    name="name"
                    type="text"
                />
                <Input
                    name="email"
                    type="email"
                />
                <Input
                    name="password"
                    type="password"
                />
                <footer className="space-x-2 flex justify-between items-center">
                    <button
                        type="submit"
                        className="px-4 py-1 rounded text-white bg-violet-900 transition-color hover:bg-violet-900-300"
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
