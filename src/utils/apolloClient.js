import ApolloClient from 'apollo-boost'

const createApolloClient = () => new ApolloClient({
        uri: 'http://192.168.100.100:5000/graphql'
})

export default createApolloClient