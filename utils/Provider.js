import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import passport from "passport";
import User from "../models/userModel.js";

const connectPassport = () => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } =
    process.env;
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL,
      },
      //this func gets called when we user logs in
      async (acessToken, refreshToken, profile, done) => {
        //database comes here
        const userExists = await User.exists({ googleId: profile.id });
        if (userExists) return done(null, user);

        const user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value,
        });

        return done(null, user);
      }
    )
  );

  passport.serializeUser(async (user, done) => {
    done(null, user.uid);
  });
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};

export default connectPassport;
