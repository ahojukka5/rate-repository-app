import ApolloClient from 'apollo-boost';
import config from '../constants';

const createApolloClient = () => {
  return new ApolloClient({ uri: config.graphqlUrl });
};

export default createApolloClient;
