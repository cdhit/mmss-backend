FROM node:13.10.1-alpine
EXPOSE 3000

RUN mkdir /mm
WORKDIR /mm

ADD package.json .
ADD package-lock.json .
RUN npm ci

ADD . .

RUN npm i -g ts-node typescript
#RUN npm run migrate
RUN npm run build


CMD ["node", "dist/server.js"]

