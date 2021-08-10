const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const REDIRECT_TO = process.env.REDIRECT_TO;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

const response = {
  cors: true,
  headers: {
    "content-type": "application/json; charset=utf8",
    "cache-control":
      "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    "Access-Control-Allow-Origin": "*",
  },
};

exports.handler = async function products(req) {
  if (!STRIPE_SECRET_KEY) {
    return {
      ...response,
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            name: "Missing Stripe Key",
          },
        ],
      }),
    };
  }

  if (!REDIRECT_TO) {
    return {
      ...response,
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            name: "Missing redirect URL",
          },
        ],
      }),
    };
  }

  // Create new Checkout Session for the order
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  try {
    const { quantity, priceId } = JSON.parse(req.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
      success_url: `${REDIRECT_TO}`,
      cancel_url: `${REDIRECT_TO}`,
    });

    return {
      ...response,
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    const { name, message } = error;
    return {
      ...response,
      statusCode: 500,
      body: JSON.stringify({
        errors: [{ name, message }],
      }),
    };
  }
};
