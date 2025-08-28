const client = require("./client");

async function init() {
  const res5 = await client.lpush("bikes:repairs", "bike:1");
  console.log("LPUSH result:", res5);
  const res6 = await client.lpush("bikes", "1");
  console.log("LPUSH result:", res5);
  const res7 = await client.lpush("bikes", "1");
  console.log("LPUSH result:", res5);
  const res8 = await client.lpush("bikes", "hey");
  console.log("LPUSH result:", res5);
  const res9 = await client.lpush("bikes", "hello");
  console.log("LPUSH result:", res5);
  const res10 = await client.lpush(
    "bikes",
    "Hey there is something happening in india"
  );
  console.log("LPUSH result:", res5);
}

init();
