const prod = {
  apiBaseUrl: 'https://rate-repository-api.ahojukka5.com/api',
};

const dev = {
  apiBaseUrl: 'http://192.168.8.224:5000/graphql',
  // apiBaseUrl: 'rate-repository-app.local:5000/api',
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
