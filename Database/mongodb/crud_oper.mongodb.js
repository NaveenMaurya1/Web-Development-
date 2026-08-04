use("Cruddb")

db.createCollection("Course")

db.course.insertOne({
    name: "Java",
    price: 0,
    tutor: "CodeWithHarry",
    duration: "6 Months",
    level: "Beginner",
    language: "English",
    rating: 4.8,
    students: 12000,
    isPaid: true
})

db.course.insertMany([
    {
        name: "Java",
        price: 0,
        tutor: "Harry",
        duration: "6 Months",
        level: "Beginner"
    },
    {
        name: "Python",
        price: 0,
        tutor: "Angela",
        duration: "5 Months",
        level: "Intermediate"
    },
    {
        name: "Node.js",
        price: 20000,
        tutor: "Max",
        duration: "4 Months",
        level: "Advanced"
    }
])

let a = db.course.find({price : 0})
console.log(a)

let b = db.course.findOne({price : 20000})
console.log(b)

db.course.updateOne({price: 20000},
    {$set:{price:1000}})

db.course.updateMany({price: 0},
    {$set:{price:1000}})

    