// logger.info('cwd: ',process.cwd())
// logger.info('pid: ',process.pid)
// logger.info('memory: ',process.memoryUsage())
// logger.info('env:',process.env)
// logger.info('argv :',process.argv)
// logger.info('version :',process.version)
// // console.l' :',og(process.on())
// logger.info('exit :',process.exit())

// logger.info('argv :',process.argv[1])

// si ejecutamos: node process.js 1 2 3 4 5 6 7 8 9 10
logger.info('argv :',process.argv.slice(2)) // [ '1',  '2', '3','4', '5', '6','7',  '8', '9','10']

// si ejecutamos: node process.js a 2 -a
logger.info('argv :',process.argv.slice(2)) // [ 'a',  '2', '-a']

// si ejecutamos: node process.js 
logger.info('argv :',process.argv.slice(2)) // []

// si ejecutamos: node process.js --mode development
logger.info('argv :',process.argv.slice(2)) // [ '--mode', 'development' ] 

