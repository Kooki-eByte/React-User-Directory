import React, { useMemo, useState } from "react";
import "../styles/componentStyles.css";

const useSortableData = (employees, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);
  
    const sortedEmployees = useMemo(() => {
      let sortableEmployees = [...employees];
      if (sortConfig !== null) {
        sortableEmployees.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableEmployees;
    }, [employees, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { employees: sortedEmployees, requestSort, sortConfig };
};

export default function DisplayEmployees(props) {
    const {allEmployees} = props
    const { employees, requestSort, sortConfig } = useSortableData(allEmployees);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
        return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };  

    if (!searchTerm) {
        return (
            <div>
                <div>
                    <input
                    type="text"
                    placeholder="Search By First Name"
                    value={searchTerm}
                    onChange={handleChange}
                    />
                </div>
    
                <table className="table table-hover table-dark">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("id")}
                        className={getClassNamesFor('id')}
                        >
                        ID
                        </button>
                    </th>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("name")}
                        className={getClassNamesFor('name')}
                        >
                        Name
                        </button>
                    </th>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("age")}
                        className={getClassNamesFor('age')}
                        >
                        Age
                        </button>
                    </th>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("department")}
                        className={getClassNamesFor('department')}
                        >
                        Department
                        </button>
                    </th>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("work")}
                        className={getClassNamesFor('work')}
                        >
                        Occupation
                        </button>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{`${employee.firstName} ${employee.lastName}`}</td>
                            <td>{employee.age}</td>
                            <td>{employee.department}</td>
                            <td>{employee.work}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>        
        )
    } else {
        return (
            <div>
                <div>
                    <input
                    type="text"
                    placeholder="Search By First Name"
                    value={searchTerm}
                    onChange={handleChange}
                    />
                </div>
    
                <table className="table table-hover table-dark">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("id")}
                        className={getClassNamesFor('id')}
                        >
                        ID
                        </button>
                    </th>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("name")}
                        className={getClassNamesFor('name')}
                        >
                        Name
                        </button>
                    </th>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("age")}
                        className={getClassNamesFor('age')}
                        >
                        Age
                        </button>
                    </th>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("department")}
                        className={getClassNamesFor('department')}
                        >
                        Department
                        </button>
                    </th>
                    <th scope="col">
                        <button
                        type="button"
                        onClick={() => requestSort("work")}
                        className={getClassNamesFor('work')}
                        >
                        Occupation
                        </button>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.filter((employee => employee.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()))).map(newEmployee =>(
                        <tr key={newEmployee.id}>
                            <td>{newEmployee.id}</td>
                            <td>{`${newEmployee.firstName} ${newEmployee.lastName}`}</td>
                            <td>{newEmployee.age}</td>
                            <td>{newEmployee.department}</td>
                            <td>{newEmployee.work}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
    
}