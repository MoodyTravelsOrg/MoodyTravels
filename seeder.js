import connect from "./lib/connect.js";
import User from "./models/User.js";

try {
    console.log("Attempting to seed database...");

    await connect();

    await User.deleteMany({});

    const mockUsers = [
        {
            email: "alexis@moody.travels",
            username: "moody_alexis",
            password: "moody123",
        },
        {
            email: "mir@moody.travels",
            username: "moody_mir",
            password: "moody123",
        },
        {
            email: "og@moody.travels",
            username: "moody_og",
            password: "moody123",
        },
        {
            email: "stefano@moody.travels",
            username: "moody_stefano",
            password: "moody123",
        } 
    ];

    await User.insertMany(mockUsers);

    console.log("Database seeded!");

    process.exit(0);
} catch (error) {
    console.log(error);

    process.exit(1);
}