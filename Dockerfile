FROM node:18-alpine
WORKDIR /app

# copy package.json first for layer caching
COPY package.json ./
RUN npm install --production

# copy app sources
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
