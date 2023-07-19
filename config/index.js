module.exports = {
    PORT: process.env.PORT || 5000,
    DEV: {
        DB_HOST: "127.0.0.1",
        DB_PORT: 27017,
        DB_NAME: "test"
    }
}