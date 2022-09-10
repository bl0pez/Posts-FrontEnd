import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Input } from '../../components';
import AuthContext from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Login = () => {

  const { email, password, handleInputChange } = useForm({
    email: 'prueba2@gmail.com',
    password: '123456'
  });

  const { startLogin, errorMessage } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    setLoading(false);
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    startLogin(formData);
    setLoading(true);

  }


  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-96 shadow-lg p-3">
          {
          errorMessage && (
            <Alert
              message={errorMessage}
            />
          )
        }
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
            className={`${(loading) ? "px-4 py-1 rounded text-white bg-violet-900 transition-color hover:bg-violet-900-300" : " bg-slate-300 px-4 py-1 rounded text-white cursor-not-allowed"}`}
          >
            Login
          </button>
          <Link
            className='text-center text-gray-500 p-2 hover:text-violet-900 cursor-pointer'
            to='/auth/register'>Not registered? Register</Link>
        </footer>
      </form>



    </>
  )
}
