const env = process.env.NODE_ENV;

module.exports = env === 'production' ?
  require('./prod') : require('./dev');
