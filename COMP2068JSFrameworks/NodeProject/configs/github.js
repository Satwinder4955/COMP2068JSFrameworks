const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

// Passport configuration
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://127.0.0.1:3000/auth/github/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            const user = await User.findOne({ oauthId: profile.id });
            if (user) {
                return done(null, user);
            } else {
                const newUser = new User({
                    username: profile.username,
                    oauthId: profile.id,
                    oauthProvider: "Github",
                    created: Date.now(),
                });
                const savedUser = await newUser.save();
                return done(null, savedUser);
            }
        }
    )
);

module.exports = passport;
