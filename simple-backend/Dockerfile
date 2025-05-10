FROM node:14-alpine

WORKDIR /usr/src/app

# install deps
COPY package*.json ./
RUN npm install --only=production

# copy source
COPY . .

EXPOSE 3000
CMD ["node", "src/app.js"]
