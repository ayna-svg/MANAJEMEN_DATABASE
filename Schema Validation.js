const database = 'UAS';
const collection = 'validasi';

use(database);

db.createCollection(collection);

db.createCollection("obat_validasi", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nama", "harga", "stok"],
        properties: {
          nama: {
            bsonType: "string",
            description: "harus berupa string dan wajib diisi"
          },
          harga: {
            bsonType: "int",
            minimum: 0,
            description: "harus bilangan positif"
          },
          stok: {
            bsonType: "int",
            minimum: 0,
            description: "harus bilangan positif"
          }
        }
      }
    }
  })
  