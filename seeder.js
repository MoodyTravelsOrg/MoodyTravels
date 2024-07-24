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

    const initialMoods = [
        {
            type: "happy",
            createdAt: "2024-07-16T07:55:55.682+00:00"
        },
        {
            type: "angry",
            createdAt: "2024-07-17T07:55:55.682+00:00"
        },
        {
            type: "sad",
            createdAt: "2024-07-18T07:55:55.682+00:00"
        },
        {
            type: "happy",
            createdAt: "2024-07-19T07:55:55.682+00:00"
        },
        {
            type: "anxious",
            createdAt: "2024-07-20T07:55:55.682+00:00"
        },
        {
            type: "sad",
            createdAt: "2024-07-21T07:55:55.682+00:00"
        },
        {
            type: "anxious",
            createdAt: "2024-07-22T07:55:55.682+00:00"
        },
        {
            type: "angry",
            createdAt: "2024-07-23T07:55:55.682+00:00"
        },
    ]


    const mockUsers = [
        {
            email: "alexis@moody.travels",
            username: "Moody_alexis",
            password: hashedPassword,
            moods: initialMoods
        },
        {
            email: "mir@moody.travels",
            username: "Moody_mir",
            password: hashedPassword,
            moods: initialMoods
        },
        {
            email: "og@moody.travels",
            username: "Moody_theOG",
            password: hashedPassword,
            moods: initialMoods
        },
        {
            email: "stefano@moody.travels",
            username: "Moody_stefano",
            password: hashedPassword,
            moods: initialMoods
        } 
    ];
    
    const destinations = [
        // Happy - City
        { emotion: 'happy', category: 'city', name: 'Disneyland, California, USA', province: 'california', country: 'usa', img: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/800/450/90/media/disneyparksjapan-prod/disneyparksjapan_v0001/1/media/dlr/your-happiest-place-disney/0714ZO_0489SD_DZ_r2_16x9.jpg' },
        { emotion: 'happy', category: 'city', name: 'Paris, Île-de-France, France', province: 'île-de-france', country: 'france', img: 'https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/life-in-city-images/paris-france-gallery-2.jpg' },
        { emotion: 'happy', category: 'city', name: 'Barcelona, Catalonia, Spain', province: 'catalonia', country: 'spain', img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/04/26/269508.jpg' },
    
        // Happy - Beach
        { emotion: 'happy', category: 'beach', name: 'Bora Bora, Bora Bora, French Polynesia', province: 'bora bora', country: 'french polynesia', img: 'https://www.tahiti.com/images1/thumbs/BOBPBR-aerial7-1200x720.jpg' },
        { emotion: 'happy', category: 'beach', name: 'Maui, Hawaii, USA', province: 'hawaii', country: 'usa', img: 'https://one-million-places.com/wp-content/uploads/2015/hawaii/maui-tauchen-01.jpg' },
        { emotion: 'happy', category: 'beach', name: 'Maldives, Maldives', province: 'maldives', country: 'maldives', img: 'https://afar.brightspotcdn.com/dims4/default/dd4ced2/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg' },
    
        // Happy - Nature
        { emotion: 'happy', category: 'nature', name: 'Santorini, South Aegean, Greece', province: 'south aegean', country: 'greece', img: 'https://miro.medium.com/v2/resize:fit:1400/1*C8D-izPa921qGSjKAC3ogA.jpeg' },
        { emotion: 'happy', category: 'nature', name: 'Rio de Janeiro, Rio de Janeiro, Brazil', province: 'rio de janeiro', country: 'brazil', img: 'https://i.pinimg.com/originals/88/d9/00/88d9000853409fd37ca5b0261ce5bdc1.jpg' },
        { emotion: 'happy', category: 'nature', name: 'Kyoto, Kyoto, Japan', province: 'kyoto', country: 'japan', img: 'https://media.shermanstravel.com/952x460_kyoto_istock.jpg' },
    
        // Sad - City
        { emotion: 'sad', category: 'city', name: 'Cotswolds, South West, England', province: 'south west', country: 'england', img: 'https://media.istockphoto.com/id/177096616/de/foto/traditionelle-cotswold-village-england.jpg?s=612x612&w=0&k=20&c=y_HUgnmnUGl1Py9OP5nRIrj_5QG_p0Hs4RHvoqF5Kgw=' },
        { emotion: 'sad', category: 'city', name: 'Tuscany, Tuscany, Italy', province: 'tuscany', country: 'italy', img: 'https://cdn.contexttravel.com/image/upload/w_1500,q_60/v1637596147/blog/Tuscany%20Itinerary:%206%20Fully%20Planned%20Days%20with%20Context/tuscany_itinerary_hero.jpg' },
        { emotion: 'sad', category: 'city', name: 'Mendocino, California, USA', province: 'california', country: 'usa', img: 'https://media.audleytravel.com/-/media/images/home/canada-and-the-usa/usa/places/istock_70194807_usa_mendocino_california_1028664_letterbox.jpg?q=79&w=1920&h=685' },
    
        // Sad - Beach
        { emotion: 'sad', category: 'beach', name: 'Fiji, Fiji', province: 'fiji', country: 'fiji', img: 'https://foundtheworld.com/wp-content/uploads/2014/12/Fiji.jpg' },
        { emotion: 'sad', category: 'beach', name: 'Seychelles, Praslin, Seychelles', province: 'praslin', country: 'seychelles', img: 'https://www.planetware.com/wpimages/2023/01/seychelles-top-rated-beaches-intro-paragraph-anse-lazio-praslin.jpg' },
        { emotion: 'sad', category: 'beach', name: 'Maldives, Maldives', province: 'maldives', country: 'maldives', img: 'https://media-cdn.tripadvisor.com/media/photo-s/28/b5/c1/a7/water-villa-aerial.jpg' },
    
        // Sad - Nature
        { emotion: 'sad', category: 'nature', name: 'Banff National Park, Alberta, Canada', province: 'alberta', country: 'canada', img: 'https://i.natgeofe.com/n/b8ab1b48-40cc-4c24-8584-2c9af818b19b/02-banff-national-park-canada_3x2.jpg' },
        { emotion: 'sad', category: 'nature', name: 'Iceland, Iceland', province: 'iceland', country: 'iceland', img: 'https://lp-cms-production.imgix.net/2020-11/500pxRF_66022803.jpg?w=1920&auto=format&q=75' },
        { emotion: 'sad', category: 'nature', name: 'Lake District, North West, England', province: 'north west', country: 'england', img: 'https://media.timeout.com/images/106068187/750/422/image.jpg' },
    
        // Angry - City
        { emotion: 'angry', category: 'city', name: 'Kyoto, Kyoto, Japan (Zen Gardens)', province: 'kyoto', country: 'japan', img: 'https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2021/03/f9n964.webp' },
        { emotion: 'angry', category: 'city', name: 'Queenstown, Otago, New Zealand (Adventure Sports)', province: 'otago', country: 'new zealand', img: 'https://content.api.news/v3/images/bin/d98f3bd9a54430406233327772466263' },
        { emotion: 'angry', category: 'city', name: 'Amsterdam, North Holland, Netherlands', province: 'north holland', country: 'netherlands', img: 'https://www.holland.com/upload_mm/2/3/6/75601_fullimage_aerial%20view%20of%20downtown%20amsterdam%2C%20the%20netherlands%20during%20a%20dramatic%20beautiful%20sunset%20foto%20repistu%20via%20istock.jpg' },
    
        // Angry - Beach
        { emotion: 'angry', category: 'beach', name: 'Bondi Beach, New South Wales, Australia', province: 'new south wales', country: 'australia', img: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-dv802147_super.jpg' },
        { emotion: 'angry', category: 'beach', name: 'Gold Coast, Queensland, Australia', province: 'queensland', country: 'australia', img: 'https://www.gold-coast.net/wp-content/uploads/2022/04/Gold-Coast-Beaches.jpg' },
        { emotion: 'angry', category: 'beach', name: 'Nha Trang, Khánh Hòa, Vietnam', province: 'khánh hòa', country: 'vietnam', img: 'https://bcp.cdnchinhphu.vn/344443456812359680/2022/12/27/nhattrang3-16721128389061596602579.jpg' },
    
        // Angry - Nature
        { emotion: 'angry', category: 'nature', name: 'Iceland, Iceland (Hot Springs)', province: 'iceland', country: 'iceland', img: 'https://e498rczdjg6.exactdn.com/wp-content/uploads/2020/04/Optimized-Laugavallalaug.jpeg?strip=all&lossy=1&ssl=1' },
        { emotion: 'angry', category: 'nature', name: 'Himalayas, Annapurna Region, Nepal (Trekking)', province: 'annapurna region', country: 'nepal', img: 'https://www.geodiscoverytours.com/wp-content/uploads/2021/09/Annapurna-Region-in-Nepal-1.jpg' },
        { emotion: 'angry', category: 'nature', name: 'Patagonia, Santa Cruz, Argentina', province: 'santa cruz', country: 'argentina', img: 'https://www.exoticca.com/uk/magazine/wp-content/uploads/2021/06/perito-moreno-BLOG-patagonia.png' },
    
        // Anxious - City
        { emotion: 'anxious', category: 'city', name: 'San Francisco, California, USA', province: 'california', country: 'usa', img: 'https://cdn.businessinsider.de/wp-content/uploads/2019/05/image-2019-05-29.jpg' },
        { emotion: 'anxious', category: 'city', name: 'Hong Kong, Hong Kong', province: 'hong kong', country: 'hong kong', img: 'https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Hong-Kong/Hong-Kong-city/112086_SCN_HongKong_iStock466733790_Z8C705.jpg?tr=w-1200%2Cfo-auto' },
        { emotion: 'anxious', category: 'city', name: 'Sydney, New South Wales, Australia', province: 'new south wales', country: 'australia', img: 'https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_1280,c_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg' },
    
        // Anxious - Beach
        { emotion: 'anxious', category: 'beach', name: 'Bali, Bali, Indonesia', province: 'bali', country: 'indonesia', img: 'https://media.cntraveler.com/photos/6400e9ec3b1e3f0df75c5c44/16:9/w_2580,c_limit/Green%20Bowl%20Beach,%20Bali,%20Indonesia_2AGYRXP.jpg' },
        { emotion: 'anxious', category: 'beach', name: 'Cancun, Quintana Roo, Mexico', province: 'quintana roo', country: 'mexico', img: 'https://images.odigoo.com/cb6a1e9c-21c6-4165-9ba7-db9263d832a1/images/posts/everything-about-beaches-in-cancun/webp/meta-everything-about-beaches-in-cancun-ghss.webp' },
        { emotion: 'anxious', category: 'beach', name: 'Amalfi Coast, Campania, Italy', province: 'campania', country: 'italy', img: 'https://www.celebritycruises.com/blog/content/uploads/2022/08/amalfi-coast-beaches-minori-beach-minori--1024x652.jpg' },
    
        // Anxious - Nature
        { emotion: 'anxious', category: 'nature', name: 'Sedona, Arizona, USA', province: 'arizona', country: 'usa', img: 'https://www.pinkadventuretours.com/Media/2872/scenic-sedona-sunset-600x400.jpg' },
        { emotion: 'anxious', category: 'nature', name: 'Big Sur, California, USA', province: 'california', country: 'usa', img: 'https://images.squarespace-cdn.com/content/v1/526f5bfce4b0c67dab63847d/54013157-bc1c-40b5-80f6-529b5fde5652/Scott-Davenport-US-California-Big-Sur-Area-2022-04-13-0279-Staircase+And+Bridge+On+Pfeiffer+Falls+Trail.jpg?format=1500w' },
        { emotion: 'anxious', category: 'nature', name: 'Swiss Alps, Canton of Bern, Switzerland', province: 'canton of bern', country: 'switzerland', img: 'https://w0.peakpx.com/wallpaper/25/579/HD-wallpaper-swiss-alps-river-switzerland-alps-hill.jpg' },
    
        // Bored - City
        { emotion: 'bored', category: 'city', name: 'New York City, New York, USA', province: 'new york', country: 'usa', img: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg' },
        { emotion: 'bored', category: 'city', name: 'Las Vegas, Nevada, USA', province: 'nevada', country: 'usa', img: 'https://travelnevada.com/wp-content/uploads/2020/09/Vegas_Featured.jpg' },
        { emotion: 'bored', category: 'city', name: 'Tokyo, Tokyo, Japan', province: 'tokyo', country: 'japan', img: 'https://media.nomadicmatt.com/2024/tokyothings.jpeg' },
    
        // Bored - Beach
        { emotion: 'bored', category: 'beach', name: 'Maldives, Maldives', province: 'maldives', country: 'maldives', img: 'https://imgcdn.flamingotravels.co.in/Images/PlacesOfInterest/bioluminescent-beach-maldives.jpg' },
        { emotion: 'bored', category: 'beach', name: 'Bora Bora, Bora Bora, French Polynesia', province: 'bora bora', country: 'french polynesia', img: 'https://366e203a.rocketcdn.me/wp-content/uploads/2019/08/Maldives.jpg' },
        { emotion: 'bored', category: 'beach', name: 'Maui, Hawaii, USA', province: 'hawaii', country: 'usa', img: 'https://windows10spotlight.com/wp-content/uploads/2024/03/88272f3af2e36a0f1ff088742c7c9906.jpg' },
    
        // Bored - Nature
        { emotion: 'bored', category: 'nature', name: 'Grand Canyon, Arizona, USA', province: 'arizona', country: 'usa', img: 'https://npf-prod.imgix.net/uploads/shutterstock_97706066_1.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=900&q=80&w=1600' },
        { emotion: 'bored', category: 'nature', name: 'Yellowstone National Park, Wyoming, USA', province: 'wyoming', country: 'usa', img: 'https://www.visittheusa.de/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/Yellowstone.jpg?h=2a29b199&itok=OpHn5jav' },
        { emotion: 'bored', category: 'nature', name: 'Yosemite National Park, California, USA', province: 'california', country: 'usa', img: 'https://i.natgeofe.com/n/f14f6c30-8d11-4e33-a5e9-05f1b50bdde3/yosemite-national-park-california_16x9.jpg?w=1200' }
    ];
    

    

    function filterDestination(destinations, emotion, category) {
        return destinations.filter(item => item.emotion === emotion && item.category === category);
    }
    

    const recommendations = [
        {
            emotion: "happy",
            emoji: "😊",
            categories: [
                {
                    name: "city",
                    img: "https://wallpapercave.com/wp/wp3594884.jpg",
                    destinations: filterDestination(destinations, "happy", "city"),
                },
                {
                    name: "beach",
                    img: "https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0",
                    destinations: filterDestination(destinations, "happy", "beach"),
                },
                {
                    name: "nature",
                    img: "https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain",
                    destinations: filterDestination(destinations, "happy", "nature"),
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
                    destinations: filterDestination(destinations, "sad", "city"),
                },
                {
                    name: "beach",
                    img: "https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0",
                    destinations: filterDestination(destinations, "sad", "beach"),
                },
                {
                    name: "nature",
                    img: "https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain",
                    destinations: filterDestination(destinations, "sad", "nature"),
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
                    destinations: filterDestination(destinations, "angry", "city"),
                },
                {
                    name: "beach",
                    img: "https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0",
                    destinations: filterDestination(destinations, "angry", "beach"),
                },
                {
                    name: "nature",
                    img: "https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain",
                    destinations: filterDestination(destinations, "angry", "nature"),
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
                    destinations: filterDestination(destinations, "anxious", "city"),
                },
                {
                    name: "beach", 
                    img: "https://th.bing.com/th/id/R.4e8d81070377c62b6f70f19f5dbd29dc?rik=NSSVLX43YmM7dA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f07%2f4e8d81070377c62b6f70f19f5dbd29dc.jpg&ehk=zPd2CAORkHzF7J%2bglwU5cPkVXjoWrX4tVVKWPaE0z0c%3d&risl=1&pid=ImgRaw&r=0",
                    destinations: filterDestination(destinations, "anxious", "beach"),
                },
                {
                    name: "nature",
                    img: "https://th.bing.com/th/id/OIP.xHAa7hfT7gXHVAVusTytogHaD-?rs=1&pid=ImgDetMain",
                    destinations: filterDestination(destinations, "anxious", "nature"),
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