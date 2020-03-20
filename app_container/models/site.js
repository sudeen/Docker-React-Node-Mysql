// Function to insert/add Sites using async await promise
module.exports = {
  insert: (connection, data) => {
    return new Promise(function(resolve, reject) {
      const INSERT_SITE_QUERY = `INSERT INTO sites (site_name) VALUES('${data}')`;
      connection.query(INSERT_SITE_QUERY, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};
