import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import DataList from '../../../components/specific/main/data-list/DataList';
import DataService from '../../../services/data/DataService';

const MainView = () => {
  const [serviceData, setServiceData] = useState([]);
  const [firstNameToSearch, setFirstNameToSearch] = useState('');

  const changeTextHandler = (text) => {
    console.log(text);
    setFirstNameToSearch(text);
  };

  const loadMore = useCallback(() => {
    setServiceData((prevServiceData) => {
      console.log('LOAD_MORE_CALLED: ' + prevServiceData.length);

      const updatedData = DataService.getMoreData({
        currentSize: prevServiceData.length,
        numberOfItems: 10,
      });

      return updatedData;
    });
  }, []);

  useEffect(() => {
    const initService = async () => {
      await DataService.init();
      loadMore();
    };

    initService();
  }, [loadMore]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          value={firstNameToSearch}
          placeholder={'Search'}
          onChangeText={changeTextHandler}
        />
      </View>
      <View style={styles.listContainer}>
        <DataList
          serviceData={serviceData}
          specifiedFirstName={firstNameToSearch}
          onLoadMore={loadMore}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  searchContainer: {
    height: 50,
    backgroundColor: 'lightgrey',
    alignSelf: 'stretch',
    paddingLeft: 8,
    paddingRight: 8,
  },
  listContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
  },
});

export default MainView;
