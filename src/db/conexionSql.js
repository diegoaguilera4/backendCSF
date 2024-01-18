import mssql from "mssql";
import dotenv from "dotenv";


dotenv.config({ path: "./.env" });

// URL de conexión a la base de datos
const dbUser = process.env.SQL_USER;
const dbPassword = process.env.SQL_PASSWORD;
const dbServer = process.env.SQL_SERVER;
const db = process.env.SQL_DATABASE;
// Configuración de la conexión a la base de datos
const config = {
  user: dbUser,
  password: dbPassword,
  server: dbServer,
  database: db,
  options: {
    encrypt : false,
    trustServerCertificate: true,
  },
};
  
// Ejemplo de consulta SQL
  
export async function getConnection(){
  try {
    return await mssql.connect(config); 
  } catch (error) {
    console.error(error);
  }
}

export {mssql};