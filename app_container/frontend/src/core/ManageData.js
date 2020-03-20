// All the API related functions are managed from this section

// Function to fetch keywords
export const getKeywords = () => {
  return fetch("/keywords/api/getAllKeywords", { // Not specifying the http part makes it dynamic for development and production
    method: "GET",
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// Function to add a keyword
export const addKeyword = keyword => {
  return fetch("/keywords/api/add", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      keywords: keyword,
    }),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

// Function to delete Keywords
export const deleteKeywords = keywordId => {
  return fetch(`/keywords/api/delete/${keywordId}`, {
    method: "DELETE",
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// Function to fetch sites
export const getSites = () => {
  return fetch("/sites/api/getAllSites", {
    method: "GET",
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// Function to add a site
export const addSite = site => {
  return fetch("/sites/api/add", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      site_name: site,
    }),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

// Function to delete sites
export const deleteSites = siteId => {
  return fetch(`/sites/api/delete/${siteId}`, {
    method: "DELETE",
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
