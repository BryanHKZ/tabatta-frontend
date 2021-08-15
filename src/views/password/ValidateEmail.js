import React,{useState,useContext,useEffect} from 'react';
import {Input, Button } from "antd";
import "./styles.css"
import Error from '../register/Error'
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const ValidateEmail = (props) => {
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const {validate, ValidateEmail,mensaje,EditaUser } = authContext;

    useEffect(() => {
      
        if (mensaje) {
          mostrarAlerta(mensaje);
          
        }
    
        // eslint-disable-next-line
      }, [mensaje]);

    const [user, setUser] = useState({
        email:'',
        code:''
    })

    const {email, code} = user

    const handleChange = e =>{
        setUser({
            ...user,
           [e.target.name] : e.target.value
       })
    }

    const handleClick = e =>{
        e.preventDefault();

        if(email.trim()===''){
            mostrarAlerta('Introduzca un Email');
            return
       
    }

    ValidateEmail({email});

}

    const handleClickE = e =>{
        e.preventDefault();
        /* eslint eqeqeq: 0 */
        if(EditaUser.recoveryPasswordNumber!=code){
            mostrarAlerta('El codigo no es valido');
            return;
        }

        props.history.push('/editPassword');

    }
    return (
        <div className='container'>
           
            <div className='content'>
            
                <p className='text'>Validar Email</p>
               {validate ? 
                   
                   <Input
                   className='input'
                   placeholder='codigo'
                   type='number'
                   name='code'
                   value={code}
                   onChange={handleChange}
               ></Input>
                :
             
                    <Input
                    placeholder='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                ></Input>

            }

            {
                validate ? 

                <Button className='button' type="primary" onClick={handleClickE}>
                  Enviar 
                 </Button>

                :

                <Button className='button' type="primary" onClick={handleClick}>
                Validar 
                 </Button>

            }
              
                    {alerta ? <Error message={alerta} /> :null}
               
            </div>
            
        </div>

    );

}


export default ValidateEmail;