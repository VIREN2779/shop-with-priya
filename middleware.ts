import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";

export function middleware(req: NextRequest) {
    if (!isAuthorized(req)) {
        return new NextResponse("Authentication required", {
            status: 401,
            headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
        });
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};