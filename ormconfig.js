const ormconfig =  require('./ormconfig-json');
const dotenv = require('dotenv');
dotenv.config();

if (process.env.JEST_TESTING === 'true') {
  // only run when testing
  Object.assign(ormconfig, {
    type: "sqlite",
    database: "test.sqlite",
    synchronize: false,
    logging: false,
  });
  console.log('using test db ', ormconfig.database);
} else if (process.env.NODE_ENV === 'production') {
  // in production
  Object.assign(ormconfig, {
    type: "postgres",
    host: "ec2-3-215-207-12.compute-1.amazonaws.com",
    port: 5432,
    database: "d1higk9unvahg0",
    username: "urhmeqrwhebjfl",
    password: "c2cd8b30efe26d72d0bac69012055f4b69cd5decd664ec0d52f069db11c5892b",
    synchronize: true,
    logging: true,
    //url: "postgres://urhmeqrwhebjfl:c2cd8b30efe26d72d0bac69012055f4b69cd5decd664ec0d52f069db11c5892b@ec2-3-215-207-12.compute-1.amazonaws.com:5432/d1higk9unvahg0",
    //ssl: true,

    // for building server, the entities under dist are required
    entities: [
      "dist/entity/**/*.{ts,js}"
    ],
    migrations: [
      "dist/migration/**/*.{ts,js}"
    ],
    subscribers: [
      "dist/subscriber/**/*.{ts,js}"
    ]
  });
  // do not use psql db for runing unit testing, it will get a lot duplication error
  console.log('using psql db ', ormconfig.url );
} else {
  console.log('using local dev db ', ormconfig.database);
}

module.exports = ormconfig;
