import express, { Request, Response } from "express";
import { type } from "os";
// import db from '../databaseConfig';
// import { connect } from '../db'
import { pool } from "../dbConfig";

const user = (req: Request, res: Response) => {
    let obj = {
        x:10,
        y:20,
        z:30
    }
    let data = addSum(obj);
    
    // ---------------------------------------------------
    // const conn = await connect();
    // const courses = await conn.query('SELECT * FROM product');
    // const course = pool.query('SELECT * FROM product)
    // return res.json(courses[0]);
    pool.query('SELECT * from product', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        return res.json({data:results});
      });
    // -----------------------------------------------------
    // res.json({
    //     message: "User says - Hello World!",
    //     data: data,
    // });
};

// interface for object.
interface objInt{
    x: number,
    y: number,
    z: number
}
// type for function - kis type ka data lega aur kis type ka data return karega.
// return function me number type dene par error dega kyonki string bhi aa raha hai.
type sumCheck = (x:objInt) => string;

const addSum:sumCheck = (obj:objInt)=>{
    return obj.x * obj.y * obj.z + "ak";
};






export {
    user,
};


