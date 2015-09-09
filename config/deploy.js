/* jshint node: true */

require('dotenv').load();


module.exports = {
  development: {
    buildEnv: 'development', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      // type: 'redis', // the default store is 'redis'
      // host: 'localhost',
      // port: 6379
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      gzip: false, // if undefined or set to true, files are gziped
      gzipExtensions: ['js', 'css', 'svg'], // if undefined, js, css & svg files are gziped
      exclude: ['.DS_Store', '*-test.js'], // defaults to empty array
      // secretAccessKey: process.env['AWS_ACCESS_KEY'],
      bucket: 'businessdotcom-onboarding-index'
    }
  },

  staging: {
    buildEnv: 'staging', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      host: 'staging-redis.example.com',
      port: 6379
    },
    assets: {
      accessKeyId: '<your-access-key-goes-here>',
      secretAccessKey: process.env['AWS_ACCESS_KEY'],
      bucket: '<your-bucket-name>'
    },
    manifestPrefix: 'stage-app' // optional, defaults to this.project.name()
  },

   production: {
    store: {
      host: process.env.REDISCLOUD_HOST,
      port: process.env.REDISCLOUD_PORT,
      password: process.env.REDISCLOUD_PASSWORD
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      exclude: ['.DS_Store', '*-test.js'], // defaults to empty array
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      bucket: 'businessdotcom-onboarding-index'
    },
    manifestPrefix: 'https://s3.amazonaws.com/businessdotcom-onboarding-index'
  }
};
