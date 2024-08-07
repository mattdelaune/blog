const algoliasearch = require('algoliasearch')

fetch("https://dashboard.algolia.com/sample_datasets/movie.json")
  .then((data) => data.json())
  .then((records) => {
    const client = algoliasearch(
      "7B3Q8BRM7D",
      "f00ab70f9551919471723eaa5d23a584"
    );

    const index = client.initIndex('Data Science Blog');

    return index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });
  })
  .then(() => {
    console.log("Data successfully indexed!");
  })
  .catch((error) => {
    console.error("An error occurred while indexing data:", error);
  });