const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

const response = {
  headers: {
    "content-type": "application/json; charset=utf8",
    "cache-control":
      "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    "Access-Control-Allow-Origin": "*",
  },
};

const getErrorResponse = (name) => ({
  ...response,
  statusCode: 500,
  body: JSON.stringify({
    errors: [{ name }],
  }),
});

exports.handler = async function products(req) {
  if (!STRIPE_SECRET_KEY) {
    return getErrorResponse("Missing Stripe Key");
  }

  try {
    const products = await stripe.products.list({ limit: 100 });
    return {
      ...response,
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return getErrorResponse(error.message);
  }
};
