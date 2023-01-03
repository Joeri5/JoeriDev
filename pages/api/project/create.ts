import {NextApiRequest, NextApiResponse} from "next";
import {spring} from "../../_app";
import {getSession} from "next-auth/react";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await spring.post("/v1/project", req.body, {
        headers: {
            Authorization: `Bearer ${await getSession({req}).then(session => session?.user.accessToken)}`
        }
    });
    res.status(response.status).json(response.data);
}
