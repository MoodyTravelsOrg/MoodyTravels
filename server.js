import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connect from "./lib/connect.js"
import path from "path"; //added for the fileupload
import { fileURLToPath } from "url"; //added for the fileupload
// import routers
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import refreshTokenRouter from "./routes/refreshToken.js";
import travelRouter from "./routes/travel.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./routes/user.js"
import testimonialsRouter from "./routes/testimonials.js";
import resetCookiesRouter from "./routes/resetCookies.js"
await connect(); // connect to database

const app = express();

// configure cors to work with cookies
app.use(cors({ credentials: true, origin: process.env.FRONTEND_API }));

// parse incoming cookies
app.use(cookieParser());

app.use(express.json());

// ensure fileupload is working:
// get the current file & directory
const __filename = fileURLToPath(import.meta.url); // the absolute path to the current file
const __dirname = path.dirname(__filename);

//Serve our files statically from the server side
app.use(express.static(path.join(__dirname, "frontend/dist"))) // specify the path for our frontend (current directory + path we want to get in)

// Routes
app.use("/login", loginRouter);

app.use("/refresh-token", refreshTokenRouter);

app.use("/register", registerRouter);

app.use("/travel", travelRouter);

app.use("/users", userRouter);

app.use("/testimonials", testimonialsRouter); // Use testimonials router

app.use("/resetCookies", resetCookiesRouter)

// send all the image files uploaded using multer to the dist directory
// all paths exept for the routes specified above will show the frontend
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/frontend/dist");
});

// definition of the server address
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(globalErrorHandler);