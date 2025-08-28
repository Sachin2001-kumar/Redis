const express = require("express");
const axios = require("axios");
const client = require("./client");

const app = express();

app.get("/", async (req, res) => {
  try {
    const cacheValue = await client.get("todos");
    if (cacheValue) {
      // Send response immediately from cache
      return res.json(JSON.parse(cacheValue));
    }

    // If no cache, fetch from API
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // Save to Redis with 30s expiry
    await client.set("todos", JSON.stringify(data));
    await client.expire("todos", 30);

    return res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
