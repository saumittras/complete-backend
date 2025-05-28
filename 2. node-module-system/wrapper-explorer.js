console.log('Node Module wrapper demo');

console.log('__filename from wrapper-explorer file', __filename);
console.log('__dirname from wrapper-explorer file', __dirname);

module.exports.greet = function (name){
    console.log(`Hello ${name}`);
}