const database = 'UAS';
const collection = 'NUR_AINA';


use(database);


db.createCollection(collection);

db.obat.deleteOne({ _id: 3 }) 
