import dotenv from 'dotenv';

dotenv.config();

const mongo_uri = 'mongodb://localhost:27017/example';

const config = {
  development: {
    port: process.env.PORT || 3000,
    mongo_uri: process.env.MONGO_URI || mongo_uri,
    jwt_secret: 'test_jwt_secret',
    token_expiration: '7d',
    stripe_secret: process.env.STRIPE_SECRET_KEY || '',
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
  production: {
    port: process.env.PORT || 3001,
    mongo_uri: process.env.MONGO_URI || mongo_uri,
    jwt_secret: process.env.JWT_SECRET || 'Jwt_Secret',
    token_expiration: process.env.TOKEN_EXPIRE || '30d',
    stripe_secret: process.env.STRIPE_SECRET_KEY || '',
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

const env = process.env.NODE_ENV !== 'production' ? 'development' : process.env.NODE_ENV;

export default config[env];
