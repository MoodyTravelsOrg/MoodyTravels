export async function getDestination(req, res) {
    const response = await fetch(`travelapi${req.params.destination}`);
    const result = await response.json();
    res.status(200).json(result);
}