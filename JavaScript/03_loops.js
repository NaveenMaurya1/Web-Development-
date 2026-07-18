console.log("Hey i am loop ")

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let obj = {
    name: "Harry",
    Role: "Programmer",
    company: "CodeWithHarry AI"
}

for (const key in obj) {
    console.log(key)
}

for (const c of "Harry") {
    console.log(c)
}

let j = 0;
while (j < 6) {
    console.log(j)
    j++
}

let k = 10;
do {
    console.log(k)
    k++
} while (k < 6);