# build environment
FROM node
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]

## production environment
FROM nginx:stable-alpine
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#docker run -p3000:3000 --name -d imagename