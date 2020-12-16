const Pool = require('pg').Pool;
const pool = new Pool({
 host: 'ec2-54-220-229-215.eu-west-1.compute.amazonaws.com',
  database: 'darlchhd1frfse',
  user:'kckvxrvetgxrre',
  password: '80a322d830d9b9184923c1d548964f7ce1f36bc409c4725f227d640b09fd82c7',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})

const getData = (reqest, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  pool.query('SELECT * FROM "public".data', (error, data) => {
      response.header("Access-Control-Allow-Origin", "*");
    if (error) {throw error}
    response.status(200).json(data.rows)
  })
}

const getDataById = (reqest, response) => {
    response.header("Access-Control-Allow-Origin", "*");
  const id = parseInt(reqest.params.id)
  pool.query('SELECT * FROM "public".data WHERE id = $1', [id], (error, data) => {
    if (error) {throw error}
    response.status(200).json(data.rows)

  })
}

module.exports = {
  getData,
  getDataById
}