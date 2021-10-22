FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install --global --unsafe-perm serve
COPY . .
run npm run build
EXPOSE 5000
CMD [ "npm", "start"]
