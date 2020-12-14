import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  // Main container
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'column',
  },

  // Top part of card, having avatar and information
  cardTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  languages: {
    display: 'flex',
    flexDirection: 'row',
  },

  // Bottom part of card, having statistics
  cardBottom: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
      <Text bold>{formatNumber(count)}</Text>
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
          <Text bold subtitle>
            {item.fullName}
          </Text>
          <Text>{item.description}</Text>
          <View style={styles.languages}>
            <Text label>{item.language}</Text>
          </View>
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
