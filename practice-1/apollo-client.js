import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://praktikum-elsa.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "inH8U7jLhaapml0hQcswb2sNtT7ZaqBPD6qclN11QpGa4djj9J6v3G51GheAKgo3",
  },
});

export default client;
