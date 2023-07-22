/** Destruct environment variable to get database configuration */
const { DB_USERNAME = 'root', DB_PASSWORD = '', DB_HOST = '127.0.0.1', DB_NAME = 'psis' } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: 'postgres',
  },
};


// const Sequelize = require("sequelize");

// /** Destruct environment variable to get database configuration */
// const {
//   DB_USERNAME = "postgres",
//   DB_PASSWORD = "ExdiV7SDWJkavgc63hcL",
//   DB_HOST = "containers-us-west-59.railway.app",
//   DB_NAME = "railway",
//   DB_PORT = "8014",
//   DB_URL = "postgresql://postgres:ExdiV7SDWJkavgc63hcL@containers-us-west-59.railway.app:8014/railway",
// } = process.env;

// const db = new Sequelize(DB_URL, {
//   define: {
//     timestamps: false
//   }
// })


// module.exports = {
//   development: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: DB_NAME,
//     host: DB_HOST,
//     port: DB_PORT,
//     dialect: "postgres",
//   },
//   test: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: DB_NAME,
//     host: DB_HOST,
//     port: DB_PORT,
//     dialect: "postgres",
//   },
//   production: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: DB_NAME,
//     host: DB_HOST,
//     port: DB_PORT,
//     dialect: "postgres",
//   },
//   db
// };