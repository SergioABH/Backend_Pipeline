const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const clienteRoutes = require("./routes/clienteRoutes");
const { PORT } = require('./config.js');

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Prueba API",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:8080/",
                description: "Entorno de desarrollo",
            },
            {
                url: "https://backend-istc.onrender.com/",
                description: "Entorno de producción",
              },
        ],
    },
    apis: ["./routes/clienteRoutes.js"],
};

const swaggerSpec = swaggerJsDoc(options);

const app = express();
app.use("/app-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

app.use("/", clienteRoutes);

app.listen(PORT)
console.log(`Server is running on port`, PORT)