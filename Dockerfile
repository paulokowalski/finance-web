FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]