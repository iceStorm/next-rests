import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { NextIncomingMessage } from "next/dist/server/request-meta"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // get temporary GitHub code... (remains in 10 minutes)
    // const code = req.query["code"]

    // exchange the code for an access token:
    // const oauthResult = await axios.post(
    //     "https://github.com/login/oauth/access_token",
    //     {
    //         client_id: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
    //         client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    //         code,
    //     },
    //     {
    //         // headers: {
    //         //     Accept: "application/json",
    //         // },
    //     }
    // )

    res.status(200).json({ code: 'google' })
}
