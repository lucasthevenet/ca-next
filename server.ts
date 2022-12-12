import { createServer } from "https";
import { parse } from "url";
import next from "next";
import { readFileSync } from "fs";

const port = parseInt(process.env.PORT || "3333", 10);
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const options = {
  requestCert: true,
  rejectUnauthorized: false,
  cert: readFileSync("server.crt"),
  key: readFileSync("server.key"),
  ca: readFileSync("ca.crt"),
};

app.prepare().then(() => {
  createServer(options, async (req, res) => {
    const parsedUrl = parse(req.url!, true);
    await handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
