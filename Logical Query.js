const database = 'UAS';
const collection = 'NUR_AINA';


use(database);


db.createCollection(collection);


db.obat.find({
  $and: [
    { harga: { $gt: 4000 } },
    { stok: { $lt: 100 } }
  ]
})
