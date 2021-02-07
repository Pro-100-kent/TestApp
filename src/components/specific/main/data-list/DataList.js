import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import DataListItem from './DataListItem';

const DataList = ({serviceData, specifiedFirstName, onLoadMore}) => {
  const renderItem = ({item}) => {
    if (!specifiedFirstName) {
      return (
        <DataListItem
          first={item.first}
          last={item.last}
          thumbnail={item.thumbnail}
          username={item.username}
        />
      );
    } else {
      const itemFirstNameInUpperCase = item.first.toUpperCase();
      const specifiedFirstNameToUpperCase = specifiedFirstName.toUpperCase();

      if (itemFirstNameInUpperCase.startsWith(specifiedFirstNameToUpperCase)) {
        return (
          <DataListItem
            first={item.first}
            last={item.last}
            thumbnail={item.thumbnail}
            username={item.username}
          />
        );
      } else {
        return null;
      }
    }
  };

  const keyExtractor = (item) => item.uuid;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.list}
        data={serviceData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={specifiedFirstName ? null : onLoadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  list: {
    flex: 1,
    paddingTop: 8,
  },
});

export default DataList;
