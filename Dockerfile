FROM node

WORKDIR /srv
ADD . .
RUN npm install

CMD ["node", "index.js"]
