const User = require('../models/User');

const updateCredits = async (req, res) => {
    const { userId, credits } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.credits = credits;
    await user.save();

    res.json({ message: "Credits updated", user });
};

module.exports = { updateCredits };
