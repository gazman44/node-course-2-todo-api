//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
      if (err) {
        return console.log ('Unable to connect MongoDB server');
      }
       console.log('connected to  MongoDB server');

      //  db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
      //     console.log('Todos');
      //     console.log(JSON.stringify (docs, undefined,2));
      //    }, (err) =>{
      //    console.log('Unable to fetch todos',err);
      //  });
      // db.collection('Todos').find({
      //        _id: new ObjectID ('59f6ff45fae57726c48da465')
      //      }).toArray().then((docs) =>{
      //    console.log('Todos');
      //    console.log(JSON.stringify (docs, undefined,2));
      //   }, (err) =>{
      //   console.log('Unable to fetch todos',err);
      // });
       db.collection('Users').find({name: 'Jim'}).count().then((count) =>{
          console.log(`Todos count ${count} `);

         }, (err) =>{
         console.log('Unable to fetch todos',err);
       });

  //  db.close();
});
