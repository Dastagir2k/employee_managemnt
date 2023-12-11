const express=require('express');
const cors=require('cors');
const app= express();
const mysql=require('mysql2')

const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root',
    database:'employee_db',
})


// name, department, designation, salary, dob, address
app.use(cors())
app.use(express.json());
app.post('/create',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const gender=req.body.gender;
    const department=req.body.department;
    const designation=req.body.designation;
    const dob = req.body.dob;
    db.query('INSERT INTO employee (name,email,gender,department,designation,dob) VALUES (?,?,?,?,?,?)',
    [name,email,gender,department,designation,dob],
    (err,result)=>{
        if(err) {
            console.log(err);
        }else{
            res.send('Data inserted successfully');
        }
    });

});


app.get('/show',(req,res)=>{
    db.query('SELECT * FROM employee',(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})
app.listen(3002,()=>{
    console.log("server is running on port 3002");
})


// db.connect((err) => {
//     if (err) {
//         console.error("Error connecting to MySQL!!");
//         return;
//     }
//     console.log("Connected to MySQL database!");
// });

// // // Close the database connection (optional)
// db.end();

//create table