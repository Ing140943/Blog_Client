<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from "axios"
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> ec32075 (💄 Update Navbar and footer)

const Login = () => {

    const [inputs, setInput] = useState({
        username: "",
        password: ""
    })

    const [err, setError] = useState(null);

    const navigate = useNavigate()

    const handleChange = e => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await axios.post("/auth/login", inputs)
            navigate("/")
        } catch (err) {
            setError(err.response.data)
        }
    }
    return (
        <div className='auth' >
            <h1>Login</h1>
            <form>
<<<<<<< HEAD
                <input type='text' placeholder='username' name="username" onChange={handleChange} />
                <input type='password' placeholder='password' name="password" onChange={handleChange} />
                <button onClick={handleSubmit} >Login</button>
                {err && <p>{err}</p>}
=======
                <input type='text' placeholder='username'/>
                <input type='password' placeholder='password'/>
                <button>Login</button>
                <p>This is an error!</p>
>>>>>>> ec32075 (💄 Update Navbar and footer)
                <span>Don't you have an account? <Link to='/register' >Register</Link></span>
            </form>
        </div>
    )
}

export default Login;