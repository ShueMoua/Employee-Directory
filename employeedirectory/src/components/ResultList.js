import React from "react";

function ResultList(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results
                    .map((employee, index) => {
                        return (
                            <tr key={index}>
                                <td><img alt="Employee" src={employee.picture.thumbnail} /></td>
                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.date.substring(0, 10)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}


export default ResultList;