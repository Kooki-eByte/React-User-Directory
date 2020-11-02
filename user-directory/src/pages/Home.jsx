import React from "react";
import DisplayEmployees from "../components/DisplayEmployees";
import Employees from "../seed/randomEmps.json";


export default function Home() {
    return (
        <div>
            <DisplayEmployees allEmployees={Employees} />
        </div>
    )
}