const lodash = require('lodash')

const names = ['sangram', 'saumitta', 'johan', 'terry', 'alex', 'mia'];

const capName = lodash.map(names, lodash.capitalize)

console.log(capName)