import React from 'react'
import './css/Filter.css'

const Filter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeTypeFilter(event.target.value);
  };

  const dropdownChangeSortHandler = (event) => {
    props.onChangeSortFilter(event.target.value);
  };

  return (
    <div className='filter'>
      <select 
        id="filter__typeSelect"
        value={props.typeSelected}
        onChange={dropdownChangeHandler}
      >
        <option value='식료품'>식료품</option>
        <option value='통신비'>통신비</option>
        <option value='전기료'>전기료</option>
        <option value='가스비'>가스비</option>
        <option value='보험료'>보험료</option>
        <option value='월세'>월세</option>
        <option value='대출이자'>대출이자</option>
        <option value='기타'>기타</option>
      </select>

      <select 
        id="filter__sortSelect"
        value={props.sortSelected}
        onChange={dropdownChangeSortHandler}
      >
        <option value='가격 높은 순'>가격 높은 순</option>
        <option value='가격 낮은 순'>가격 낮은 순</option>
        <option value='최신 순'>최신 순</option>
        <option value='오래된 순'>오래된 순</option>
      </select>

      <input type="date" id="sortDateStart" required />

      <input type="date" id="sortDateEnd" required />

    </div>
  )
}

export default Filter
