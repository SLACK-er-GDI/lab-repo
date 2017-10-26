'use strict'
const api = require('./api')
const ui = require('./ui')


const getAllBooks = () => {
  api.indexBooks()
  .then(ui.getAllBooksSuccess)
}

const bookHandlers = () => {
  $('#get-books').on('click', getAllBooks)
}

module.exports = {
  getAllBooks
}