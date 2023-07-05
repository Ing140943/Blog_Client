import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

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

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            console.log(process.env.REACT_APP_SERVICES_PATH);
            await axios.post(`${process.env.REACT_APP_SERVICES_PATH}/auth/register`, inputs)
            navigate(`/login`)
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
                <input required type='text' placeholder='username' name="username" onChange={handleChange}/>
                <input required type='email' placeholder='email' name="email" onChange={handleChange}/>
                <input required type='password' placeholder='password' name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{getText(err)}</p>}
                <span>Don't you have an account? <Link to='/login' >Login</Link></span>
            </form>
        </div>
    )
}

export default Register;