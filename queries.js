const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'simple-to-do'
});

const createNewTodo = function(name, description) {
  return db.none('INSERT INTO todos(name, description) VALUES($1, $2)', [name, description])
}

const getAllTodos = function() {
  return db.any('SELECT * FROM todos')
}

const getOneTodo = function(id) {
  return db.one('SELECT * FROM todos WHERE id = $1', [id])
}

module.exports = {createNewTodo, getAllTodos, getOneTodo}
