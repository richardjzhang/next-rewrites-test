import { NextRequest, NextResponse } from "next/server";

const rewritePaths = ["/foo"];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.next();
  }

  if (rewritePaths.some((prefix) => pathname.startsWith(prefix))) {
    console.log({ pathname });
    const url = new URL(req.nextUrl);
    url.hostname = "127.0.0.1";
    url.port = "4000";
    return NextResponse.rewrite(url, { headers: req.headers });
  }

  // remove trailing slash
  if (pathname.endsWith("/")) {
    const newPathname = pathname.slice(0, -1);
    return NextResponse.redirect(new URL(`${newPathname}`, req.nextUrl));
  }
}
