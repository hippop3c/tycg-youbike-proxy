export const config = {
  runtime: "edge",
};

export default async function handler() {
  const res = await fetch(
    "https://data.tycg.gov.tw/api/v1/rest/datastore/5ca2bfc7-9ace-4719-88ae-4034b9a5a55c"
  );

  const text = await res.text();

  return new Response(text, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
