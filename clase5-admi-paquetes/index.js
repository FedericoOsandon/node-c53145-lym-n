let obj = {}

for(let i = 1; i <= 10000; i++){
    let number = Math.ceil(Math.random() * 20)
    console.log(number)
    // obj[number] =  (obj[number] || 0) + 1;

    if (!obj[number]) {
        obj[number] = 1
    }else{
        obj[number] ++
    }
    

}
console.log(obj)


// const express = require('express')
// console.log(express)

// moment('1996-12-4', 'YYYY-MM-DD')