export const config = {
  runtime: "edge",
};

export default function handler() {
  return new Response("EDGE OK", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
