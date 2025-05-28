// 1. module.exports -> export
// 2. require  -> import

const firstModule = require ('./first-module'); 
//  import firstModule from './first-module'

console.log(firstModule.add(10,20))