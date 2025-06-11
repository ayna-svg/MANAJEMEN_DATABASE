const database = 'UAS';
const collection = 'NUR_AINA';


use(database);


db.createCollection(collection);


db.obat.updateOne({ _id: 1 }, { $inc: { stok: -2 } })
db.obat.updateOne({ _id: 2 }, { $inc: { stok: -1 } })
