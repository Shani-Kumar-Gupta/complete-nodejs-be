# MongoDB CRUD Operation:
C - CREATE or INSERT (Insert a new document to a collection)
R - READ
U - UPDATE
D - DELETE

# Create or Insert Operation:
* db.collection.insertOne()
* db.collection.insertMany()

examples:
1) db.collection.insertOne({
    "name": "Shani Kumar Gupta",
    "age": 27,
    "status": "completed"
});

2) db.collection.insertMany([{ ...data }, { ...data1 }]);

