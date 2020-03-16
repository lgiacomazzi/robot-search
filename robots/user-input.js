const readline = require("readline-sync");

function robot(content) {
  content.searchTerm = askAndReturnSearchTerm();

  function askAndReturnSearchTerm() {
    return readline.question("Type the search term: ");
  }
}

module.exports = robot;
