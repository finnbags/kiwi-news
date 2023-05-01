import { createTRPCRouter } from "~/server/api/trpc";

import { homeRouter } from "./routers/home";
import { newRouter } from "./routers/new";
import { postRouter } from "./routers/post";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  home: homeRouter,
  new: newRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
