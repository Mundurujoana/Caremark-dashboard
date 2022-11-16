import React from 'react'
import './dashboard.css';
import Button from './Button';
import {data} from './Data'

const Dashboard = () => {
// Example of a data array that
// you might receive from an API

  return (
    <div className='dashboard'>
         <div className='dash-title'>
          <h3>TB patient medication image verification </h3>
      </div>
<table>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Location</th>
          <th>Date</th>
          <th>Images</th>

        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
             <td>{val.No}</td>
              <td>{val.name}</td>
              <td>{val.gender}</td>
              <td>{val.location}</td>
              <td>{val.date}</td>
              <td>{<Button/>}</td>
            </tr>
          )
        })}
      </table>
      {/* <p>
     Want to see more? 
      <Link className="link" to="/">Readmore</Link>

    </p> */}
    </div>
  )
}

export default Dashboard