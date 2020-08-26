import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client'; // Connecting to our Hasura backend using Apollo!
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
    cache: new InMemoryCache(),
    link: new WebSocketLink({
        // uri: 'https://ratnesh-hasura-graphql-engine.herokuapp.com/v1/graphql'
        uri: 'wss://ratnesh-hasura-graphql-engine.herokuapp.com/v1/graphql',
        options: {
            reconnect: true
        }
    })
})
