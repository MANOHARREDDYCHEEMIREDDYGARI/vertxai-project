import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login as loginService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginService({ email, password });
            login(userData);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-6">Login</h2>
                <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn mt-4 w-full">Login</button>
            </form>
        </div>
    );
}

export default Login;
