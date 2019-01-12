const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    mongooseDebug: true,
<<<<<<< Updated upstream
    mongoUri: 'mongodb://localhost/gardens',
    port: 5000
=======
    mongoUri: 'mongodb://localhost:27017/gardens',
>>>>>>> Stashed changes
  },
  production: {
    mongooseDebug: false,
    mongoUri: process.env.MONGODB_URI,
    port: process.env.PORT
  }
}

module.exports = config[env];
