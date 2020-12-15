import ApolloClient from 'apollo-boost';
import config from '../constants';

const createApolloClient = () => {
  return new ApolloClient({ uri: config.apiBaseUrl });
};

export default createApolloClient;
