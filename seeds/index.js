const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const random150 = Math.floor(Math.random() * 150);
        const price = Math.floor(Math.random() * 5000) + 10;
        const camp = new Campground({
            //YOUR USER ID
            
            author:"60572b7848dd9a47902bc620",


            location: `${cities[random150].city}, ${cities[random150].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random150].lng,
                    cities[random150].lat,
                ]
            },
            images: [
                {
                    url:'https://res.cloudinary.com/vishesh08/image/upload/v1616401584/YelpCamp/azwjcbsfxin0gttnyaqi.jpg',

                    filename:'YelpCamp/azwjcbsfxin0gttnyaqi'


                },
                {
                    url:'https://res.cloudinary.com/vishesh08/image/upload/v1617596087/YelpCamp/iu8v5vogpyf6ydv7xmlk.jpg',
                    filename:'YelpCamp/iu8v5vogpyf6ydv7xmlk'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})