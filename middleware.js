import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/"], // Home page is public
  ignoredRoutes: ["/api(.*)"], // Ignore API routes
});

export const config = {
  matcher: ["/login"], // Protect only the login page
};
