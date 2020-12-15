import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { apiBaseUrl } from '../constants';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.gray,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    // Replace the IP address part with your own IP address!
    const uri = `${apiBaseUrl}/repositories`;
    const response = await fetch(uri);
    const json = await response.json();

    console.log(json);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return repositoryNodes;
};

const RepositoryList = () => {
  const repositories = useRepositories();

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
    />
  );
};

export default RepositoryList;
