async function getRandomValue(list) {
    return list[Math.floor(Math.random() * list.length)]
}

module.exports = { getRandomValue };