const production = require('./prod');
const dev = require('./dev');

const env = process.env.NODE_ENV;

const config = {
  dev,
  production,
};

module.exports = config[env] || config.dev;
