# MongoDB Basic terminology:
* Schemaless
* Database
* Collections
* Documents

# Basics Commands:
============== How to Create a Database in MongoDB =============
* show dbs; // To show the list of existing databases
* use db_name; // To use the specific db or create new one if doesn't exist
* db; // To show the current selected db.
* db.students.insertOne({ name: "Shani", age: 27 }); // Create a students collection if doesn't exist and insert one document inside the collections
* show collections; // List all the collections inside the db.
* db.students.find(); // To show the list of documents available under collection
* db.students.findOne(); // To show only one documents from the list of available documents under collection
* db.students.insertMany();


=============== Embedded Documents ======================

* insert embedded document for existing document-
db.students.update({ name: "Shani Kumar Gupta"}, {$set: {idCards: { hasPanCard: false, hasAdhaarCard: true }}});

* update all document once-
db.students.updateMany({}, {$set: {hobbies: ['Anime', 'Cooking']}});

======== Search Docuemnts (Single or Nested Doc) =========
db.students.find({ name: "Shani Kumar Gupta"});
db.students.find({ hobbies: 'Cooking'});
db.students.find({ 'idCards.hasPanCard': false });
