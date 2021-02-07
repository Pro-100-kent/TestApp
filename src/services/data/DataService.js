const DataService = () => {
  let data = [];

  const init = async () => {
    console.log('init');

    try {
      const response = await fetch('https://randomuser.me/api/?results=50');
      const responseJson = await response.json();
      data = responseJson.results.map((resultsItem) => {
        const {
          name: {first, last},
          login: {username, uuid},
          picture: {thumbnail},
        } = resultsItem;

        return {
          uuid,
          first,
          last,
          username,
          thumbnail,
        };
      });
    } catch (e) {
      console.log('ERROR_FETCHING_DATA: ' + e.toString());
      return;
    }
  };

  const getMoreData = ({currentSize, numberOfItems}) => {
    if (
      currentSize === null ||
      currentSize === undefined ||
      numberOfItems === null ||
      numberOfItems === undefined
    ) {
      return [];
    }

    return data.slice(0, currentSize + numberOfItems);
  };

  const getData = () => {
    return data;
  };

  return {
    getMoreData,
    init,
  };
};

export default DataService();
