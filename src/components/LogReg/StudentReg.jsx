// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/studentReg',{name,email,password})
        .then(result => {console.log(result)
            navigate('/studentLogin')
        })
        .catch(err => console.log(err))
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="InputEmail">Name</label>
                <input type="text" required onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="InputEmail">Email</label>
                <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="InputPassword">Password</label>
                <input type="password" required/>
            </div>
            <div>
                <label htmlFor="InputPassword">Confirm Password</label>
                <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>Register</button>
        </form>
        <p>Already have an Account</p>
        <Link to="/studentLogin" classname="nounderline"><button>Login</button></Link>
        
    </>
  )
}

export default StudentLogin
