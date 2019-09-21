# Documentasi

Buat GraphQL server pake express.
MongoDB untuk store our data using mLab.

React untuk bikin query to our qraphql server. pake Apollo.

graphiql untuk liat sample req from front-end. test query to our qrphql server.

mau liat semua book, querynya:
```
{
  books{
    //mau apa dari books?
    name
    genre
    id
    author{
      name
      age
    }
  }
}
```
* mkdir server, cd server
* npm init
* install express: npm install express

* bikin app.js
  * panggil dgn node app atau nodemon app.

* setup qraphql:
  * npm i graphql express-graphql (biar express ngerti graphql)

simple way untuk buat express server yg run graphql api. use it as a middleware on a single route. route ini nanti jadi endpoint yg akan interak dgn data grapgql kita.

* setup middleware:
```
app.use("/graphql", graphqlHTTP({
  //diisi dgn schema untuk describe how our data look
}));
```

* npm i lodash di server folder: library, pake di schema.js

```
{
  book(id: "2"){
    genre
    id
    name
  }
}
```

kalo type id nya `GraphQLString`, `id:"2"` musti pake double quotes, kalo typenya `GraphQLID`, bisa pake `""` bisa engga.
```
Mutation:
change data
mutation{
  addAuthor(name: "Steve", age: 22){
    name
    age
  }
}
```

```
mutation{
  addBook(name: "The Long Earth", genre: "sci-fi", authorId: "5cc7f52b13b687153043ae73"){
    name
    genre
  }
}
```

* test 2
```
{
  books{
    name
    genre
    id
    author{
      name
      age
    }
  }
}
```

```
{
  authors{
    name
   age
    books{
      name
    }
  }
}
```

```
{
  book(id:"5cc7f6e5733184168cf8592d"){
    name
   genre
    author{
      name
      age
    }
  }
}
```

```
{
  author(id:"5cc7f57913b687153043ae74"){
    name
    age
    books{
      name
    }
  }
}
```

kalo muncul error ini ketika ingin connect ke mongodb atlas:
`name: 'MongoNetworkError',   errorLabels: [ 'TransientTransactionError' ],   [Symbol(mongoErrorContextSymbol)]: {} }`
pindah terminal, misal cmdr, ini bisa solved. error tsb hanya temporary, mungkin karena koneksi internet yang kurang baik, atau mungkin emang musti ganti terminal? -_-

#### cara connect ke mongodb atlas.
- login akun di cloud.mongodb.com
- new project, isi nama dll
- pilih yg free sanboxnya
- ok ok ok
- pilih opsi connect,, maka akan muncul cara-cara connectionnya, pilih salah 1
- kalo pake opsi ke-2, copas `mongodb+srv://gqlUser:passwordmu@gql-59zds.mongodb.net/test?retryWrites=true"`
- taro sebagai url di `mongoose.connect('url', {})`
- boom

 `name: { type: GraphQLNonNull(GraphQLString) }` ---> artinya musti diisi name atau parameter itu, atauga ga akan ke add data barunya.

-----

### bagian front end
akan ada 2 komponen: book list dan add book.
apollo akan handle query kita. 

GraphQL Apollo client itu yang bertanggung jawab menghubungkan bagian backend dengan frontend nya.

* https://www.apollographql.com/docs/react/essentials/get-started
* untuk install apollo client
* npm install apollo-boost react-apollo graphql

dibagian server install sesuatu biar url server bisa diakses oleh bagian client: cors
* npm i cors
* di server/app.js require si cors ini
