import { Route, Routes } from "react-router-dom";
import {MainLayout } from "../pages/MainLayout";
import Calculator from "../pages/Calculator";
import TodoList from "../pages/TodoList/TodoList";

export const UserRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/home" element={'home'} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/todo" element={<TodoList />} />
                </Route>
            </Routes>
        </>
    );
};
