import styled from "styled-components";
import Input from "../UI/Input";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { authActionsTypes } from "../store/Auth/Auth";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [emailVal, setEmailVal] = useState('')
    const [passwordVal, setPasswordVal] = useState('')

    const emailValueHandler = (event) => {
        setEmailVal(event.target.value)
    }
    const passwordValueHandler = (event) => {
        setPasswordVal(event.target.value)
    }

    const login = (event) => {
        event.preventDefault()
        if (emailVal === 'kamaldinov321@gmail.com' && passwordVal === '123456') {
            navigate('home')
            dispatch({ type: authActionsTypes.LOGIN, payload: emailVal })
        }

    }
    return (
        <>
            <FormBg>
                <LoginText>Login</LoginText>
                <Form>
                    <div>
                        <div>
                            <Label htmlFor="">Email</Label>
                        </div>
                        <Input onChange={emailValueHandler} type={'email'} />
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="">Password</Label>
                        </div>
                        <Input onChange={passwordValueHandler} maxLength={20} type={'password'} />
                    </div>
                    <LogButton onClick={login}>Login</LogButton>
                </Form>
            </FormBg >
        </ >
    );
};

const FormBg = styled.form`
     box-shadow: 0px 0px 10px 0px gray;
     margin: 100px 500px 0px 500px;
     border-radius: 10px;
     padding-top: 50px;
 
`
const Form = styled.form`
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 20px 0px 100px 0px;
     gap: 20px;

`
const LoginText = styled.h1`
    font-size: 70px;
    text-align: center;
    color: #3d3d3d;
`
const Label = styled.label`
    font-size: 20px;

`
const LogButton = styled.button`
     padding: 10px 40px 10px 40px;
     background: #41b141;
     border: none;
     color: white;
     font-weight: bold;
     font-size: 20px;
     border-radius:5px ;
     &:hover{
        background: #348634;
       
      }
`