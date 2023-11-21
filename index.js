const array = [{
    id: 1,
    name: "Bilal",
    city: "Lahore"
},
{
    id: 1,
    name: "Bilal",
    city: "Lahore"
},
{
    id: 3,
    name: "Hafsa",
    city: "Karachi"
},
{
    id: 4,
    name: "Rehan",
    city: "Lahore"
},
{
    id: 5,
    name: "Saqib",
    city: "Karachi"
},
{
    id: 6,
    name: "Farhan",
    city: "Islamabad"
},
]


const groupBy = (data) => {

    outputObj = {}

    for (let record of array) {
        city = record.city
        if (!outputObj[city])
            outputObj[city] = []

        outputObj[city].push(record)

    }

    return outputObj

}

console.log(groupBy(array))