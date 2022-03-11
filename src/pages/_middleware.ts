import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // console.log(req.nextUrl.locale)

    return NextResponse.next()
    return new Response("Hello, world!")
}
