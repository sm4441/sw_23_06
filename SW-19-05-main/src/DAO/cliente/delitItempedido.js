const {conexao} = require('../conexao.js')

async function deletarItem(id) {
    
    const sql = `DELETE FROM tbl_itempedido WHERE id = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[id]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarItem}