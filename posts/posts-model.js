const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

module.exports = {
  find,
//   findbyId,
//   insert,
//   update,
//   remove
};

function find(query) {
  const { page = 1, limit = 2, sortby = "id", sortdir = "asc" } = query;
  const offset = limit * (page - 1);

  let rows = db("posts")
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

  return rows;
}
