// Untuk Database MySQL
const { DB_USERNAME = 'root', DB_PASSWORD = 'password', DB_HOST = 'localhost', DB_NAME = 'PSIS' } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql', // Ubah nilai dialect menjadi 'mysql'
    // Jika menggunakan 'mysql', Anda dapat menambahkan properti tambahan jika diperlukan seperti port, timezone, dll.
    // port: 3306,
    // timezone: '+00:00',
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql', // Ubah nilai dialect menjadi 'mysql'
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql', // Ubah nilai dialect menjadi 'mysql'
  },
};


// Untuk Database PostgreSQL
/** Destruct environment variable to get database configuration */
// const { DB_USERNAME = 'postgres', DB_PASSWORD = 'azlan', DB_HOST = '127.0.0.1', DB_NAME = 'psis' } = process.env;

// module.exports = {
//   development: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}`,
//     host: DB_HOST,
//     dialect: 'postgres',
//   },
//   test: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}`,
//     host: DB_HOST,
//     dialect: 'postgres',
//   },
//   production: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}`,
//     host: DB_HOST,
//     dialect: 'postgres',
//   },
// };
