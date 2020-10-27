import React from "react";
import { AllEmployees } from "../components/AllEmployees";
import Employees from "../seed/randomEmps.json";
import "./styles.css";

export default function Home() {
    return (
        // If there is no filter by prop or sort cate then load All Employees normally
        <div className="container" >
            <form >
                
            </form>

            
            <h1>User Directory</h1>
            <div className="row">
                {Employees.map(employee => (
                    <AllEmployees {...employee}/>
                ))}
            </div>
            
        </div>

        // If their is a filter then load based on filter

        // If their is a sort by cate then load based on sort

    )
}