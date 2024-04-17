const mongoose = require("mongoose");
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
  try {

    const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.zi3qld3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("Conectou ao banco!")
    return dbConn;
  } catch (error) {
    console.log(error)
  }
}

conn()
//conection

module.exports = conn

console.log(conn)