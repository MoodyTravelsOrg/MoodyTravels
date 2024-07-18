import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connect from "./lib/connect.js"
// import routers
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import refreshTokenRouter from "./routes/refreshToken.js";
import travelRouter from "./routes/travel.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./routes/user.js"
import resetCookiesRouter from "./routes/resetCookies.js"
await connect(); // connect to database

const app = express();

// configure cors to work with cookies
app.use(cors({ credentials: true, origin: process.env.FRONTEND_API }));

// parse incoming cookies
app.use(cookieParser());

app.use(express.json());

// Routes
app.use("/login", loginRouter);

app.use("/refresh-token", refreshTokenRouter);

app.use("/register", registerRouter);

app.use("/travel", travelRouter);

app.use("/users", userRouter);

app.use("/resetCookies", resetCookiesRouter)

// definition of the server address
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(globalErrorHandler);