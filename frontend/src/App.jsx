// import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");
  const [employee, setEmployee] = useState([]);

  const AddEmployee = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/create", {
      name: name,
      email: email,
      gender: gender,
      designation: designation,
      dob: dob,
      department: department,
    })
      .then(() => {
        console.log("Success");
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  };

  const ShowEmployee = () => {
    Axios.get("http://localhost:3002/show")
      .then((result) => {
        setEmployee(result.data);
        console.log(result);
      })
      .catch((err) => {
        console.log("Error occur while displaying: " + err);
      });
  };

  return (
    <div className="App bg-primary">
    <h1 className="mb-4 text-center">Employee Management System</h1>
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="col-md-12 p-5 border rounded bg-primary">
            <div className="form-group">
              <label className="h3">Name:</label>
              <input
                required
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control mt-2"
              />
            </div>
            <div className="form-group">
              <label className="h3">Email:</label>
              <input
                required
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control mt-2"
              />
            </div>
            <div className="form-group">
              <label className="h3">DOB:</label>
              <input
                required
                type="date"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                className="form-control mt-2"
              />
            </div>
            <div className="form-group">
              <label className="h3">Gender:</label>
              <input
                required
                type="text"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className="form-control mt-2"
              />
            </div>
            <div className="form-group">
              <label className="h3">Designation:</label>
              <input
                required
                type="email"
                onChange={(e) => {
                  setDesignation(e.target.value);
                }}
                className="form-control mt-2"
              />
            </div>
            <div className="form-group">
              <label className="h3">Department:</label>
              <input
                required
                type="email"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                className="form-control mt-2"
              />
            </div>
            
            <div className="text-center">
              <button
                onClick={AddEmployee}
                className="btn btn-success btn-primary p-2 mt-4 w-100"
              >
                Add Employee
              </button>
              </div>
        <div className="text-center">
          <button
            onClick={ShowEmployee}
            className="btn btn-success btn-primary p-2 mt-4 w-100 "
          >
            Show Employee
          </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* <div className="employees"></div> */}
                    
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
          <div className="w-120 rounded ">
            <table className="table ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>dob</th>
                  <th>Department</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((val, index) => (
                  <tr key={index} className="employee">
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.gender}</td>
                    <td>{val.dob}</td>
                    <td>{val.department}</td>
                    <td>{val.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* {employee.map((val, index) => (
  <div key={index} className='employee'>
    <h2>Name: {val.name}</h2>
    <h2>Email: {val.email}</h2>
    <h2>Gender: {val.gender}</h2>
    <h2>DOB: {val.dob}</h2>
    <h2>Department: {val.department}</h2>
    <h2>Designation: {val.designation}</h2>
  </div>
))} */}
      </div>
    </div>
  );
}

export default App;
