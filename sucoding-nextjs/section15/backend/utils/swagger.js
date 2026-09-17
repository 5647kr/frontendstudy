const swaggerJSDoc = require("swagger-jsdoc");

const PORT = process.env.PORT || 4000;
const BASE_URL = process.env.SWAGGER_BASE_URL || `http://localhost:${PORT}`;

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Final Blog API",
      version: "1.0.0",
      description: "Swagger docs for Final Blog API",
    },
    servers: [{ url: BASE_URL }],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Error: {
          type: "object",
          properties: {
            error: { type: "string" },
          },
        },
        User: {
          type: "object",
          properties: {
            id: { type: "string" },
            kakaoId: { type: "string", nullable: true },
            email: { type: "string", nullable: true },
            nickname: { type: "string" },
            profileImage: { type: "string", nullable: true },
          },
        },
        AuthTokens: {
          type: "object",
          properties: {
            accessToken: { type: "string" },
          },
        },
        Comment: {
          type: "object",
          properties: {
            _id: { type: "string" },
            content: { type: "string" },
            author: {
              oneOf: [
                { type: "string" },
                {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    nickname: { type: "string" },
                    profileImage: { type: "string", nullable: true },
                  },
                },
              ],
            },
            createdAt: { type: "string", format: "date-time" },
          },
        },
        Post: {
          type: "object",
          properties: {
            _id: { type: "string" },
            title: { type: "string" },
            category: { type: "string" },
            thumbnail: { type: "string", nullable: true },
            content: { type: "string" },
            author: {
              oneOf: [
                { type: "string" },
                {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    nickname: { type: "string" },
                    profileImage: { type: "string", nullable: true },
                  },
                },
              ],
            },
            comments: { type: "array", items: { $ref: "#/components/schemas/Comment" } },
            viewCount: { type: "number" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        Pagination: {
          type: "object",
          properties: {
            totalCount: { type: "number" },
            currentPage: { type: "number" },
            perPage: { type: "number" },
            maxPage: { type: "number" },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJSDoc(options);
