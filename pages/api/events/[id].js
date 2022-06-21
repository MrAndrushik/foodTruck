import events from "../../../public/data/events.json";
export default function handler(req, res) {
    res.status(200).json(
        events.filter((item) => item.id.toString() === req.query.id)
    );
}
