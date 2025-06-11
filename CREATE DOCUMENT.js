
const database = 'UAS';
const collection = 'NUR_AINA';


use(database);


db.createCollection(collection);

db.obat.insertMany([
    { _id: 1, nama: "Paracetamol", harga: 5000, stok: 100 },
    { _id: 2, nama: "Vitamin C", harga: 7000, stok: 80 },
    { _id: 3, nama: "Antalgin", harga: 3000, stok: 50 }
  ])
  