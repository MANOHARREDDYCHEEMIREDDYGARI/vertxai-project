# Use Node.js LTS image
FROM node:20

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Your app binds to port 5000
EXPOSE 5000

# Run the app
CMD ["npm", "start"]
