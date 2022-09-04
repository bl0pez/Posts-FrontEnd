import { Outlet } from "react-router-dom"
import { Header } from "../components"

export const AuthLayout = () => {
  return (
    
    <>
    
    <Header />

    <div className="flex justify-center">
    <Outlet />
    </div>
    
    
    </>

  )
}
