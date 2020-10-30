import React from "react";
import Employees from "../seed/randomEmps.json";



export default function Home() {
    return (
        <table className="table table-hover table-dark">
            <thead className="thead-dark">
                <tr>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => requestSort('name')}
                    // className={getClassNamesFor('name')}
                    >
                    ID
                    </button>
                </th>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => requestSort('name')}
                    // className={getClassNamesFor('name')}
                    >
                    Name
                    </button>
                </th>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => requestSort('price')}
                    // className={getClassNamesFor('price')}
                    >
                    Age
                    </button>
                </th>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => requestSort('stock')}
                    // className={getClassNamesFor('stock')}
                    >
                    Department
                    </button>
                </th>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => requestSort('stock')}
                    // className={getClassNamesFor('stock')}
                    >
                    Occupation
                    </button>
                </th>
                </tr>
            </thead>
        <tbody>
            {Employees.map((employee) => (
            <tr>
                <th scope="row" key={employee.id}>{employee.id}</th>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.age}</td>
                <td>{employee.department}</td>
                <td>{employee.work}</td>
            </tr>
            ))}
        </tbody>
    </table>
    )
}