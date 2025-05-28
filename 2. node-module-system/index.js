// 1. module.exports -> export
// 2. require  -> import

const firstModule = require ('./first-module'); 
//  import firstModule from './first-module'

console.log(firstModule.add(10,20))

try{

    console.log('Going to devide by zero');
    const result = firstModule.divide(0,0);
    console.log(result);

}catch(error){
    console.log('Caugth an error', error.message)
}

(
    function(exports, require, module, __filename, __dirname){
       //module code goes here  
    }
)