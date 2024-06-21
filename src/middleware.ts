// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Add other protected routes if needed
const protectedRoutes = ["/dashboard", "/profile"];

export default withAuth(
  function middleware(req) {
    const url = req.nextUrl.pathname;
    const token: any = req?.nextauth?.token;

    // Check if the user is authenticated
    const isAuthenticated = !!token;

    if (isAuthenticated) {
      if (req.nextUrl.pathname.startsWith("/api/auth/session")) {
        console.log("user url on session");
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    // Redirect unauthenticated users to the login page if trying to access protected routes
    if (
      !isAuthenticated &&
      protectedRoutes.some((path) => url.startsWith(path))
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login",
    },
  }
);
