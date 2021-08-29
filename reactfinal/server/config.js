const Joi = require("joi");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const config = {
  client_id: 'e6e3ad17f46dd71c1fc4',
  redirect_uri: 'http://localhost:3000/login',
  client_secret: 'ba0f5a260bec5194d1acd48285b185259a3fa212',
  proxy_url: 'http://localhost:5000/authenticate'
};

const envVarsSchema = Joi.object({
  client_id: Joi.string().required(),
  redirect_uri: Joi.string().required(),
  client_secret: Joi.string().required(),
  proxy_url: Joi.string().required()
});

const { error } = envVarsSchema.validate(config);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;
