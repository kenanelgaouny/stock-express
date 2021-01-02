FROM node:15.3.0-alpine3.12

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
RUN apk --update --no-cache upgrade

COPY --chown=node:node package*.json ./

USER node

RUN npm ci --production 
    
COPY --chown=node:node . ./

EXPOSE 9000
ENV API_KEY="your_alphavantage_api_key"
CMD ["node", "index.js"]