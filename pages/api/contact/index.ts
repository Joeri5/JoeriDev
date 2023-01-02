import {NextApiRequest, NextApiResponse} from 'next';
import {spring} from "../../_app";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await spring.post('/v1/contact', req.body);
    res.status(response.status).json(response.data);
}
