<<<<<<< HEAD
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> ec32075 (💄 Update Navbar and footer)

const Register = () => {

    const [inputs, setInput] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = e => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("/auth/register", inputs)
            navigate("/login")
        } catch (err) {
            // .data from pathof the json 
            setError(err.response.data)
            // console.log(err);
        }
    }

    return (
        <div className='auth' >
            <h1>Register</h1>
            <form>
<<<<<<< HEAD
                <input required type='text' placeholder='username' name="username" onChange={handleChange}/>
                <input required type='email' placeholder='email' name="email" onChange={handleChange}/>
                <input required type='password' placeholder='password' name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
=======
                <input required type='text' placeholder='username'/>
                <input required type='email' placeholder='email'/>
                <input required type='password' placeholder='password'/>
                <button>Register</button>
                <p>This is an error!</p>
>>>>>>> ec32075 (💄 Update Navbar and footer)
                <span>Don't you have an account? <Link to='/login' >Login</Link></span>
            </form>
        </div>
    )
}

export default Register;