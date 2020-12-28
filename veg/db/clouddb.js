const DB_USER = "sreejith";
const DB_PASSWORD = "LZcKavME0O3W7rLn";
const DB_NAME = "vegetables";
const CLUSTER_HOST = "@apidemo.xo05b.mongodb.net";
exports.DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`;