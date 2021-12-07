# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:lts-alpine as build-stage

RUN npm install -g @vue/cli

WORKDIR /app

COPY ./ /app/

RUN npm install

RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
