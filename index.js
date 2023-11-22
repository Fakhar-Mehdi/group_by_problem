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


const groupBy1 = (data, key) => {

    outputObj = {}

    for (let record of data) {
        groupKey = record[key]
        if (!outputObj[groupKey])
            outputObj[groupKey] = []

        outputObj[groupKey].push(record)

    }

    return outputObj

}

const groupBy2 = (data, key) => {
    outputObj = {}
    const allKeys = [...new Set(data.map((record) => record[key]))]
    for (let value of allKeys)
      outputObj[value] = data.filter((record)=> record[key] === value )
    return outputObj
}

console.log(groupBy(array, "city"))
