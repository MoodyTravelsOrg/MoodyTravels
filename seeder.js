import connect from "./lib/connect.js";
import User from "./models/User.js";
import { hash } from "bcrypt";

try {
    console.log("Attempting to seed database...");

    await connect();

    await User.deleteMany({});
   

    const hashedPassword = await hash("Moody123!", 10);

    const mockUsers = [
        {
            email: "alexis@moody.travels",
            username: "Moody_alexis",
            password: hashedPassword,
        },
        {
            email: "mir@moody.travels",
            username: "Moody_mir",
            password: hashedPassword,
        },
        {
            email: "og@moody.travels",
            username: "Moody_og",
            password: hashedPassword,
        },
        {
            email: "stefano@moody.travels",
            username: "Moody_stefano",
            password: hashedPassword,
        } 
    ];

    await User.insertMany(mockUsers);

    console.log("Database seeded!");

    process.exit(0);
} catch (error) {
    console.log(error);

    process.exit(1);
}