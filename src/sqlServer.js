import { getConnection, mssql } from "./db/conexionSql.js";

const getDocs = async (id) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', mssql.NVarChar, id)
            .query("SELECT [OrderNumber],[EstNumber],[ProductDescription],[CustomerName],[QuantityOrdered] FROM [AvistaCustIFace].[dbo].[AcctOrderInterface] WHERE OrderNumber = @id");
        return result.recordset[0];
    } catch (error) {
        console.error(error);
    }
}

export default getDocs;