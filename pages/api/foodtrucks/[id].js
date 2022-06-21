import foodtrucks from "../../../public/data/foodtrucks/catalog.json";
export default function handler(req, res) {
    res.status(200).json(
        foodtrucks.catalog.filter((item) => item.id.toString() === req.query.id)
    );
}
