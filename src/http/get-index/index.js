exports.handler = async function products() {
  return {
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
  };
};
