// The Magical Sorting Hat : Imagine you are creating a magical sorting hat for a wizard school. Implement a Javascript function that takes an array of student names and assigns theem to one of the four houses (Gryfinder (lengthless than 6),Hufflepuff(Length less than 8), Ravenclaw(length less than 12),or Slytherin (length greater than or equal to 12)) based on the length of thier names.

let students = ["Deepak", "Snoi khan", "Aditya Prajapati", "Raju", "Haseena", "Ravinathan", "Kalu", "Shrinivas", "Hinata Kimotarinasi"]

let houses = []

for (const student of students) {
    if (student.length < 6) {
        houses.push("GryFinder")
    }
    else if (student.length < 8) {
        houses.push("Hufflepuff")
    }
    else if (student.length < 12) {
        houses.push("Ravenclaw")
    }
    else if (student.length >= 12) {
        houses.push("Slytherin")
    }

}

console.log(houses);

