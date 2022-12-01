const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    let answer = drivers.filter(element => element === string || element === string.toLowerCase())
    return answer
}

function fuzzyMatch(drivers, string) {
    let letter = drivers.filter(driver => driver.slice(0, string.length) === string)
    return letter
}

function matchName(drivers, string) {
    let name = drivers.filter(driver => driver.name === string)
    return name
}