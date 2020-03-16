const google = require("googleapis").google;
const customSearch = google.customsearch("v1");
const googleSearchCredentials = require("../credentials/google-api.json");

async function robot(content) {
  const responseLinks = [];
  const start = 0;

  for (i = 0; responseLinks.length < 20; i++) {
    console.log("entrou");
    console.log(responseLinks.length);
    const searchResponse = await executeSearch(content, i);
    const displayResponse = filterSearchResponse(searchResponse);

    console.log(displayResponse);
  }

  async function executeSearch(content, start) {
    const response = await customSearch.cse.list({
      auth: googleSearchCredentials.apiKey,
      cx: googleSearchCredentials.searchConsoleId,
      q: content.searchTerm,
      num: 10,
      start: start * 10 + 1
    });

    return response;
  }

  function filterSearchResponse(response) {
    const responseLinks = response.data.items.map(item => {
      return item.link;
    });

    return responseLinks;
  }

  process.exit(0);
}

module.exports = robot;
