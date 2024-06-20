// console.log('cwd: ',process.cwd())
// console.log('pid: ',process.pid)
// console.log('memory: ',process.memoryUsage())
// console.log('env:',process.env)
// console.log('argv :',process.argv)
// console.log('version :',process.version)
// // console.l' :',og(process.on())
// console.log('exit :',process.exit())

// console.log('argv :',process.argv[1])

// si ejecutamos: node process.js 1 2 3 4 5 6 7 8 9 10
console.log('argv :',process.argv.slice(2)) // [ '1',  '2', '3','4', '5', '6','7',  '8', '9','10']

// si ejecutamos: node process.js a 2 -a
console.log('argv :',process.argv.slice(2)) // [ 'a',  '2', '-a']

// si ejecutamos: node process.js 
console.log('argv :',process.argv.slice(2)) // []

// si ejecutamos: node process.js --mode development
console.log('argv :',process.argv.slice(2)) // [ '--mode', 'development' ] 

