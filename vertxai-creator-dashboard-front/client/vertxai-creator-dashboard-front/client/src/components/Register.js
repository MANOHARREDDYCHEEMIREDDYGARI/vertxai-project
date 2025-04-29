import { useState } from 'react';
import { register as registerService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerService({ email, password, username });
            alert('Registration successful');
            navigate('/login');
        } catch (err) {
            console.error(err);
            alert('Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-6">Register</h2>
                <input type="text" placeholder="Username" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn mt-4 w-full">Register</button>
            </form>
        </div>
    );
}

export default Register;
