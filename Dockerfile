FROM ubuntu:focal

EXPOSE 3000
WORKDIR /usr/app
CMD ["npm", "start"]

RUN apt-get update && apt-get install -y curl wget build-essential

RUN curl -fsSL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get update && apt-get install -y nodejs git
RUN npm install -g npm@7.11.2

COPY package.json /usr/app/
RUN npm install -g node-gyp node-pre-gyp
RUN npm install -f