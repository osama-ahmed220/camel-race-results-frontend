FROM node:latest

# Create app directory
WORKDIR /camel-race-results

COPY ./package.json .

RUN yarn install --production

COPY ./build/ ./build/

ENV NODE_ENV production

RUN npm install -g serve

EXPOSE $PORT

CMD serve -p $PORT -s build