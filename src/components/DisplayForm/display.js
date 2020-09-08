import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './display.css'
import Navbar from '../Navbar/Navbar';
const Display = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        let api = 'https://contact-form-69cba.firebaseio.com/details.json'
        axios.get(api)
            .then(response => {
                const loadedData = [];
                for (const key in response.data) {
                    loadedData.push({
                        id: key,
                        name: response.data[key].name,
                        email: response.data[key].email,
                        phoneNo: response.data[key].phoneNo,
                        gender: response.data[key].gender,
                        date: response.data[key].date
                    });
                }
                console.log(loadedData)
                setData(loadedData)
            })
    }, [])
    let newData = data.map(row => (
        <tr key={Math.random()} >
            <td>{row.name}</td>
            <td>{row["email"]}</td>
            <td>{row["phoneNo"]}</td>
            <td>{row["gender"]}</td>
            <td>{row["date"]}</td>
        </tr>
    ))
    return (
        <div>
            <Navbar />
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {newData}
                </tbody>
            </table>
        </div>
    )
}

export default Display
