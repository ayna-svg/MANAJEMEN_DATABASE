const database = 'UAS';
const collection = 'NUR_AINA';

use(database);

db.createCollection(collection);


db.obat.aggregate([
    { $group: { _id: null, totalStok: { $sum: "$stok" } } }
  ])
  