import React, {useState} from 'react'
import './dashboard.css';
import Button from './Button';
import {data} from './Data'



const Dashboard = () => {
// Example of a data array that
// you might receive from an API
const[value, setValue] = useState("")
const[dataSource , setDataSource] = useState(data)
const[tableFilter, setTableFilter] = useState([])

const filterData = (e) =>{
  if(e.target.value !=""){
  setValue(e.target.value)
  const filterTable = dataSource.filter(o=>Object.keys(o)
  .some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())))
  setTableFilter([...filterTable])
  }else{
    setValue(e.target.value)
    setDataSource([...dataSource])
  }}

  return (
    <div className='dashboard'>
         <div className='dash-title'>
          <h3>TB patient medication image verification </h3>
      </div>
         <div className="search-center">
          <input type="text" placeholder="Search for........" value={value} onChange={filterData} />
          {/* <button type="submit" className='submit'>Search</button> */}
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
        {value.length > 0 ? tableFilter.map((tabData) => {
        
          return (
            <tr>
             <td>{tabData.No}</td>
              <td>{tabData.name}</td>
              <td>{tabData.gender}</td>
              <td>{tabData.location}</td>
              <td>{tabData.date}</td>
              <td>{<Button/>}</td>
            </tr>
          )
        }):
      dataSource.map((tabData) =>{
        return (
          <tr>
           <td>{tabData.No}</td>
            <td>{tabData.name}</td>
            <td>{tabData.gender}</td>
            <td>{tabData.location}</td>
            <td>{tabData.date}</td>
            <td>{<Button/>}</td>
          </tr>
        )
      })
      }
      </table>
      {/* <p>
     Want to see more? 
      <Link className="link" to="/">Readmore</Link>

    </p> */}
    </div>
  )
}

export default Dashboard