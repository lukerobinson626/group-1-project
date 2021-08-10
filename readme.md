# Begin with Stripe

This repository is used as a base for a Stripe API server as part of the final project for WDD01. It is an API built with [Begin](https://begin.com) to get products and start checkout sessions using Stripe

## Endpoints

- `GET products` - Responds with the [List all products](https://stripe.com/docs/api/products/list?lang=node) response from Stripe.
- `GET prices` - Responds with the [List all prices](https://stripe.com/docs/api/prices/list?lang=node) response from Stripe.
- `POST checkout-session` - Responds with a Session ID, obtained from [Create Session](https://stripe.com/docs/api/checkout/sessions/create).

  - Request body:

    ```json
    {
      "quantity": 2,
      "priceId": "price_12345"
    }
    ```

## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/lwcooper/01-begin-with-stripe-api-server)

Deploy your own clone of this app to Begin!

## Getting started

- Start the local dev server: `npm start`
- Lint your code: `npm run lint` (after you've installed a linter, of course)
- Run your tests: `npm t` (don't forget to write some!)

## Begin Reference

- [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
- [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!
