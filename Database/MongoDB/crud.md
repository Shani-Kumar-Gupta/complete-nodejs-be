# MongoDB CRUD Operation:
C - CREATE or INSERT (Insert a new document to a collection)
R - READ (Retrieve documents from a collection)
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

# Read Operation:
* db.collection.find();
* db.collection.findOne();
* db.collection.find({ name: '' }); // with filter
* db.collection.findOne(
  { name: ''} -> Query Criteria
  { name: 1, age: 1} -> Projection
); // with filter

# Update Operation:
* db.collection.updateOne(
  {} -> update query criteria or filters
  { $set: {}} -> update action
);
* db.collection.updateMany(
  {} -> update query criteria or filters
  { $set: {}} -> update action
);

# Delete Operation:
* db.collection.deleteOne(
  { } -> delete criteria
);
* db.collection.deleteMany(
  { } -> delete criteria
);
