import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nexio Job Seeker API",
      version: "1.0.0",
      description: "Backend API documentation for Nexio platform",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "token",
        },
      },
    },
    security: [
        {
            cookieAuth: [],
        },
    ],
  },
  apis: ["./routes/*.js"], // Swagger reads route comments
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerSetup = (app) => {
  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      swaggerOptions: {
        withCredentials: true, // 🔑 REQUIRED
      },
    })
  );
};
