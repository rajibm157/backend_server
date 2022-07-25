const mongo_uri = 'mongodb://localhost:27017/example';

const config = {
    development: {
        port: process.env.PORT || 3000,
        mongo_uri: process.env.MONGO_URI || mongo_uri,
    },
    production: {
        port: process.env.PORT || 3000,
        mongo_uri: process.env.MONGO_URI || mongo_uri,
    },
};

const env = process.env.NODE_ENV !== 'production' ? 'development' : process.env.NODE_ENV;

export default config[env];
