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


const groupBy = (data, key) => {

    outputObj = {}

    for (let record of data) {
        groupKey = record[key]
        if (!outputObj[groupKey])
            outputObj[groupKey] = []

        outputObj[groupKey].push(record)

    }

    return outputObj

}

console.log(groupBy(array, "city"))
