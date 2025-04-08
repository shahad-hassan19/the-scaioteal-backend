import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()

app.use(async(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200).end()
        return
    } else {
        return await next();
    }
});

app.use(express.json({limit: '5mb'}))
app.use(express.urlencoded({extended: true, limit: '5mb'}))
app.use(cookieParser())


// routes import
import userRouter from './src/routes/user.routes.js';



// routes declaration
app.use("/api/v1", userRouter)


export { app }