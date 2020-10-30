import React from "react"

export const DisplayEmployees = (props) => {
        const {id, firstName, lastName, age, department, work} = props
        
        return (
            <tr>
                <th scope="row" key={id}>{id}</th>
                <td>{`${firstName} ${lastName}`}</td>
                <td>{age}</td>
                <td>{department}</td>
                <td>{work}</td>
            </tr>
        )
    }