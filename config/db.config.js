module.exports = {
    HOST: "localhost",
    PORT: "8391",
    USER: "sa",
    PASSWORD: "admin",
    DB: "neosyx_play",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};