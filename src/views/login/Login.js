import React,{useState, useEffect,useContext} from 'react';
import { Row, Col, Input, Button } from 'antd';
import {Link} from 'react-router-dom'
import './Login.css'
import gym from '../../assets/gym.svg'
import AuthContext from '../../context/autenticacion/authContext'
import Error from '../register/Error.js'



const Login = (props) => {

    const authContext = useContext(AuthContext);
    const {error, autenticado, login} = authContext;

    useEffect(() => {
      if(autenticado){
        props.history.push('/')
      }
    }, [autenticado]);

  const [user, setUser] = useState({
    email:'',
    password:'',
    
  })

  const [alert, setAlert] = useState('');

  const {email, password} = user

  const handleChange = e =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })

  }

  const onSubmit = e =>{
    e.preventDefault();

     
    if( email.trim()==='' || password.trim()===''){
      setAlert('Todos los campos son obligatorios')
      return;
    }

    if(error){
      setAlert('Usuario no existe');
      return
    }
      login({email,password})

}

  return (
    <div>
      <Row>
        <Col span={12} className='left login_col'>
        <img src={gym} className='image'/>
        </Col>

        <Col span={12} >
         <form className='login_col login_pre'>
         <p className='label'>Login</p>
            <Input placeholder='Email' type='email' name='email' value={email} onChange={handleChange}></Input>
            <br /> 
            <Input placeholder='Password' type='password' name='password' value={password} onChange={handleChange}></Input>
            <br />
            {alert ? <Error message={alert} /> :null }
            <Button className='button' type='primary' onClick={onSubmit}>Login</Button>
              <br /> <br />
            <Link to={'/register'} className='link'>You do not have an account? , Sign up</Link>
         </form>

        </Col>
      </Row>
    </div>
  );
};

export default Login;