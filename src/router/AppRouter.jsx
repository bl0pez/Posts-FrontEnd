import AuthContext from '../contexts/AuthContext';
import { useContext, useEffect } from 'react';
import { Loader } from '../components';
import { PostRouter } from '../posts/routes/PostRouter';
import { AuthRouter } from '../auth/routes/AuthRouter';

export const AppRouter = () => {

  const { status, checkAuthToken } = useContext(AuthContext);

  useEffect(() => {
    checkAuthToken();
  }, []);
  

  if (status === 'checking') {
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  return (
      <>

        {
          (status === 'authenticated')
            ? (<PostRouter />)
            : (<AuthRouter />)
        }
      </>
  )
}