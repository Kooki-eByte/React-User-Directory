import React from "react"

export const AllEmployees = (props) => {
        const {id, firstName, lastName, age, department, work} = props
        const myStyle = {
            maxWidth: "20rem"
        }
        return (
            <div className="col col-sm-12 col-md-6 col-lg-3">
                <div className="card bg-warning mb-3" style={myStyle}>
                    <div className="card-header">{`${firstName} ${lastName}`}</div>
                    <div className="card-body">
                    <h5 className="card-title">{`Employee #${id}`}</h5>
                    <p className="card-text">
                        <ul>
                            <li>{`Age: ${age}`}</li>
                            <li>{`Department: ${department}`}</li>
                            <li>{`Occupation: ${work}`}</li>
                        </ul>
                    </p>
                    </div>
                </div>
            </div>
        )
    }