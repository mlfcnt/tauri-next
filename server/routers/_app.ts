import { z } from "zod";
import { procedure, router } from "../trpc";
import os from "os";
export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Salut ${input.text}`,
        osInfo: {
          hostname: os.hostname(),
          cpus: os.cpus(),
          uptime: os.uptime(),
        },
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
