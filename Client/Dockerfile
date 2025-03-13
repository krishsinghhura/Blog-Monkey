FROM ubuntu

# Set working directory
WORKDIR /app

# Update package list and install required packages
RUN apt-get update && apt-get install -y curl nodejs npm build-essential python3

# Copy package files first (to leverage caching)
COPY package.json package-lock.json ./

# Reinstall dependencies
RUN npm install --force

# Copy the rest of the project files
COPY . .

# Expose the port
EXPOSE 5173  

# Start the application
CMD ["npm", "run","dev"]
