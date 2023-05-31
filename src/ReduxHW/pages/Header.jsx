import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { authActionsTypes } from "../store/Auth/Auth";
import { NavLink, useNavigate } from 'react-router-dom'
import { TodoListActionsType } from "../store/TODO/TodoList";

export const Header = () => {
    const state = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        navigate('/')
        dispatch({ type: authActionsTypes.LOGOUT })
        dispatch({ type: TodoListActionsType.RESET })
    }
    return (
        <Head>
            <Nav>
                <h2>Logo</h2>
                {state.isAuth && <NavPart>
                    <NavLink to='/calculator' >Calculator</NavLink>
                    <NavLink to={'/todo'}>Todo</NavLink >
                    <Button onClick={logoutHandler}>Logout</Button>
                </NavPart>
                }
            </Nav>
        </Head>
    );
};

const Head = styled.header`
    background: #7c7c7c;
    color: white;
    padding: 20px 40px 20px 40px;
    `
const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 30px;
    
`
const NavPart = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    h2:hover{
    color: #d7d7d7;
    }

`
const Button = styled.button`
    border: none;
    padding: 15px 40px 15px 40px;
    border-radius: 5px;
    background: #dd1e1e;
    color: white;
    font-size: 20px;
    font-weight: bold;
    &:hover{
     background: #b22121;
    }
`