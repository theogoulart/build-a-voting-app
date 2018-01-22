const prod = require('./prod');
const dev = require('./dev');

const env = process.env.NODE_ENV;

const config = {
  dev,
  prod,
};

module.exports = config[env] || config.dev;
