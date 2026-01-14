import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/api/tycg-youbike", async (req, res) => {
  try {
    const upstream = await fetch(
      "https://data.tycg.gov.tw/api/v1/rest/datastore/5ca2bfc7-9ace-4719-88ae-4034b9a5a55c"
    );

    const text = await upstream.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send(text);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.toString()
    });
  }
});

export default app;
