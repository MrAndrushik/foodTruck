import axios from "axios";

export async function sendEmail({ data }) {
    const POST_URL = "/api/mail";
    const res = await axios.post(POST_URL, { data });
}
