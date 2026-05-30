export async function onRequest(context) {
  const { request } = context;
  const cfRay    = request.headers.get("cf-ray") || "unknown";
  const colo     = request.cf?.colo    || "unknown";
  const country  = request.cf?.country || "unknown";
  const city     = request.cf?.city    || "unknown";

  return new Response(
    JSON.stringify({ ray: cfRay, colo, country, city,
      timestamp: new Date().toISOString() }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}