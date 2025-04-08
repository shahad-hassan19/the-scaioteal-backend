import dotenv from 'dotenv'
import connectDB from './src/db/index.js';
import {app} from './app.js';

dotenv.config({
    path: "./.env"
})

app.get('/', (req, res) => {
    res.send('Welcome to The Scaioteal!');
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`App is listening on ${process.env.PORT}`)
    })
    app.on("error", (error) => {
        console.log("Error", error)
    })
})
.catch((err) => {
    console.log("Database Connection Failed!!", err)
})