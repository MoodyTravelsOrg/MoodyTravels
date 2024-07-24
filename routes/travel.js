import express from "express";
import { /* getDestination, */ getRecommendations } from "../controllers/travelController.js";
import fetch from 'node-fetch';

const router = express.Router();

router.get("/", getRecommendations);





// routes to get destination services

// helper function to fetch
/* const fetchFromAPI = async (url, options = {}) => {
    try {
        const response = await fetch(url, { method: 'GET', ...options });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error ${response.status}: ${response.statusText} - ${errorData.message}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
}; */

// Route to handle GET requests with a request body

// "http://localhost:4000/travel/getTravelService"
/* router.post("/getTravelService", async (req, res) => {
    try {
        const { destinationName, topic } = req.body;

        let url;
        switch (topic) {
            case "country-information":
                // URL for getting country information using RestCountries
                url = `https://restcountries.com/v3.1/name/${destinationName}`;
                break;
            case "flights": // not working
                // URL for getting flights using Skyscanner via RapidAPI
                url = `https://skyscanner44.p.rapidapi.com/search-flights?destination=${destinationName}`;
                break;
            case "accommodation": // partly working
                // URL for getting accommodation using Hotellook
                url = `https://engine.hotellook.com/api/v2/lookup.json?query=${destinationName}`;
                break;
            case "guides": // not working
                // Placeholder URL for getting guides
                url = `https://api.example.com/guides?destination=${destinationName}`;
                break;
            case "things-to-do": // not working
                // URL for things to do using OpenTripMap
                url = `https://api.opentripmap.com/0.1/en/places/geoname?name=${destinationName}&apikey=5ae2e3f221c38a28845f05b611a5446e0d96f096ac53e2e1`;
                break;
            default:
                return res.status(400).json({ error: 'Invalid topic' });
        }


        const data = await fetchFromAPI(url);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}); */


export default router;