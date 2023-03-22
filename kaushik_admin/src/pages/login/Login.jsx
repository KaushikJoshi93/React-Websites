import './login.scss'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {loginUser } from '../../redux/apiCalls';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e)=>{
    e.preventDefault();
    loginUser(dispatch , {username , password})

  }
  return (
    <div className='loginContainer'>
        <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} value={username}/>
        <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login