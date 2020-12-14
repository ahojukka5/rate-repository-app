import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    display: 'flex',
  },
  cardTop: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardTop}>
        <Image style={styles.tinyLogo} source={{ uri: item.ownerAvatarUrl }} />
        <View>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text>{item.language}</Text>
        </View>
      </View>
      <View style={styles.cardBottom}>
        <View>
          <Text>{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text>{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
