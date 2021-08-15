import React,{useState, useContext} from 'react';
import {Input, Button } from "antd";
import "./styles.css"
import Error from '../register/Error'
import AlertaContext from "../../context/alertas/alertaContext";
const EditPassword = () => {

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const [user, setUser] = useState({
        password:'',
        confirm:''
    })

    const {password, confirm} = user

    const handleChange = e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = e =>{
        e.preventDefault();

        if(password.trim()==='' || confirm.trim() ===''){
            mostrarAlerta('Todos los campos son obligatorios');
            return
        }

        if (password.length < 8) {
            mostrarAlerta("la contraseña debe contar por lo menos con 8 caracteres");
            return;
          }

        if (password !== confirm) {
            mostrarAlerta("las contraseñas no coinciden");
            return;
          }
    }
    return (
        <div className='container'>
           
            <div className='content'>
            
                <p className='text'>Recuperar contraseña</p>
                <Input
                    placeholder='New Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder='Repeat New Password'
                    type='password'
                    name='confirm'
                    value={confirm}
                    onChange={handleChange}
                ></Input>
                    {alerta ? <Error message={alerta} /> :null}
                <Button className='button' type="primary" onClick={handleClick}>
                    Recuperar 
                </Button>
            </div>
            
        </div>
      );
}
 
export default EditPassword;