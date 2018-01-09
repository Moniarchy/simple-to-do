const express = require('express')
const router = express.Router()
const { createNewTodo, getAllTodos, getOneTodo } = require('../queries')

/* GET home page. */
router.get('/', function(request, response) {
  getAllTodos()
  .then(function(todos) {
    response.render('index', {todos})
  })
  .catch(function(error) {
    response.json(error.message)
  })
})

router.get('/todo/createnew', function(request, response) {
  //respond in some way
  response.render('createnew')
})

router.post('/todo/createnew', function(request, response) {
  const { name, description } = request.body

  createNewTodo(name, description)
  .then(response.redirect('/'))
  .catch(function(error) {
    response.json(error.message)
  })
})

router.get('/todo/:id', function(request, response) {
  const id = request.params.id

  getOneTodo(id)
  .then(response.render('todopage'))
  .catch(function(error) {
    response.json(error.message)
  })
})

module.exports = router
