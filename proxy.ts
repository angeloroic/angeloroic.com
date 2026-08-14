import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const canonicalHost = "angeloroic.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().split(":")[0];

  if (process.env.VERCEL_ENV === "production" && host?.endsWith(".vercel.app")) {
    const destination = request.nextUrl.clone();
    destination.protocol = "https:";
    destination.host = canonicalHost;

    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}
