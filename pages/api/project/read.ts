import {NextApiRequest, NextApiResponse} from "next";
import {spring} from "../../_app";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await spring.get("/v1/project", req.body);
    res.status(response.status).json(response.data);
}
