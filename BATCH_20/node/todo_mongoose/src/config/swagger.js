import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

export const openapiSpecification = swaggerJsdoc(options);
