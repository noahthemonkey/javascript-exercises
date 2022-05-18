const getTheTitles = function(getBook) {
    
    const bookTitle = getBook.map(book => book.title)
    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
