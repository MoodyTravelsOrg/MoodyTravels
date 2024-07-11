import connect from "./lib/connect.js";
import Recommendation from "./models/Recommendation.js";
import User from "./models/User.js";
import { hash } from "bcrypt";

try {
    console.log("Attempting to seed database...");

    await connect();

    await User.deleteMany({});
    await Recommendation.deleteMany({});

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
            username: "Moody_theOG",
            password: hashedPassword,
        },
        {
            email: "stefano@moody.travels",
            username: "Moody_stefano",
            password: hashedPassword,
        } 
    ];

    const recommendations = [
        {
            emotion: "happy",
            emoji: "😊",
            categories: [
                {
                    name: "city",
                    img: "https://wallpapercave.com/wp/wp3594884.jpg",
                    destinations: [
                        { name: "Happy City 1" },
                        { name: "Happy City 2" },
                        { name: "Happy City 3" }
                    ],
                },
                {
                    name: "beach",
                    img: "https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0",
                    destinations: [
                        { name: "Happy Beach 1" },
                        { name: "Happy Beach 2" },
                        { name: "Happy Beach 3" }
                    ],
                },
                {
                    name: "nature",
                    img: "https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain",
                    destinations: [
                        { name: "Happy Nature 1" },
                        { name: "Happy Nature 2" },
                        { name: "Happy Nature 3" }
                    ],
                },
            ]
        },
        {
            emotion: "sad",
            emoji: "😢",
            categories: [
                {
                    name: "city",
                    img: "https://wallpapercave.com/wp/wp3594884.jpg",
                    destinations: [
                        { name: "Sad City 1" },
                        { name: "Sad City 2" },
                        { name: "Sad City 3" }
                    ],
                },
                {
                    name: "beach",
                    img: "https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0",
                    destinations: [
                        { name: "Sad Beach 1" },
                        { name: "Sad Beach 2" },
                        { name: "Sad Beach 3" }
                    ],
                },
                {
                    name: "nature",
                    img: "https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain",
                    destinations: [
                        { name: "Sad Nature 1" },
                        { name: "Sad Nature 2" },
                        { name: "Sad Nature 3" }
                    ],
                },
            ]
        },
        {
            emotion: "angry",
            emoji: "😡",
            categories: [
                {
                    name: "city",
                    img: "https://wallpapercave.com/wp/wp3594884.jpg",
                    destinations: [
                        { name: "Angry City 1" },
                        { name: "Angry City 2" },
                        { name: "Angry City 3" }
                    ],
                },
                {
                    name: "beach",
                    img: "https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0",
                    destinations: [
                        { name: "Angry Beach 1" },
                        { name: "Angry Beach 2" },
                        { name: "Angry Beach 3" }
                    ],
                },
                {
                    name: "nature",
                    img: "https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain",
                    destinations: [
                        { name: "Angry Nature 1" },
                        { name: "Angry Nature 2" },
                        { name: "Angry Nature 3" }
                    ],
                },
            ]
        },
        {
            emotion: "anxious",
            emoji: "😟",
            categories: [
                 {
                    name: "city",
                    img: "https://wallpapercave.com/wp/wp3594884.jpg",
                    destinations: [
                        { name: "Anxious City 1" },
                        { name: "Anxious City 2" },
                        { name: "Anxious City 3" }
                    ],
                },
                {
                    name: "beach", 
                    img: "https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0",
                    destinations: [
                        { name: "Anxious Beach 1" },
                        { name: "Anxious Beach 2" },
                        { name: "Anxious Beach 3" }
                    ],
                },
                {
                    name: "nature",
                    img: "https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain",
                    destinations: [
                        { name: "Anxious Nature 1" },
                        { name: "Anxious Nature 2" },
                        { name: "Anxious Nature 3" }
                    ],
                },
            ]
        },
    ]

    await User.insertMany(mockUsers);
    await Recommendation.insertMany(recommendations);

    console.log("Database seeded!");

    process.exit(0);
} catch (error) {
    console.log(error);

    process.exit(1);
}