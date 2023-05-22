// middleware.js
import {
  withClerkMiddleware,
  getAuth,
  clerkClient,
} from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export default withClerkMiddleware((req) => {
  const { userId } = getAuth(req);

  const getUserData = async (userId) => {
    const user = await clerkClient.users.getUser(userId);
    const emailAddress = user.emailAddresses[0].emailAddress;
  };

  if (userId) {
    getUserData(userId);
  }

  NextResponse.next();
});

// See "Matching Paths" below to learn more

export const config = {
  matcher: [
    "/iwc/introduction",
    "/mtb/introduction",
    "/vca/introduction",
    "/panerai/introduction",
  ],
};
