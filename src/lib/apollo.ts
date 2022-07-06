import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl5a30y5g6cb501t8gk0j1o7w/master',
    cache: new InMemoryCache()

})