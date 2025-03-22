# Use Node.js image for building React
FROM node:18-alpine AS build

# Set working directory
WORKDIR /frontend

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the files and build
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:alpine

# Copy built React files to Nginx
COPY --from=build /frontend/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
