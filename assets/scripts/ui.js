const getAllBooksTemplate = require('../templates/book-listing.handlebars')

const getAllBooksSuccess = (data) => {
  const showAllBooksHtml = getAllBooksTemplate({ books: data.books })
  $('#container').append(showAdsHtml)
}

module.exports = {
  getAllBooksSuccess
}