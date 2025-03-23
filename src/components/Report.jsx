import React from 'react'
import './css/Report.css'

const Report = ({item}) => {
  return (
    console.log(item),
    <div className='report'>
      <ul>
        {item.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Report
