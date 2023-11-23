const array = [
    {
        id: 1,
        name: "Bilal",
        city: "Lahore"
    }, {
        id: 1,
        name: "Bilal",
        city: "Lahore"
    }, {
        id: 3,
        name: "Hafsa",
        city: "Karachi"
    }, {
        id: 4,
        name: "Rehan",
        city: "Lahore"
    }, {
        id: 5,
        name: "Saqib",
        city: "Karachi"
    }, {
        id: 6,
        name: "Farhan",
        city: "Islamabad"
    },
]

const groupBy1 = (data, key) => {
    const outputObj = {}
    for (const record of data) {
        groupKey = record[key]
        if (!outputObj[groupKey]) outputObj[groupKey] = []
        outputObj[groupKey].push(record)
    }
    return outputObj
}

const removeDuplicates = (newArray, currentValue) => !newArray.includes(currentValue) ? newArray.concat(currentValue) : newArray;
const getAllKeys = (data, key) => data.map((record) => record[key]).reduce(removeDuplicates, [])

const groupBy2 = (data, key) => {
    const allKeys = getAllKeys(data, key)
    const outputObj = {}
    for (const value of allKeys) outputObj[value] = data.filter((record) => record[key] === value)
    return outputObj
}

console.log("By City", groupBy1(array, "city"))
console.log("\n\n\n\nBy Name", groupBy2(array, "name"))
