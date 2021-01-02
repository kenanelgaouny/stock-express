import Express from "express";
import request from "request";
import lodash from "lodash";
const app = Express();
const port = 9000;
const api_key = process.env.API_KEY

app.get("/stock/:id", (req, res) => {
    var alpha_url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.params.id}&apikey=${api_key}`
    request.get({ url: alpha_url }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var jbody = JSON.parse(body);
            if (Object.entries(jbody["Global Quote"]).length != 0) {
                var cur_price = lodash.pickBy(jbody["Global Quote"], (value,key) => key.includes('price'));
                res.json({ "price": cur_price[Object.keys(cur_price)[0]]});
            } else {
                res.status(404).send(`Symbol ${req.params.id} not found!`)
            }

        } else{
            res.status(500).send(`could not reach alphavantage: ${error}`)
        }
    });
})
app.get("/health", (req, res) => {
    res.sendStatus(200)
})
app.listen(port)