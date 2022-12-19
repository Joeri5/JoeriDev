import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    name: string
    star: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({name: '', star: 0})
}
