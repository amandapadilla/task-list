const url = "./services/data.json";

const getDataFromServer = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
};

export default getDataFromServer;
