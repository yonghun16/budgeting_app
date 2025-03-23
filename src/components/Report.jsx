import React from 'react'
import './css/Report.css'

const Report = ({item}) => {
  return (
    <div className='report'>
      <ol>
        {item.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Report
