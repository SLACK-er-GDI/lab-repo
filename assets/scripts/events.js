'use strict'
const api = require('./api')


const getAllBooks = () => {
  api.indexBooks()
}

const bookHandlers = () => {}
  $('#get-book').on('click', getAllBooks)
}