const database = 'UAS';
const collection = 'NUR_AINA';

use(database);

db.createCollection(collection);

db[collection].bulkWrite([
    {
        insertOne: {
            document: {
                _id: 4,
                nama: "Ibuprofen",
                harga: 8000,
                stok: 60
            }
        }
    },
    {
        updateOne: {
            filter: { _id: 1 },
            update: { $inc: { stok: -5 } }
        }
    },
    {
        deleteOne: {
            filter: { _id: 3 }
        }
    }
]);

db[collection].find();

  