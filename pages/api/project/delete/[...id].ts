import {NextApiRequest, NextApiResponse} from "next";
import {spring} from "../../../_app";
import {getSession} from "next-auth/react";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;
    const response = await spring.delete(`/v1/project/${id}`, {
        headers: {
            Authorization: `Bearer ${await getSession({req}).then(session => session?.user.accessToken)}`
        }
    });
    console.log(response);
}
