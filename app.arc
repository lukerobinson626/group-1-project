@app
begin-with-stripe

@http
get /
get /products
get /prices
post /checkout-session
options /checkout-session

@static
