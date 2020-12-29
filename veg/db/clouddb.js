const DB_USER = "sreejith";
const DB_PASSWORD = "sreejith";
const DB_NAME = "vegetables";
const CLUSTER_HOST = "apidemo.xo05b.mongodb.net";
exports.DB_URI = `mmongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
