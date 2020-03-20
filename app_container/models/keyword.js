// Function to insert/add Keywords using async await promise
module.exports = {
  insert: (connection, data) => {
    return new Promise(function(resolve, reject) {
      const INSERT_KEYWORDS_QUERY = `INSERT INTO keywords (keywords) VALUES('${data}')`;
      connection.query(INSERT_KEYWORDS_QUERY, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};
