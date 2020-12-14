import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  // Main container
  container: {
    padding: 18,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'green',
  },

  // Top part of card, having avatar and information
  cardTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
  tinyLogo: {
    marginRight: 10,
    flexGrow: 0,
    width: 50,
    height: 50,
  },
  infoBlock: {
    flexGrow: 1,
    flexShrink: 1,
  },

  // Bottom part of card, having statistics
  cardBottom: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
  },

  statisticsBlock: {
    display: 'flex',
    alignItems: 'center',
  },
});

const Statistic = ({ count, what }) => {
  const formatNumber = (number) => {
    if (number < 1000) {
      return number;
    }
    return (number / 1000).toFixed(1) + 'k';
  };
  return (
    <View style={styles.statisticsBlock}>
      <Text>{formatNumber(count)}</Text>
      <Text>{what}</Text>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardTop}>
        <Image style={styles.tinyLogo} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.infoBlock}>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text>{item.language}</Text>
        </View>
      </View>
      <View style={styles.cardBottom}>
        <Statistic what="Stars" count={item.stargazersCount} />
        <Statistic what="Forks" count={item.forksCount} />
        <Statistic what="Reviews" count={item.reviewCount} />
        <Statistic what="Rating" count={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
