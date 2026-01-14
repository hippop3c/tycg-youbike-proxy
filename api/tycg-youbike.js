export const config = {
  runtime: "edge",
};

export default async function handler() {
  const upstream = await fetch(
    "https://data.tycg.gov.tw/api/v1/rest/datastore/5ca2bfc7-9ace-4719-88ae-4034b9a5a55c",
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*",
      },
    }
  );

  const body = await upstream.text();
  const contentType =
    upstream.headers.get("content-type") || "text/plain; charset=utf-8";

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": contentType, // ⚠️ 不要硬改成 application/json
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
    },
  });
}
