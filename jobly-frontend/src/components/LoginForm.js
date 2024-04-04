import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import JoblyApi from '../services/JoblyApi';

function LoginForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { login } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data before submission:', formData); // Log formData before submission
        try {
            const user = await JoblyApi.login(formData);
            console.log('Response from login API:', user); // Log response from login API
            login(user);
            navigate('/');
        } catch (err) {
            console.error('Error during login:', err);
            alert('Failed to log in');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Check if the name is either "username" or "password" before updating state
        if (name === "username" || name === "password") {
            setFormData(fData => ({ ...fData, [name]: value }));
        }
    };


    return (
        <form onSubmit={handleSubmit} className="LoginForm">
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="Enter your username"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    autoComplete="current-password"
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;