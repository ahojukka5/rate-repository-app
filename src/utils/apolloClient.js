import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = () => {
  const uri = Constants.manifest.extra.APOLLO_URI;
  return new ApolloClient({ uri });
};

export default createApolloClient;
