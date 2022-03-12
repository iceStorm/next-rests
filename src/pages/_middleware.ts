import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
import i18n from "src/locales"

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // i18n.changeLanguage(req.nextUrl.locale)
    // console.log("locale:", i18n.language)

    return NextResponse.next()
}
