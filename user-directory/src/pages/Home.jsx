import React, { useState } from "react";
import { DisplayEmployees } from "../components/DisplayEmployees";
import Employees from "../seed/randomEmps.json";


export default function Home() {
    // TODO Create a sorter that is configed to each button dynamically

    const [sort, setSort] = useState(null)
    let sortedProducts = [...Employees];
    if (sort !== null) {
        sortedProducts.sort((a, b) => {
        if (a[sort] < b[sort]) {
            return -1;
        }
        if (a[sort] > b[sort]) {
            return 1;
        }
        return 0;
        });
    }


    return (
        <table className="table table-hover table-dark">
            <thead className="thead-dark">
                <tr>
                <th scope="col">
                    <button
                    type="button"
                    onClick={() => setSort("id")}
                    // className={getClassNamesFor('id')}
                    >
                    ID
                    </button>
                </th>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => setSort("name")}
                    // className={getClassNamesFor('name')}
                    >
                    Name
                    </button>
                </th>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => setSort("age")}
                    // className={getClassNamesFor('age')}
                    >
                    Age
                    </button>
                </th>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => setSort("department")}
                    // className={getClassNamesFor('department')}
                    >
                    Department
                    </button>
                </th>
                <th scope="col">
                    <button
                    type="button"
                    // onClick={() => setSort("work")}
                    // className={getClassNamesFor('work')}
                    >
                    Occupation
                    </button>
                </th>
                </tr>
            </thead>
        <tbody>
            {Employees.map((employee) => (
            <DisplayEmployees {...employee}/>
            ))}
        </tbody>
    </table>
    )
}