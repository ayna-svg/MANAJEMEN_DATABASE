const database = 'UAS';
const collection = 'NUR_AINA';


use(database);


db.createCollection(collection);


db.obat.find({ harga: { $gte: 5000 } })


