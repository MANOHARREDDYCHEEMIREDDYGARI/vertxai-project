import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Dashboard() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-4">Dashboard</h1>
            <p>Welcome, {user.user.username}</p>
            <p>Credits: {user.user.credits}</p>

            <div className="mt-6">
                <Link to="/feed" className="btn mr-4">Go to Feed</Link>
                <button onClick={logout} className="btn bg-red-500">Logout</button>
            </div>
        </div>
    );
}

export default Dashboard;
