FROM node:12
WORKDIR /usr/src/strongest_avenger
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "hulk.js"]
