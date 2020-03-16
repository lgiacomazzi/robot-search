const google = require("googleapis").google;
const customSearch = google.customsearch("v1");
const googleSearchCredentials = require("../credentials/google-api.json");

async function robot(content) {
  const response = await customSearch.cse.list({
    auth: googleSearchCredentials.apiKey,
    cx: googleSearchCredentials.searchConsoleId,
    q: content.searchTerm,
    num: 2
  });

  console.dir(response.data.items, { depth: null });
  process.exit(0);
}

module.exports = robot;
