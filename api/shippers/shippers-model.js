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

async function getById() {
  return 'getById wired'
}

async function create() {
  return 'create wired'
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
