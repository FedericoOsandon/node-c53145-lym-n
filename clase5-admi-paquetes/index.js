let obj = {}

for(let i = 1; i <= 10000; i++){
    let number = Math.ceil(Math.random() * 20)
    logger.info(number)
    // obj[number] =  (obj[number] || 0) + 1;

    if (!obj[number]) {
        obj[number] = 1
    }else{
        obj[number] ++
    }
    

}
logger.info(obj)


// const express = require('express')
// logger.info(express)

// moment('1996-12-4', 'YYYY-MM-DD')