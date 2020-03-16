const robots = {
  userInput: require("./robots/user-input.js"),
  linkedinInput: require("./robots/linkedin-input.js"),
  search: require("./robots/search.js")
};

function start() {
  const content = {};

  // robots.userInput(content);
  robots.linkedinInput(content);
  robots.search(content);

  console.log(content);
}

start();
