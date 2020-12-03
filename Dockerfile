FROM node:12

WORKDIR /usr/src/app

ADD . /usr/src/app


RUN npm i



EXPOSE 3000


CMD [ "node","index.js" ]