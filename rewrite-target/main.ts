import { serve } from "@hono/node-server";
import { Hono } from "hono";

const port = 4000;
const app = new Hono();

app.get("/foo", (c) => {
  return c.text(
    [
      "Expected Host: localhost:3000",
      `Received Host: ${c.req.header("Host")}`,
    ].join("\n")
  );
});

serve({ fetch: app.fetch, port });
console.log(`Server is running on port ${port}`);
