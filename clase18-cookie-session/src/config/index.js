import { connect } from 'mongoose'
import { orderModel } from '../models/order.model.js'


const ordenes = [
    {
      name: "Margherita",
      size: "small",
      price: 8,
      quantity: 2,
      date: "2021-01-13T09:08:13Z"
    },
    {
      name: "Pepperoni",
      size: "medium",
      price: 12,
      quantity: 1,
      date: "2020-05-13T09:08:13Z"
    },
    {
      name: "Hawaiian",
      size: "medium",
      price: 16,
      quantity: 3,
      date: "2022-03-11T09:08:13Z"
    },

    {
        name: "Hawaiian",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-14T09:08:13Z"
    },
    {
        name: "Margherita",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-11T09:08:12Z"
    },
    {
        name: "Pepperoni",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-15T09:08:13Z"
    },
    {
        name: "Pepperoni",
        size: "large",
        price: 25,
        quantity: 3,
        date: "2022-03-18T09:08:12Z"
    },
    {
        name: "Margherita",
        size: "large",
        price: 30,
        quantity: 3,
        date: "2022-03-21T09:08:12Z"
    }
  ]

export const connectDb = async () => {
    console.log('base de datos conectada')
    connect('mongodb://127.0.0.1:27017/c53145')
    // definir las operaciones 
    
    //insertar las órdenes
    // let result = await orderModel.insertMany(ordenes)
    // console.log(result)
    
    //solicitar las ordenes 
    // let orders = await orderModel.find({})
    // console.log(result)
    
    // aggregations stage -> pasos
    // const tamanio = 'small'
    // let result = await orderModel.aggregate([
    //     {
    //         // primer paso
    //         $match: {size: tamanio}
    //     },
    //     {
    //         $group: {_id: "$name", totalQuantity: {$sum: "$quantity"}}
    //     },
    //     {
    //         $sort: {totalQuantity: -1}
    //     },
    //     {
    //         $group: {_id: 1, orders: {$push: "$$ROOT"}}
    //     },
    //     {
    //         $project: {"_id": 0, orders: "$orders"},
    //     },
    //     {
    //         $merge: {into: 'reports'}
    //     }
    // ])

    // console.log(result)

}

