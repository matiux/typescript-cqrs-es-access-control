export default {
  connectionSettings: {
    defaultUserCredentials: {
      username: process.env.EVENT_STORE_USERNAME || 'admin',
      password: process.env.EVENT_STORE_PASSWORD || 'changeit',
    },
  },
  tcpEndpoint: {
    host: process.env.EVENT_STORE_TCP_HOST || 'eventstore',
    port: process.env.EVENT_STORE_TCP_PORT || 1113,
  },
};
