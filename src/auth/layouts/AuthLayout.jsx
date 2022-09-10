import { Outlet } from "react-router-dom"
import { Header } from "../components"

export const AuthLayout = () => {
  return (
    
    <>

    <Header />

    <div className="lg:h-[46rem] h-[45rem] flex justify-center items-center">
    <Outlet />
    </div>

    </>


  )
}
