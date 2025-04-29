import { useEffect, useState, useContext } from 'react';
import { fetchFeed } from '../services/feedService';
import { AuthContext } from '../context/AuthContext';

function Feed() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getFeed = async () => {
            try {
                const feedData = await fetchFeed(user.token);
                setPosts(feedData);
            } catch (error) {
                console.error(error);
            }
        };
        getFeed();
    }, [user.token]);

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-6">Feed</h1>
            <div className="space-y-4">
                {posts.map((post, idx) => (
                    <div key={idx} className="p-4 bg-white shadow rounded">
                        <p>{post.content}</p>
                        <small className="text-gray-400">{post.source}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feed;
