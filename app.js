import express from "express";
import dotenv from "dotenv";
import connectPassport from "./utils/Provider.js";
import session from 'express-session'
import passport from "passport";

dotenv.config({
    path:"./config/config.env"
})

connectPassport()

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))

app.use(passport.authenticate("session"))
app.use(passport.initialize())
app.use(passport.session())

export default app