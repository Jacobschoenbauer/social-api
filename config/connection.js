const { connect, connection } = require('mongoose');

//Sets up the database and connections
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;