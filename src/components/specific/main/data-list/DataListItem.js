import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const DataListItem = ({first, last, username, thumbnail}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textInfoContainer}>
        <View style={styles.firstNameContainer}>
          <Text>{first}</Text>
        </View>
        <View style={styles.lastNameContainer}>
          <Text>{last}</Text>
        </View>
        <View style={styles.usernameContainer}>
          <Text>{username}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: thumbnail}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    flex: 1,
    backgroundColor: 'lightgrey',
    marginBottom: 8,
    borderRadius: 4,
    elevation: 3,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 70,
    alignSelf: 'stretch',
    // backgroundColor: 'white',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
  },
  textInfoContainer: {
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: 'black',
  },
  firstNameContainer: {
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: 'red',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  lastNameContainer: {
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: 'green',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  usernameContainer: {
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default DataListItem;
