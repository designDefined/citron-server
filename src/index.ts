import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { env } from "./env.js";
import { bookPrefix, bookRouter } from "./service/book/book.router.js";
import { userPrefix, userRouter } from "./service/user/user.router.js";

const app = new Hono();
app.use(cors());

app.get("/", c => c.json({ message: "Hello, World!" }));
app.route(userPrefix, userRouter);
app.route(bookPrefix, bookRouter);

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  info => {
    console.log(
      `Server is running on http://localhost:${info.port.toString()}`,
    );
  },
);
