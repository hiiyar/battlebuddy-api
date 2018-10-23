module.exports = {
    server: {
        port: process.env.SERVER_PORT || 5000
    },
    crypto: {
        secretKey: process.env.CRYPTO_SECRET || 'battlebuddy'
    }
}