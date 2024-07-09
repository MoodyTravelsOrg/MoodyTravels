import Recommendation from "../models/Recommendation";

export async function getRecommendations(req, res) {
    const recommendations = await Recommendation.find();
    res.status(200).json(recommendations);
}

// if we work with an api
/* export async function getDestination(req, res) {
    const response = await fetch(`insert-api-here${req.params.destination}`);
    const result = await response.json();
    res.status(200).json(result);
} */

