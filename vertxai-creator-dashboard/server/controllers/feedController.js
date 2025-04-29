const axios = require('axios');
const Post = require('../models/Post');

const fetchFeed = async (req, res) => {
    try {
        const twitterPosts = await axios.get('https://api.twitter.com/some-endpoint'); // Replace
        const redditPosts = await axios.get('https://www.reddit.com/r/all.json');

        const combinedPosts = [...redditPosts.data.data.children.map(c => ({ content: c.data.title, source: "Reddit" }))];

        res.json(combinedPosts);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch feeds" });
    }
};

module.exports = { fetchFeed };
