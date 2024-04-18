const db = require('../../data/db-config')


module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  const result = await db('shippers')
  return result
}

async function getById(shipperId) {
const result = await db('shippers').where('shipperid', shipperId).first()
return result
}

async function create(shipper) {
  const [shipperId] = await db('shippers').insert(shipper)
  const result = await getById(shipperId)
  return result
}

async function update(shipperId, changes) {
 await db('shippers').update(changes).where('shipperid', shipperId)
 const result = await getById(shipperId)
 return result
}

async function remove() {
  return 'delete wired'
}
