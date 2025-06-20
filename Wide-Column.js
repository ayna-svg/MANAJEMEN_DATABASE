// Simulasi database wide-column
const wideColumnDB = {
    "product_1": {
        name: "Pupuk Urea",
        attributes: {
            harga: 50000,
            stok: 20,
            lokasi: "Gudang A"
        }
    },
    "product_2": {
        name: "Pupuk ZA",
        attributes: {
            harga: 45000,
            stok: 15,
            lokasi: "Gudang B"
        }
    },
    "product_3": {
        name: "Pupuk SP-36",
        attributes: {
            harga: 47000,
            stok: 10,
            lokasi: "Gudang C"
        }
    },
    "product_4": {
        name: "Pupuk KCL",
        attributes: {
            harga: 55000,
            stok: 12,
            lokasi: "Gudang A"
        }
    },
    "product_5": {
        name: "Pupuk Organik",
        attributes: {
            harga: 40000,
            stok: 25,
            lokasi: "Gudang B"
        }
    }
};

// Menampilkan semua data
console.log("\n=== Wide-Column DB ===");
for (let key in wideColumnDB) {
    console.log(`${key}:`, wideColumnDB[key]);
}
