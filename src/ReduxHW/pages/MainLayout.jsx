import { Login } from "./Login";
import { Header } from './Header'
import { useSelector } from 'react-redux'
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    const state = useSelector((state) => state.auth)

    return (
        <div>
            <Header />
            {state.isAuth ? <Outlet /> : <Login />}
        </div>
    );
};
