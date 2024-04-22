import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/foo"],
};

export default function middleware({ nextUrl, headers }: NextRequest) {
  const url = new URL(nextUrl);
  url.hostname = "127.0.0.1";
  url.port = "4000";

  // localhost:3000. Seems this header is ignored.
  console.log(headers.get("host"));

  return NextResponse.rewrite(url, { headers });
}
