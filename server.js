import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connect from "./lib/connect.js" //!check import name!
// import routers
import refreshTokenRouter from "./routes/refreshToken.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

await connect(); // connect to database

const app = express();

// configure cors to work with cookies
app.use(cors({ credentials: true, origin: "http://localhost:5173" })); //! enter correct port!

// parse incoming cookies
app.use(cookieParser());

app.use(express.json());

// Routes
app.use("refresh-token", refreshTokenRouter);

// definition of the server address
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(globalErrorHandler);