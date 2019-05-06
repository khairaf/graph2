const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://gqlUser:gqlUser@gql-59zds.mongodb.net/test?retryWrites=true", { useNewUrlParser: true, }, function(error){console.log(error)});
mongoose.connection.once('open', () => {
    console.log('sudah connect ke db mongodb atlas');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});