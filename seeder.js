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
        { emotion: 'happy', category: 'city', name: 'Disneyland, California, USA', province: 'california', country: 'usa', city: 'Disneyland', img: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/800/450/90/media/disneyparksjapan-prod/disneyparksjapan_v0001/1/media/dlr/your-happiest-place-disney/0714ZO_0489SD_DZ_r2_16x9.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.8144914260847!2d-117.9215491238161!3d33.812091773248255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e1!3m2!1sen!2sde!4v1721903621907!5m2!1sen!2sde` },
        { emotion: 'happy', category: 'city', name: 'Paris, Île-de-France, France', province: 'île-de-france', country: 'france', city: 'Paris', img: 'https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/life-in-city-images/paris-france-gallery-2.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96030.06993431026!2d2.264634995173399!3d48.85882549242685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e1!3m2!1sen!2sde!4v1721903799924!5m2!1sen!2sde` },
        { emotion: 'happy', category: 'city', name: 'Barcelona, Catalonia, Spain', province: 'catalonia', country: 'spain', city: 'Barcelona', img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/04/26/269508.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109499.25282812856!2d2.0577887244742743!3d41.39263855836751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e1!3m2!1sen!2sde!4v1721903857759!5m2!1sen!2sde` },
    
        // Happy - Beach
        { emotion: 'happy', category: 'beach', name: 'Bora Bora, French Polynesia', province: 'bora bora', country: 'french polynesia', city: 'Bora Bora', img: 'https://www.tahiti.com/images1/thumbs/BOBPBR-aerial7-1200x720.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69973.47425885421!2d-151.77984881722094!3d-16.504419965248385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbd188a4a98ab%3A0x160a089e92d5ce61!2sBora%20Bora!5e1!3m2!1sen!2sde!4v1721903905423!5m2!1sen!2sde` },
        { emotion: 'happy', category: 'beach', name: 'Maui, Hawaii, USA', province: 'hawaii', country: 'usa', city: 'Maui', img: 'https://one-million-places.com/wp-content/uploads/2015/hawaii/maui-tauchen-01.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272890.62921281904!2d-156.50279233612258!3d20.802917053853562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79552b4acc4c61dd%3A0xcc43e741dc113e7f!2sMaui!5e1!3m2!1sen!2sde!4v1721903963658!5m2!1sen!2sde` },
        { emotion: 'happy', category: 'beach', name: 'Maldives, Maldives', province: 'maldives', country: 'maldives', city: 'Maldives', img: 'https://afar.brightspotcdn.com/dims4/default/dd4ced2/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4663873.631244438!2d70.59871165089955!3d3.108797620590664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e1!3m2!1sen!2sde!4v1721904057525!5m2!1sen!2sde` },
    
        // Happy - Nature
        { emotion: 'happy', category: 'nature', name: 'Santorini, South Aegean, Greece', province: 'south aegean', country: 'greece', city: 'Santorini', img: 'https://miro.medium.com/v2/resize:fit:1400/1*C8D-izPa921qGSjKAC3ogA.jpeg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117472.2128482771!2d25.338230254355295!3d36.40712554640126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce86adfd9ff7%3A0xb2a761f740d68afc!2sSantorini!5e1!3m2!1sen!2sde!4v1721904144674!5m2!1sen!2sde` },
        { emotion: 'happy', category: 'nature', name: 'Rio de Janeiro, Brazil', province: 'rio de janeiro', country: 'brazil', city: 'Rio de Janeiro', img: 'https://i.pinimg.com/originals/88/d9/00/88d9000853409fd37ca5b0261ce5bdc1.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268886.1611997776!2d-43.61079145487662!3d-22.914045743026644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20State%20of%20Rio%20de%20Janeiro%2C%20Brazil!5e1!3m2!1sen!2sde!4v1721904208220!5m2!1sen!2sde` },
        { emotion: 'happy', category: 'nature', name: 'Kyoto, Japan', province: 'kyoto', country: 'japan', city: 'Kyoto', img: 'https://media.shermanstravel.com/952x460_kyoto_istock.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238841.27321815!2d135.55406177189707!3d35.098084694240896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e1!3m2!1sen!2sde!4v1721904300615!5m2!1sen!2sde` },
    
        // Sad - City
        { emotion: 'sad', category: 'city', name: 'Cotswolds, South West, England', province: 'south west', country: 'england', city: 'Cotswolds', img: 'https://media.istockphoto.com/id/177096616/de/foto/traditionelle-cotswold-village-england.jpg?s=612x612&w=0&k=20&c=y_HUgnmnUGl1Py9OP5nRIrj_5QG_p0Hs4RHvoqF5Kgw=', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723313.0591680884!2d-2.5728243808227824!3d51.72467753057116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713cffa23f0605%3A0x168c89ba4309ff2a!2sCotswolds%2C%20UK!5e1!3m2!1sen!2sde!4v1721904365059!5m2!1sen!2sde` },
        { emotion: 'sad', category: 'city', name: 'Tuscany, Italy', province: 'tuscany', country: 'italy', city: 'Tuscany', img: 'https://cdn.contexttravel.com/image/upload/w_1500,q_60/v1637596147/blog/Tuscany%20Itinerary:%206%20Fully%20Planned%20Days%20with%20Context/tuscany_itinerary_hero.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698289.7195598746!2d9.709990072725386!3d43.34761477818472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d42b531080347b%3A0xbac6c3ba5b2059ab!2sTuscany%2C%20Italy!5e1!3m2!1sen!2sde!4v1721904430824!5m2!1sen!2sde` },
        { emotion: 'sad', category: 'city', name: 'Mendocino, California, USA', province: 'california', country: 'usa', city: 'Mendocino', img: 'https://media.audleytravel.com/-/media/images/home/canada-and-the-usa/usa/places/istock_70194807_usa_mendocino_california_1028664_letterbox.jpg?q=79&w=1920&h=685', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28232.950584839185!2d-123.84673460357658!3d39.31151068484219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8081b26b3c56eb33%3A0xd60f97f241c0b33b!2sMendocino%2C%20CA%2C%20USA!5e1!3m2!1sen!2sde!4v1721904496973!5m2!1sen!2sde` },
    
        // Sad - Beach
        { emotion: 'sad', category: 'beach', name: 'Fiji', province: 'fiji', country: 'fiji', city: 'Fiji', img: 'https://foundtheworld.com/wp-content/uploads/2014/12/Fiji.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8953499.15259013!2d174.16713493306776!3d-16.571336780395427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e1990fd703cdc5d%3A0x9e9c319946ef5b93!2sFiji!5e1!3m2!1sen!2sde!4v1721904557913!5m2!1sen!2sde` },
        { emotion: 'sad', category: 'beach', name: 'Seychelles, Praslin', province: 'praslin', country: 'seychelles', city: 'Praslin', img: 'https://www.planetware.com/wpimages/2023/01/seychelles-top-rated-beaches-intro-paragraph-anse-lazio-praslin.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72772.59647726054!2d55.693032194613274!3d-4.325058436080063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x231fee20482dda55%3A0xb7c651edb5e9ea2d!2sPraslin!5e1!3m2!1sen!2sde!4v1721904718830!5m2!1sen!2sde` },
        { emotion: 'sad', category: 'beach', name: 'Maldives', province: 'maldives', country: 'maldives', city: 'Maldives', img: 'https://media-cdn.tripadvisor.com/media/photo-s/28/b5/c1/a7/water-villa-aerial.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4663873.631244438!2d70.59871165089955!3d3.108797620590664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e1!3m2!1sen!2sde!4v1721904057525!5m2!1sen!2sde` },
    
        // Sad - Nature
        { emotion: 'sad', category: 'nature', name: 'Banff National Park, Alberta, Canada', province: 'alberta', country: 'canada', city: 'Banff National Park', img: 'https://i.natgeofe.com/n/b8ab1b48-40cc-4c24-8584-2c9af818b19b/02-banff-national-park-canada_3x2.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182374.45070948018!2d-115.913959415756!3d51.3370734332838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5377662b8c929195%3A0xc09de268accad7e6!2sBanff%20National%20Park!5e1!3m2!1sen!2sde!4v1721904854594!5m2!1sen!2sde` },
        { emotion: 'sad', category: 'nature', name: 'Iceland', province: 'iceland', country: 'iceland', city: 'Iceland', img: 'https://lp-cms-production.imgix.net/2020-11/500pxRF_66022803.jpg?w=1920&auto=format&q=75', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981719.893998854!2d-24.517430536384758!3d64.77081506088771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e1!3m2!1sen!2sde!4v1721904903930!5m2!1sen!2sde` },
        { emotion: 'sad', category: 'nature', name: 'Lake District, North West, England', province: 'north west', country: 'england', city: 'Lake District', img: 'https://media.timeout.com/images/106068187/750/422/image.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169829.44705948193!2d-3.147113516750283!3d54.425313547173104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c9526cec17a19%3A0xad3b72a75b00fe8e!2sLake%20District!5e1!3m2!1sen!2sde!4v1721905031177!5m2!1sen!2sde` },
    
        // Angry - City
        { emotion: 'angry', category: 'city', name: 'Kyoto, Japan (Zen Gardens)', province: 'kyoto', country: 'japan', city: 'Kyoto', img: 'https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2021/03/f9n964.webp', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238841.27321815!2d135.55406177189707!3d35.098084694240896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e1!3m2!1sen!2sde!4v1721905078873!5m2!1sen!2sde` },
        { emotion: 'angry', category: 'city', name: 'Queenstown, Otago, New Zealand (Adventure Sports)', province: 'otago', country: 'new zealand', city: 'Queenstown', img: 'https://content.api.news/v3/images/bin/d98f3bd9a54430406233327772466263', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103215.64409906368!2d168.61739864759332!3d-44.99681632392758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2sQueenstown%2C%20New%20Zealand!5e1!3m2!1sen!2sde!4v1721905140205!5m2!1sen!2sde` },
        { emotion: 'angry', category: 'city', name: 'Amsterdam, North Holland, Netherlands', province: 'north holland', country: 'netherlands', city: 'Amsterdam', img: 'https://www.holland.com/upload_mm/2/3/6/75601_fullimage_aerial%20view%20of%20downtown%20amsterdam%2C%20the%20netherlands%20during%20a%20dramatic%20beautiful%20sunset%20foto%20repistu%20via%20istock.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89148.83967887018!2d4.821560583996034!3d52.35463699514506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e1!3m2!1sen!2sde!4v1721905179873!5m2!1sen!2sde` },
    
        // Angry - Beach
        { emotion: 'angry', category: 'beach', name: 'Bondi Beach, New South Wales, Australia', province: 'new south wales', country: 'australia', city: 'Bondi Beach', img: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-dv802147_super.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.2545515935176!2d151.2755035261869!3d-33.892367173217444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ad9c447281c7%3A0x20c31809c62de978!2sBondi%20Beach!5e1!3m2!1sen!2sde!4v1721905224501!5m2!1sen!2sde` },
        { emotion: 'angry', category: 'beach', name: 'Gold Coast, Queensland, Australia', province: 'queensland', country: 'australia', city: 'Gold Coast', img: 'https://www.gold-coast.net/wp-content/uploads/2022/04/Gold-Coast-Beaches.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257861.22060619923!2d153.2045526304477!3d-27.954123451557866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911a472b5d60b7%3A0x302a35af3deaf70!2sGold%20Coast%20QLD%2C%20Australia!5e1!3m2!1sen!2sde!4v1721905262140!5m2!1sen!2sde` },
        { emotion: 'angry', category: 'beach', name: 'Nha Trang, Khánh Hòa, Vietnam', province: 'khánh hòa', country: 'vietnam', city: 'Nha Trang', img: 'https://bcp.cdnchinhphu.vn/344443456812359680/2022/12/27/nhattrang3-16721128389061596602579.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142632.37229459235!2d109.16410070637858!3d12.259457855036993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170677811cc886f%3A0x5c4bbc0aa81edcb9!2zTmhhIFRyYW5nLCBLaMOhbmggSMOyYSwgVmlldG5hbQ!5e1!3m2!1sen!2sde!4v1721905300267!5m2!1sen!2sde` },
    
        // Angry - Nature
        { emotion: 'angry', category: 'nature', name: 'Iceland (Hot Springs)', province: 'iceland', country: 'iceland', city: 'Iceland', img: 'https://e498rczdjg6.exactdn.com/wp-content/uploads/2020/04/Optimized-Laugavallalaug.jpeg?strip=all&lossy=1&ssl=1', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981719.893998854!2d-24.517430536384758!3d64.77081506088771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e1!3m2!1sen!2sde!4v1721905369785!5m2!1sen!2sde` },
        { emotion: 'angry', category: 'nature', name: 'Himalayas, Annapurna Region, Nepal (Trekking)', province: 'annapurna region', country: 'nepal', city: 'Annapurna Region', img: 'https://www.geodiscoverytours.com/wp-content/uploads/2021/09/Annapurna-Region-in-Nepal-1.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27000234.29841758!2d-39.18202284490047!3d43.73137499741718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a11d72767d77e7%3A0xfa42a61add96a781!2sAnnapurna%20Umrundung%20Trekking!5e1!3m2!1sen!2sde!4v1721905556535!5m2!1sen!2sde` },
        { emotion: 'angry', category: 'nature', name: 'Patagonia, Santa Cruz, Argentina', province: 'santa cruz', country: 'argentina', city: 'Patagonia', img: 'https://www.exoticca.com/uk/magazine/wp-content/uploads/2021/06/perito-moreno-BLOG-patagonia.png', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6119319.558036606!2d-74.91419195031524!3d-49.07515025014954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb6fbfdc37f535f%3A0xe4b90d77fdc8237c!2sSanta%20Cruz%20Province%2C%20Argentina!5e1!3m2!1sen!2sde!4v1721905621465!5m2!1sen!2sde` },
    
        // Anxious - City
        { emotion: 'anxious', category: 'city', name: 'San Francisco, California, USA', province: 'california', country: 'usa', city: 'San Francisco', img: 'https://cdn.businessinsider.de/wp-content/uploads/2019/05/image-2019-05-29.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57698.86306660755!2d-122.4787995002295!3d37.757692829110034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e1!3m2!1sen!2sde!4v1721905669056!5m2!1sen!2sde` },
        { emotion: 'anxious', category: 'city', name: 'Hong Kong', province: 'hong kong', country: 'hong kong', city: 'Hong Kong', img: 'https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Hong-Kong/Hong-Kong-city/112086_SCN_HongKong_iStock466733790_Z8C705.jpg?tr=w-1200%2Cfo-auto', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269986.91440165986!2d113.9745905315839!3d22.352640877566714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong%20Kong!5e1!3m2!1sen!2sde!4v1721905710056!5m2!1sen!2sde` },
        { emotion: 'anxious', category: 'city', name: 'Sydney, New South Wales, Australia', province: 'new south wales', country: 'australia', city: 'Sydney', img: 'https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_1280,c_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484893.64957713545!2d150.60233298435753!3d-33.84780528585462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e1!3m2!1sen!2sde!4v1721905808508!5m2!1sen!2sde` },
    
        // Anxious - Beach
        { emotion: 'anxious', category: 'beach', name: 'Bali, Indonesia', province: 'bali', country: 'indonesia', city: 'Bali', img: 'https://media.cntraveler.com/photos/6400e9ec3b1e3f0df75c5c44/16:9/w_2580,c_limit/Green%20Bowl%20Beach,%20Bali,%20Indonesia_2AGYRXP.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577497.4985726783!2d114.7419238135445!3d-8.455333472062913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e1!3m2!1sen!2sde!4v1721905850502!5m2!1sen!2sde` },
        { emotion: 'anxious', category: 'beach', name: 'Cancun, Quintana Roo, Mexico', province: 'quintana roo', country: 'mexico', city: 'Cancun', img: 'https://images.odigoo.com/cb6a1e9c-21c6-4165-9ba7-db9263d832a1/images/posts/everything-about-beaches-in-cancun/webp/meta-everything-about-beaches-in-cancun-ghss.webp', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136155.07891364346!2d-86.9388049634462!3d21.121378332736622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b05aef653db%3A0xce32b73c625fcd8a!2sCanc%C3%BAn%2C%20Quintana%20Roo%2C%20Mexico!5e1!3m2!1sen!2sde!4v1721905895607!5m2!1sen!2sde` },
        { emotion: 'anxious', category: 'beach', name: 'Amalfi Coast, Campania, Italy', province: 'campania', country: 'italy', city: 'Amalfi Coast', img: 'https://www.celebritycruises.com/blog/content/uploads/2022/08/amalfi-coast-beaches-minori-beach-minori--1024x652.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1730.7577783850763!2d14.601491588950928!3d40.63339964285143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b95adc34c71a1%3A0x4ce8cf14c94f4cdc!2sAmalfi%20Coast!5e1!3m2!1sen!2sde!4v1721905943161!5m2!1sen!2sde` },
    
        // Anxious - Nature
        { emotion: 'anxious', category: 'nature', name: 'Sedona, Arizona, USA', province: 'arizona', country: 'usa', city: 'Sedona', img: 'https://www.pinkadventuretours.com/Media/2872/scenic-sedona-sunset-600x400.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59888.26765879208!2d-111.83633797997118!3d34.854371453310684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2sSedona%2C%20AZ%2086336%2C%20USA!5e1!3m2!1sen!2sde!4v1721906011655!5m2!1sen!2sde` },
        { emotion: 'anxious', category: 'nature', name: 'Big Sur, California, USA', province: 'california', country: 'usa', city: 'Big Sur', img: 'https://images.squarespace-cdn.com/content/v1/526f5bfce4b0c67dab63847d/54013157-bc1c-40b5-80f6-529b5fde5652/Scott-Davenport-US-California-Big-Sur-Area-2022-04-13-0279-Staircase+And+Bridge+On+Pfeiffer+Falls+Trail.jpg?format=1500w', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235172.92646373695!2d-121.98298666826616!3d36.331494819652235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de8a7780e4d77%3A0x37e8d859caefac61!2sBig%20Sur%2C%20CA%2C%20USA!5e1!3m2!1sen!2sde!4v1721906048845!5m2!1sen!2sde` },
        { emotion: 'anxious', category: 'nature', name: 'Swiss Alps, Canton of Bern, Switzerland', province: 'canton of bern', country: 'switzerland', city: 'Swiss Alps', img: 'https://w0.peakpx.com/wallpaper/25/579/HD-wallpaper-swiss-alps-river-switzerland-alps-hill.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12545.212324826996!2d8.550778375550777!3d46.56010508780602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478576eb2f97f733%3A0x41140a31bc0c273!2sSwiss%20Alps!5e1!3m2!1sen!2sde!4v1721906099404!5m2!1sen!2sde` },
    
        // Bored - City
        { emotion: 'bored', category: 'city', name: 'New York, USA', province: 'new york', country: 'usa', city: 'New York City', img: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442651.54495919513!2d-74.30931762486182!3d40.69701931501766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sde!4v1721906141614!5m2!1sen!2sde` },
        { emotion: 'bored', category: 'city', name: 'Las Vegas, Nevada, USA', province: 'nevada', country: 'usa', city: 'Las Vegas', img: 'https://travelnevada.com/wp-content/uploads/2020/09/Vegas_Featured.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235795.0540097358!2d-115.33980750383783!3d36.12488712724228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e1!3m2!1sen!2sde!4v1721906185732!5m2!1sen!2sde` },
        { emotion: 'bored', category: 'city', name: 'Tokyo, Japan', province: 'tokyo', country: 'japan', city: 'Tokyo', img: 'https://media.nomadicmatt.com/2024/tokyothings.jpeg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950543.8326241565!2d139.110429454682!3d35.50744647831156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e1!3m2!1sen!2sde!4v1721906221264!5m2!1sen!2sde` },
    
        // Bored - Beach
        { emotion: 'bored', category: 'beach', name: 'Maldives', province: 'maldives', country: 'maldives', city: 'Maldives', img: 'https://imgcdn.flamingotravels.co.in/Images/PlacesOfInterest/bioluminescent-beach-maldives.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4663873.631244438!2d70.59871165089955!3d3.108797620590664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e1!3m2!1sen!2sde!4v1721906260873!5m2!1sen!2sde` },
        { emotion: 'bored', category: 'beach', name: 'Bora Bora, French Polynesia', province: 'bora bora', country: 'french polynesia', city: 'Bora Bora', img: 'https://366e203a.rocketcdn.me/wp-content/uploads/2019/08/Maldives.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69973.47425885421!2d-151.77984881722094!3d-16.504419965248385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbd188a4a98ab%3A0x160a089e92d5ce61!2sBora%20Bora!5e1!3m2!1sen!2sde!4v1721906304238!5m2!1sen!2sde` },
        { emotion: 'bored', category: 'beach', name: 'Maui, Hawaii, USA', province: 'hawaii', country: 'usa', city: 'Maui', img: 'https://windows10spotlight.com/wp-content/uploads/2024/03/88272f3af2e36a0f1ff088742c7c9906.jpg', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272890.62921281904!2d-156.50279233612258!3d20.802917053853562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79552b4acc4c61dd%3A0xcc43e741dc113e7f!2sMaui!5e1!3m2!1sen!2sde!4v1721906337508!5m2!1sen!2sde` },
    
        // Bored - Nature
        { emotion: 'bored', category: 'nature', name: 'Grand Canyon, Arizona, USA', province: 'arizona', country: 'usa', city: 'Grand Canyon', img: 'https://npf-prod.imgix.net/uploads/shutterstock_97706066_1.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=900&q=80&w=1600', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59008.07125094925!2d-112.19328561801191!3d36.045833852530976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8733174f95ffe325%3A0xb8ccc2749a229ea1!2sGrand%20Canyon%20Village%2C%20AZ%2086023%2C%20USA!5e1!3m2!1sen!2sde!4v1721906405959!5m2!1sen!2sde` },
        { emotion: 'bored', category: 'nature', name: 'Yellowstone National Park, Wyoming, USA', province: 'wyoming', country: 'usa', city: 'Yellowstone National Park', img: 'https://www.visittheusa.de/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/Yellowstone.jpg?h=2a29b199&itok=OpHn5jav', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831653.8145259059!2d-111.17340753696816!3d44.58389838313212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5351e55555555555%3A0xaca8f930348fe1bb!2sYellowstone%20National%20Park!5e1!3m2!1sen!2sde!4v1721906450944!5m2!1sen!2sde` },
        { emotion: 'bored', category: 'nature', name: 'Yosemite National Park, California, USA', province: 'california', country: 'usa', city: 'Yosemite National Park', img: 'https://i.natgeofe.com/n/f14f6c30-8d11-4e33-a5e9-05f1b50bdde3/yosemite-national-park-california_16x9.jpg?w=1200', location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13419340.523909409!2d-121.07870731703866!3d44.08856490410992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20National%20Park!5e1!3m2!1sen!2sde!4v1721906539773!5m2!1sen!2sde` }
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