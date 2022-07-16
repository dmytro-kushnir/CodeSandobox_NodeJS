import express from "express";
import { print } from "./modules/stream_iterator.mjs";
import { tickTest } from "./modules/event_loop_tick_test.mjs";
const app = express();

app.get("/", async (req, res) => {
  await tickTest();
  await print("README.md");
  res.send("hello");
});

app.listen(8080);
