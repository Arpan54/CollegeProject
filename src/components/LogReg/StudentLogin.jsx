// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StudentLogin = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/studentLogin',{email,password})
      .then(result => {console.log(result)
        if(result.data == "Success"){
          navigate('/BackHome')
        }
      })
      .catch(err => console.log(err))
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="InputEmail">Email</label>
                <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="InputPassword">Password</label>
                <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Login</button>
        </form>
        
    </>
  )
}

export default StudentLogin
