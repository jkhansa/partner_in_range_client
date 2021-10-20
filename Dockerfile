FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
run npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
