
const keyValueDB = {
    "user:1": { name: "Ayu", age: 22 },
    "user:2": { name: "Budi", age: 30 },
    "user:3": { name: "Citra", age: 27 },
    "user:4": { name: "Dimas", age: 24 },
    "user:5": { name: "Eka", age: 28 }
};


console.log("=== Key-Value DB ===");
for (let key in keyValueDB) {
    console.log(`${key}:`, keyValueDB[key]);
}
