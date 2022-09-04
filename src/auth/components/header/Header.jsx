import { Link, NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className="py-3 bg-violet-900">
            <div
                className="container mx-auto text-2xl text-white flex
                flex-col alingn-center text-center lg:flex-row lg:justify-between"
            >
                <Link to="/auth/login">MessageNode</Link>

                <nav className="space-x-5">
                    <NavLink
                        to="/auth/login"
                        className={({ isActive }) => isActive ? "text-amber-500 p-3" : "p-3"}

                    >Login</NavLink>
                                        <NavLink
                        to="/auth/register"
                        className={({ isActive }) => isActive ? "text-amber-500 p-3" : "p-3"}

                    >register</NavLink>
                </nav>
            </div>
        </header>
    )
}
