const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const {merge} = require('lodash');
const { typeDefs } = require('./graphql/TypeDefs');
const { resolvers: baseResolvers } = require('./graphql/resolvers/base.resolver');
const { resolvers: studentsResolvers } = require('./graphql/resolvers/student.resolver');
const { resolvers: classesResolvers } = require('./graphql/resolvers/class.resolver');

async function startApolloServer() {
    //Define Apollo Server
    const server = new ApolloServer({ 
        typeDefs: typeDefs, 
        resolvers: merge({}, baseResolvers, studentsResolvers, classesResolvers),
        context: ({req, res}) => ({req, res})
    });
    await server.start();

    //Configure .env
    require('dotenv').config();

    //Define Express
    const app = express();

    //CORS
    app.use(cors());

    //Custom middleware:
    app.use((req, res, next) =>{
        next();
    });

    server.applyMiddleware({app});

    await new Promise(resolve => app.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

    return { server, app };
}

startApolloServer();