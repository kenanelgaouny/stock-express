# Stock-Express
A simple Dockerized Express REST service that can provide the current price of a stock. A kb.yml is also provided for deployment to a Kubernetes cluster.
- Uses the AlphaVantage API to retrieve the current price of a stock

## Usage
 - Obtain an api-key from AlphaVantage: https://www.alphavantage.co/
 - Insert your api-key into the dockerfile
 - Build the docker image, and run it
 - you can obtain a stock's price form the browser using the endpoint `http://localhost:9000/stock/<symbol>`
 - i.e `http://localhost:9000/stock/TSLA`
 - The `http.rest` file can also be used to call the api directly using vs code's rest client extension. 
 
## Deploying the service to Kubernetes
 - Run `kubectl apply -f kb.yml`
 - Service stock-express will be created on the cluster
 - it can be accessed using `http:/<node-ip>:3001/stock/<symbol>`
