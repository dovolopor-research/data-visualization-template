FROM node:18.19.0-alpine as builder

WORKDIR /app/

COPY package.json /app/
COPY pnpm-lock.yaml /app/

RUN npm install pnpm -g --registry=https://registry.npmmirror.com
RUN pnpm install --registry=https://registry.npmmirror.com

COPY ./ /app/

RUN npm run build

FROM nginx:1.25.4-alpine as runner

WORKDIR /usr/share/nginx/html/

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
