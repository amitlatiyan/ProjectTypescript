import express, {Request, Response} from 'express';



const app = express();
const port = process.env.PORT || 8000;

// import routes
import { userRouter } from './routes/userRoute'

app.use('/', userRouter);


// port listening
app.listen(port, ():void => {
    console.log(`App is listening on port ${port}`);
})