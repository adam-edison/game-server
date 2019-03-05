FROM node:10.15.0-jessie
WORKDIR /usr/src/app

# copy both package.json and package-lock.json (if it exists)
COPY package*.json ./

# install application dependencies
RUN npm install --quiet

# keep docker container open without running the app initially
CMD ["npm", "run", "docker"]