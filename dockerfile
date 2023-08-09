FROM node AS builder
WORKDIR /app
COPY . .
RUN npm install

FROM node
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "run", "dev"]
