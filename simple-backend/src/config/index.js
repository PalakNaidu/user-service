module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRES_IN: '1h',
    BCRYPT_SALT_ROUNDS: 10,
};
